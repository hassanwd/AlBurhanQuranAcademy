import { NextRequest, NextResponse } from "next/server";

// GET /api/enrollments/[id]
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  // TODO: implement fetch single enrollment
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

// PATCH /api/enrollments/[id] — update status
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  // TODO: implement update enrollment status
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

// DELETE /api/enrollments/[id]
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  // TODO: implement delete enrollment
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
