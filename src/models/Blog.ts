import mongoose, { Schema, models, model } from "mongoose";

const BlogSchema = new Schema(
  {
    title:    { type: String, required: true },
    slug:     { type: String, required: true, unique: true },
    excerpt:  { type: String, required: true },
    content:  { type: String, required: true },
    image:    { type: String },
    category: { type: String, required: true },
    status:   { type: String, enum: ["draft", "published"], default: "draft" },
    author:   { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Blog = models.Blog || model("Blog", BlogSchema);
