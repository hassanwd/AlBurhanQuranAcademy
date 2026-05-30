const enrollments = [
  { name: "Aisha Malik",     email: "aisha@email.com",   phone: "+1 330 111 2233", course: "Quran Memorizing",          date: "27 May 2025", status: "approved" },
  { name: "Omar Farooq",     email: "omar@email.com",    phone: "+44 203 222 3344", course: "Tajweed Course",            date: "26 May 2025", status: "pending"  },
  { name: "Fatima Zahra",    email: "fatima@email.com",  phone: "+1 330 333 4455", course: "Quranic Qaidah",            date: "25 May 2025", status: "approved" },
  { name: "Yusuf Ahmed",     email: "yusuf@email.com",   phone: "+44 203 444 5566", course: "Women Quranic Course",     date: "24 May 2025", status: "rejected" },
  { name: "Zainab Hassan",   email: "zainab@email.com",  phone: "+1 330 555 6677", course: "Quran Gateway",             date: "23 May 2025", status: "pending"  },
  { name: "Ibrahim Khan",    email: "ibrahim@email.com", phone: "+44 203 666 7788", course: "Translation of Holy Quran",date: "22 May 2025", status: "approved" },
  { name: "Maryam Siddiqui", email: "maryam@email.com",  phone: "+1 330 777 8899", course: "Quranic Qaidah",           date: "21 May 2025", status: "pending"  },
];

const statusColors: Record<string, string> = {
  pending:  "text-yellow-400 bg-yellow-400/10 border border-yellow-400/30",
  approved: "text-green-400 bg-green-400/10 border border-green-400/30",
  rejected: "text-red-400 bg-red-400/10 border border-red-400/30",
};

export default function AdminEnrollmentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-white">Enrollments</h2>
          <p className="text-gray-400 text-sm mt-1">Manage student enrollment requests</p>
        </div>
        <div className="flex gap-2">
          {["All", "Pending", "Approved", "Rejected"].map((f) => (
            <button key={f} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${f === "All" ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white" : "border-[var(--color-border)] text-gray-400 hover:text-white"}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <input type="text" placeholder="Search by name or course..." className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)]/60" />
      </div>

      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Student</th>
              <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Course</th>
              <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Phone</th>
              <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Date</th>
              <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Status</th>
              <th className="px-5 py-3.5" />
            </tr>
          </thead>
          <tbody>
            {enrollments.map((e, i) => (
              <tr key={i} className="border-b border-[var(--color-border)] last:border-0 hover:bg-white/[0.02] transition-colors">
                <td className="px-5 py-3.5">
                  <p className="text-white font-medium">{e.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{e.email}</p>
                </td>
                <td className="px-5 py-3.5 text-gray-400">{e.course}</td>
                <td className="px-5 py-3.5 text-gray-400 text-xs">{e.phone}</td>
                <td className="px-5 py-3.5 text-gray-500 text-xs">{e.date}</td>
                <td className="px-5 py-3.5">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${statusColors[e.status]}`}>{e.status}</span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-2">
                    <button className="text-gray-400 hover:text-green-400 transition-colors p-1" title="Approve">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </button>
                    <button className="text-gray-400 hover:text-red-400 transition-colors p-1" title="Reject">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
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
