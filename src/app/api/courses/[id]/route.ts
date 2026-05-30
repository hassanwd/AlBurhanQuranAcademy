import { NextRequest, NextResponse } from "next/server";

// GET /api/courses/[id]
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  // TODO: implement fetch single course
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

// PUT /api/courses/[id]
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  // TODO: implement update course
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

// DELETE /api/courses/[id]
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  // TODO: implement delete course
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
