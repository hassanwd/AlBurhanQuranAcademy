import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "alburhan_super_secret_key_change_this_in_production"
);

export async function signToken(payload: Record<string, unknown>) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(SECRET);
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, SECRET);
  return payload;
}

export async function getSession() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) return null;
    const payload = await verifyToken(token);
    return payload as { id: string; email: string; role: string };
  } catch {
    return null;
  }
}
