import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import { Trial } from "@/models/Trial";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json().catch(() => ({}));
    const status = body.status;

    if (!["pending", "confirmed", "cancelled"].includes(status)) {
      return NextResponse.json({ message: "Invalid status" }, { status: 400 });
    }

    await connectDB();
    const trial = await Trial.findByIdAndUpdate(id, { status }, { new: true }).lean();

    if (!trial) {
      return NextResponse.json({ message: "Trial request not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Trial request updated", trial });
  } catch (error) {
    console.error("Trial status update failed", error);
    return NextResponse.json({ message: "Failed to update trial request" }, { status: 500 });
  }
}
