import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import { validateEnrollmentInput } from "@/lib/enrollment";
import { Enrollment } from "@/models/Enrollment";

export async function GET() {
  try {
    await connectDB();
    const enrollments = await Enrollment.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ enrollments });
  } catch (error) {
    console.error("Failed to fetch enrollments", error);
    return NextResponse.json({ message: "Failed to fetch enrollments" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const validation = validateEnrollmentInput(body);

    if (!validation.ok) {
      return NextResponse.json({ message: validation.message }, { status: 400 });
    }

    await connectDB();
    const payload = {
      ...validation.data,
      status: "pending" as const,
    };
    const enrollment = await Enrollment.create(payload);
    const plainEnrollment = enrollment.toObject();

    return NextResponse.json({ message: "Enrollment submitted", enrollment: plainEnrollment }, { status: 201 });
  } catch (error) {
    console.error("Enrollment submission failed", error);
    return NextResponse.json({ message: "Failed to submit enrollment" }, { status: 500 });
  }
}
