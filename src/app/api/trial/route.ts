import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import { validateTrialInput } from "@/lib/trial";
import { Trial } from "@/models/Trial";

// POST /api/trial — book a trial class
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const validation = validateTrialInput(body);

    if (!validation.ok) {
      return NextResponse.json({ message: validation.message }, { status: 400 });
    }

    await connectDB();

    const existing = await Trial.findOne({ email: validation.data.email }).lean();
    if (existing) {
      return NextResponse.json({ message: "A trial request already exists for this email" }, { status: 409 });
    }

    const trial = await Trial.create({
      ...validation.data,
      status: "pending",
    });

    return NextResponse.json({ message: "Trial class request submitted", trial }, { status: 201 });
  } catch (error) {
    console.error("Trial booking failed", error);
    return NextResponse.json({ message: "Failed to submit trial request" }, { status: 500 });
  }
}
