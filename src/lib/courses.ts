import { getSession } from "@/lib/auth";
import { Course } from "@/models/Course";

export const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB
export const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export async function requireAdmin() {
  const session = await getSession();
  if (!session || !["admin", "superadmin"].includes(session.role)) return null;
  return session;
}

export function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function generateUniqueSlug(title: string) {
  const base = slugify(title) || "course";
  let slug = base;
  let n = 2;
  while (await Course.exists({ slug })) {
    slug = `${base}-${n++}`;
  }
  return slug;
}

export function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export type CourseFormResult =
  | { ok: true; title: string; description: string; status: "active" | "inactive"; imageDataUri: string | null }
  | { ok: false; message: string };

export async function parseCourseForm(formData: FormData): Promise<CourseFormResult> {
  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const status = String(formData.get("status") ?? "active").trim();

  if (!title) return { ok: false, message: "Course name is required" };
  if (!description) return { ok: false, message: "Description is required" };
  if (status !== "active" && status !== "inactive")
    return { ok: false, message: "Status must be active or inactive" };

  let imageDataUri: string | null = null;
  const file = formData.get("image");
  if (file instanceof File && file.size > 0) {
    if (!ALLOWED_IMAGE_TYPES.includes(file.type))
      return { ok: false, message: "Only JPG, PNG, WEBP or GIF images are allowed" };
    if (file.size > MAX_IMAGE_SIZE)
      return { ok: false, message: "Image must be 2MB or smaller" };
    const buffer = Buffer.from(await file.arrayBuffer());
    imageDataUri = `data:${file.type};base64,${buffer.toString("base64")}`;
  }

  return { ok: true, title, description, status, imageDataUri };
}
