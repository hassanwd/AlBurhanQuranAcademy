import { NextRequest, NextResponse } from "next/server";

// POST /api/trial — book a trial class
export async function POST(req: NextRequest) {
  // TODO: implement trial class booking
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
