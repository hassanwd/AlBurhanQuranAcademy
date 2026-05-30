import { NextRequest, NextResponse } from "next/server";

// GET /api/blogs/[id] — get single blog
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  // TODO: implement fetch single blog
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

// PUT /api/blogs/[id] — update blog
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  // TODO: implement update blog
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

// DELETE /api/blogs/[id] — delete blog
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  // TODO: implement delete blog
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
