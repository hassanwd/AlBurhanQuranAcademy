import { NextRequest, NextResponse } from "next/server";

// GET /api/contacts — list all contacts
export async function GET(req: NextRequest) {
  // TODO: implement fetch all contacts
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

// POST /api/contacts — create contact message
export async function POST(req: NextRequest) {
  // TODO: implement create contact
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
