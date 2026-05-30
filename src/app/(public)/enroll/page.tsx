export const metadata = {
  title: "Enroll | Al Burhan Quran Academy",
  description: "Enroll in a Quran course at Al Burhan Quran Academy.",
};

export default function EnrollPage() {
  return (
    <section className="bg-[var(--color-black)] min-h-screen py-20 px-4 flex items-center justify-center">
      <div className="max-w-xl w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Get Started</span>
          <h1 className="text-3xl font-black text-white mt-2">Enroll Now</h1>
          <p className="text-gray-400 text-sm mt-2">Fill in your details and we will get back to you shortly.</p>
        </div>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="bg-[var(--color-black)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)]/60" />
          <input type="email" placeholder="Email Address" className="bg-[var(--color-black)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)]/60" />
          <input type="tel" placeholder="Phone / WhatsApp" className="bg-[var(--color-black)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)]/60" />
          <select className="bg-[var(--color-black)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-gray-400 text-sm focus:outline-none focus:border-[var(--color-accent)]/60">
            <option value="">Select a Course</option>
            <option>Quranic Qaidah</option>
            <option>Quran Gateway</option>
            <option>Quran Memorizing</option>
            <option>Translation of The Holy Quran</option>
            <option>Women Quranic Course</option>
            <option>Tajweed Course</option>
          </select>
          <button type="submit" className="mt-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold text-sm transition-colors">
            Submit Enrollment
          </button>
        </form>
      </div>
    </section>
  );
}
