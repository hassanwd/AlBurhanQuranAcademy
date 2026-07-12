import { z } from "zod";

const enrollmentSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("A valid email is required"),
  phone: z.string().trim().min(5, "Phone is required"),
  country: z.string().trim().min(2, "Country is required"),
  gender: z.string().trim().min(1, "Gender is required"),
  age: z.string().trim().optional().or(z.literal("")),
  guardianName: z.string().trim().optional().or(z.literal("")),
  guardianPhone: z.string().trim().optional().or(z.literal("")),
  convenientTimeFrom: z.string().trim().min(1, "Start time is required"),
  convenientTimeTo: z.string().trim().min(1, "End time is required"),
  frequency: z.string().trim().optional().or(z.literal("")),
  daySlot: z.string().trim().optional().or(z.literal("")),
  course: z.string().trim().min(2, "Course is required"),
  message: z.string().trim().optional().or(z.literal("")),
});

export type EnrollmentInput = z.infer<typeof enrollmentSchema>;

export function buildEnrollmentPayload(form: Record<string, unknown>, course: string): EnrollmentInput {
  return {
    name: String(form.name ?? "").trim(),
    email: String(form.email ?? "").trim().toLowerCase(),
    phone: String(form.phone ?? "").trim(),
    country: String(form.country ?? "").trim(),
    gender: String(form.gender ?? "").trim(),
    age: String(form.age ?? "").trim(),
    guardianName: String(form.guardianName ?? "").trim(),
    guardianPhone: String(form.guardianPhone ?? "").trim(),
    convenientTimeFrom: String(form.convenientTimeFrom ?? "").trim(),
    convenientTimeTo: String(form.convenientTimeTo ?? "").trim(),
    frequency: String(form.frequency ?? "").trim(),
    daySlot: String(form.daySlot ?? "").trim(),
    course: course.trim(),
    message: String(form.message ?? "").trim(),
  };
}

export function sanitizeEnrollmentInput(input: Record<string, unknown>): EnrollmentInput {
  const normalized = { ...input } as Record<string, string | undefined>;

  return {
    name: normalized.name?.trim() ?? "",
    email: (normalized.email ?? "").trim().toLowerCase(),
    phone: normalized.phone?.trim() ?? "",
    country: normalized.country?.trim() ?? "",
    gender: normalized.gender?.trim() ?? "",
    age: normalized.age?.trim() ?? "",
    guardianName: normalized.guardianName?.trim() ?? "",
    guardianPhone: normalized.guardianPhone?.trim() ?? "",
    convenientTimeFrom: normalized.convenientTimeFrom?.trim() ?? "",
    convenientTimeTo: normalized.convenientTimeTo?.trim() ?? "",
    frequency: normalized.frequency?.trim() ?? "",
    daySlot: normalized.daySlot?.trim() ?? "",
    course: normalized.course?.trim() ?? "",
    message: normalized.message?.trim() ?? "",
  };
}

export function validateEnrollmentInput(input: Record<string, unknown>) {
  const sanitized = sanitizeEnrollmentInput(input);
  const result = enrollmentSchema.safeParse(sanitized);

  if (!result.success) {
    return { ok: false as const, message: result.error.issues[0]?.message ?? "Invalid enrollment request" };
  }

  return { ok: true as const, data: result.data };
}
