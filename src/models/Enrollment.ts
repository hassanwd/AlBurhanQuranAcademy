import mongoose, { Schema, models, model } from "mongoose";

const EnrollmentSchema = new Schema(
  {
    name:    { type: String, required: true },
    email:   { type: String, required: true },
    phone:   { type: String, required: true },
    course:  { type: String, required: true },
    status:  { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    message: { type: String },
  },
  { timestamps: true }
);

export const Enrollment = models.Enrollment || model("Enrollment", EnrollmentSchema);
