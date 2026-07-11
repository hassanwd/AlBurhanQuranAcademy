import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import { Trial } from "@/models/Trial";

export async function GET() {
  try {
    await connectDB();
    const trials = await Trial.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ trials });
  } catch (error) {
    console.error("Failed to fetch trials", error);
    return NextResponse.json({ message: "Failed to fetch trials" }, { status: 500 });
  }
}
