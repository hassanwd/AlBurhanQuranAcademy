const stats = [
  { num: "500+", label: "Students", desc: "Active learners worldwide" },
  { num: "50+", label: "Teachers", desc: "Qualified Quran educators" },
  { num: "10+", label: "Courses", desc: "Structured learning programs" },
];

export default function StatsSection() {
  return (
    <section className="bg-[var(--color-black)] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map(({ num, label, desc }) => (
          <div
            key={label}
            className="flex flex-col items-center text-center py-10 px-6 rounded-2xl border border-[var(--color-sky)]/20 bg-[var(--color-sky)]/5"
          >
            <div className="text-5xl font-black text-[var(--color-sky)] mb-1">{num}</div>
            <div className="text-white font-bold text-lg mb-1">{label}</div>
            <div className="text-gray-400 text-sm">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
