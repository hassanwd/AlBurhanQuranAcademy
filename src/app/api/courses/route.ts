import { NextRequest, NextResponse } from "next/server";

// GET /api/courses — list all courses
export async function GET(req: NextRequest) {
  // TODO: implement fetch all courses
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

// POST /api/courses — create a course
export async function POST(req: NextRequest) {
  // TODO: implement create course
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
