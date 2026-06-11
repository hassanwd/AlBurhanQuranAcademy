"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");

    if (form.password.length < 6) { setErr("Password must be at least 6 characters."); return; }
    if (form.password !== form.confirm) { setErr("Passwords do not match."); return; }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) { setErr(data.message ?? "Registration failed."); return; }

      // Redirect to login with success flag
      router.push(`/login?registered=1${redirect !== "/" ? `&redirect=${redirect}` : ""}`);
    } catch {
      setErr("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-black)] flex items-center justify-center px-4">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-sky)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">

        {/* Logo */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-[var(--color-accent)]/20 blur-xl scale-125" />
            <Image src="/png-logo.png" alt="Logo" width={64} height={64} className="relative object-contain" />
          </div>
          <div className="text-center">
            <p className="text-white font-black text-xl">Al Burhan Quran Academy</p>
            <p className="text-[var(--color-sky)] text-xs tracking-widest uppercase mt-0.5">Create your account</p>
          </div>
        </div>

        <div className="bg-[var(--color-surface)] border border-white/[0.08] rounded-2xl p-8 flex flex-col gap-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div>
            <h1 className="text-white text-2xl font-black">Create Account</h1>
            <p className="text-gray-400 text-sm mt-1">Register to enroll in courses and access downloads</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {err && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 5a7 7 0 100 14A7 7 0 0012 5z" />
                </svg>
                {err}
              </div>
            )}

            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={set("name")}
                required
                className="bg-[var(--color-black)] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[var(--color-sky)]/50 focus:ring-1 focus:ring-[var(--color-sky)]/20 transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={set("email")}
                required
                className="bg-[var(--color-black)] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[var(--color-sky)]/50 focus:ring-1 focus:ring-[var(--color-sky)]/20 transition-all"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Min. 6 characters"
                  value={form.password}
                  onChange={set("password")}
                  required
                  className="w-full bg-[var(--color-black)] border border-white/10 rounded-xl px-4 py-3 pr-11 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[var(--color-sky)]/50 focus:ring-1 focus:ring-[var(--color-sky)]/20 transition-all"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors">
                  <EyeIcon open={showPass} />
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={form.confirm}
                  onChange={set("confirm")}
                  required
                  className="w-full bg-[var(--color-black)] border border-white/10 rounded-xl px-4 py-3 pr-11 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[var(--color-sky)]/50 focus:ring-1 focus:ring-[var(--color-sky)]/20 transition-all"
                />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors">
                  <EyeIcon open={showConfirm} />
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-1 w-full py-3 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold text-sm transition-all shadow-[0_4px_20px_rgba(250,132,30,0.3)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Creating account...
                </>
              ) : "Create Account"}
            </button>
          </form>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/5" />
            <p className="text-gray-600 text-xs">Already have an account?</p>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <p className="text-center text-sm">
            <Link
              href={`/login${redirect !== "/" ? `?redirect=${redirect}` : ""}`}
              className="text-[var(--color-sky)] hover:underline font-semibold"
            >
              Sign In instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  ) : (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

export default function RegisterPage() {
  return (
    <Suspense>
      <RegisterForm />
    </Suspense>
  );
}
