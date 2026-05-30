import mongoose, { Schema, models, model } from "mongoose";

const CourseSchema = new Schema(
  {
    title:       { type: String, required: true },
    slug:        { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image:       { type: String },
    duration:    { type: String },
    level:       { type: String, enum: ["beginner", "intermediate", "advanced"], default: "beginner" },
    status:      { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

export const Course = models.Course || model("Course", CourseSchema);
