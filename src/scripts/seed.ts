import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { DEFAULT_COURSES } from "../lib/defaultCourses";

const MONGODB_URI = process.env.MONGODB_URI || "";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is not set in .env.local");
  process.exit(1);
}

if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error("❌ ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env.local");
  process.exit(1);
}

const UserSchema = new mongoose.Schema(
  {
    name:     { type: String, required: true },
    email:    { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role:     { type: String, enum: ["admin", "superadmin"], default: "admin" },
    image:    { type: String, default: "" },
  },
  { timestamps: true }
);

const CourseSchema = new mongoose.Schema(
  {
    title:       { type: String, required: true },
    slug:        { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image:       { type: String },
    status:      { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("✅ Connected to MongoDB");

  const User = mongoose.models.User || mongoose.model("User", UserSchema);
  const Course = mongoose.models.Course || mongoose.model("Course", CourseSchema);

  // Admin user
  const existing = await User.findOne({ email: ADMIN_EMAIL });
  if (existing) {
    console.log("⚠️  Admin already exists. Skipping admin seed.");
  } else {
    const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await User.create({
      name:     "Admin",
      email:    ADMIN_EMAIL,
      password: hashed,
      role:     "superadmin",
    });
    console.log("✅ Admin user created");
  }

  // Default courses (only when the collection is empty, so admin edits are never overwritten)
  const courseCount = await Course.countDocuments();
  if (courseCount > 0) {
    console.log(`⚠️  ${courseCount} course(s) already exist. Skipping course seed.`);
  } else {
    await Course.insertMany(
      DEFAULT_COURSES.map((c) => ({
        title: c.title,
        slug: c.slug,
        description: c.description,
        image: c.image,
        status: "active",
      }))
    );
    console.log(`✅ Seeded ${DEFAULT_COURSES.length} default courses`);
  }

  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err.message);
  process.exit(1);
});
