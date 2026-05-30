import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Register | Al Burhan Quran Academy" };

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[var(--color-black)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <Image src="/png-logo.png" alt="Logo" width={60} height={60} className="object-contain" />
          <div className="text-center">
            <p className="text-white font-black text-xl">Al Burhan Quran Academy</p>
            <p className="text-[var(--color-accent)] text-xs tracking-widest uppercase mt-0.5">Admin Portal</p>
          </div>
        </div>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 flex flex-col gap-6">
          <div>
            <h1 className="text-white text-2xl font-black">Create Account</h1>
            <p className="text-gray-400 text-sm mt-1">Register a new admin account</p>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Full Name</label>
              <input type="text" placeholder="John Doe" className="bg-[var(--color-black)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)]/60" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Email</label>
              <input type="email" placeholder="admin@alburhan.com" className="bg-[var(--color-black)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)]/60" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Password</label>
              <input type="password" placeholder="••••••••" className="bg-[var(--color-black)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)]/60" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Confirm Password</label>
              <input type="password" placeholder="••••••••" className="bg-[var(--color-black)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)]/60" />
            </div>
            <button type="submit" className="mt-2 w-full py-3 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold text-sm transition-colors shadow-[0_4px_20px_rgba(250,132,30,0.3)]">
              Create Account
            </button>
          </form>

          <p className="text-center text-gray-500 text-xs">
            Already have an account?{" "}
            <Link href="/login" className="text-[var(--color-accent)] hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
