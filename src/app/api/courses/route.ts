import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Course } from "@/models/Course";
import { Enrollment } from "@/models/Enrollment";
import { requireAdmin, parseCourseForm, generateUniqueSlug, escapeRegex } from "@/lib/courses";

export const dynamic = "force-dynamic";

// GET /api/courses — list all courses with their enrollment totals.
// Enrollments store the course as a title string, so counts are matched by title.
export async function GET() {
  try {
    await connectDB();

    const [courses, counts] = await Promise.all([
      Course.find({}).sort({ createdAt: -1 }).lean(),
      Enrollment.aggregate([{ $group: { _id: "$course", count: { $sum: 1 } } }]),
    ]);

    const countByTitle = new Map(
      counts.map((c: { _id: string; count: number }) => [String(c._id).trim().toLowerCase(), c.count])
    );

    const withCounts = courses.map((c) => ({
      ...c,
      enrollmentCount: countByTitle.get(String(c.title).trim().toLowerCase()) ?? 0,
    }));

    return NextResponse.json({ courses: withCounts });
  } catch (error) {
    console.error("Failed to fetch courses", error);
    return NextResponse.json({ message: "Failed to fetch courses" }, { status: 500 });
  }
}

// POST /api/courses — create a course (admin only, multipart form data)
export async function POST(req: NextRequest) {
  try {
    const session = await requireAdmin();
    if (!session)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const parsed = await parseCourseForm(await req.formData());
    if (!parsed.ok)
      return NextResponse.json({ message: parsed.message }, { status: 400 });

    if (!parsed.imageDataUri)
      return NextResponse.json({ message: "Course image is required" }, { status: 400 });

    await connectDB();

    const duplicate = await Course.findOne({
      title: new RegExp(`^${escapeRegex(parsed.title)}$`, "i"),
    });
    if (duplicate)
      return NextResponse.json({ message: "A course with this name already exists" }, { status: 409 });

    const slug = await generateUniqueSlug(parsed.title);

    const course = await Course.create({
      title: parsed.title,
      slug,
      description: parsed.description,
      status: parsed.status,
      image: parsed.imageDataUri,
    });

    return NextResponse.json({ message: "Course created", course }, { status: 201 });
  } catch (error) {
    console.error("Failed to create course", error);
    return NextResponse.json({ message: "Failed to create course" }, { status: 500 });
  }
}
