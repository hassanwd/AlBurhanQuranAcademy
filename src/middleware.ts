import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

const ADMIN_PATHS = ["/admin"];
const PROTECTED_PATHS = ["/enroll"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdmin = ADMIN_PATHS.some((p) => pathname.startsWith(p));
  const isProtected = PROTECTED_PATHS.some((p) => pathname.startsWith(p));

  if (!isAdmin && !isProtected) return NextResponse.next();

  const token = req.cookies.get("token")?.value;

  // No token — redirect to login with ?redirect= so we can come back
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    const payload = await verifyToken(token);

    // Admin routes require admin or superadmin role
    if (isAdmin && payload.role !== "admin" && payload.role !== "superadmin") {
      return NextResponse.redirect(new URL("/login?error=unauthorized", req.url));
    }

    return NextResponse.next();
  } catch {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/admin/:path*", "/enroll/:path*"],
};
