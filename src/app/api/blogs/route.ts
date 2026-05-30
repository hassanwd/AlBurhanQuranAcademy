import { NextRequest, NextResponse } from "next/server";

// GET /api/blogs — list all blogs
export async function GET(req: NextRequest) {
  // TODO: implement fetch all blogs
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

// POST /api/blogs — create a blog
export async function POST(req: NextRequest) {
  // TODO: implement create blog
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
