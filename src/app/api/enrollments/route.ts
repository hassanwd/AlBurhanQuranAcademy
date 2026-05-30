import { NextRequest, NextResponse } from "next/server";

// GET /api/enrollments — list all enrollments
export async function GET(req: NextRequest) {
  // TODO: implement fetch all enrollments
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

// POST /api/enrollments — create enrollment
export async function POST(req: NextRequest) {
  // TODO: implement create enrollment
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
