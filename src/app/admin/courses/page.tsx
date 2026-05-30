const courses = [
  { name: "Quranic Qaidah",                  duration: "3 Months",  enrollments: 32, status: "active"   },
  { name: "Quran Gateway",                   duration: "6 Months",  enrollments: 28, status: "active"   },
  { name: "Quran Memorizing",                duration: "12 Months", enrollments: 19, status: "active"   },
  { name: "Translation of The Holy Quran",   duration: "6 Months",  enrollments: 15, status: "active"   },
  { name: "Women Quranic Course",            duration: "4 Months",  enrollments: 22, status: "active"   },
  { name: "Tajweed Course",                  duration: "3 Months",  enrollments: 8,  status: "inactive" },
];

const statusColors: Record<string, string> = {
  active:   "text-green-400 bg-green-400/10 border border-green-400/30",
  inactive: "text-gray-400 bg-gray-400/10 border border-gray-400/30",
};

export default function AdminCoursesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-white">Courses</h2>
          <p className="text-gray-400 text-sm mt-1">Manage all courses</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-sm font-bold transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          New Course
        </button>
      </div>

      <div className="flex gap-3">
        <input type="text" placeholder="Search courses..." className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)]/60" />
      </div>

      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Course Name</th>
              <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Duration</th>
              <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Enrollments</th>
              <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Status</th>
              <th className="px-5 py-3.5" />
            </tr>
          </thead>
          <tbody>
            {courses.map((c, i) => (
              <tr key={i} className="border-b border-[var(--color-border)] last:border-0 hover:bg-white/[0.02] transition-colors">
                <td className="px-5 py-3.5 text-white font-medium">{c.name}</td>
                <td className="px-5 py-3.5 text-gray-400">{c.duration}</td>
                <td className="px-5 py-3.5 text-white font-semibold">{c.enrollments}</td>
                <td className="px-5 py-3.5">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${statusColors[c.status]}`}>{c.status}</span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-2">
                    <button className="text-gray-400 hover:text-white transition-colors p-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </button>
                    <button className="text-gray-400 hover:text-red-400 transition-colors p-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
