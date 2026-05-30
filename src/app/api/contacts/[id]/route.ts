import { NextRequest, NextResponse } from "next/server";

// GET /api/contacts/[id]
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  // TODO: implement fetch single contact
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

// PATCH /api/contacts/[id] — mark as read/unread
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  // TODO: implement update contact status
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

// DELETE /api/contacts/[id]
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  // TODO: implement delete contact
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
