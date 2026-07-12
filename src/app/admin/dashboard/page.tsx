import { connectDB } from "@/lib/mongodb";
import { Enrollment } from "@/models/Enrollment";
import { Trial } from "@/models/Trial";

const stats = [
  { label: "Total Enrollments", value: "124", change: "+12 this week",  color: "var(--color-accent)",      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Total Blogs",       value: "38",  change: "+3 this month",  color: "var(--color-sky)",         icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6" },
  { label: "Total Courses",     value: "6",   change: "All active",     color: "var(--color-green-light)", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { label: "Trial Requests",    value: "0",   change: "Pending review", color: "#f59e0b",                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const statusColors: Record<string, string> = {
  pending:  "text-yellow-400 bg-yellow-400/10 border border-yellow-400/30",
  confirmed: "text-green-400 bg-green-400/10 border border-green-400/30",
  cancelled: "text-red-400 bg-red-400/10 border border-red-400/30",
};

async function getRecentTrials() {
  await connectDB();
  return Trial.find({}).sort({ createdAt: -1 }).limit(5).lean();
}

async function getRecentEnrollments() {
  await connectDB();
  return Enrollment.find({}).sort({ createdAt: -1 }).limit(5).lean();
}

export default async function DashboardPage() {
  const [recentTrials, recentEnrollments] = await Promise.all([getRecentTrials(), getRecentEnrollments()]);
  const pendingCount = recentTrials.filter((trial: any) => trial.status === "pending").length;

  stats[3] = { ...stats[3], value: String(recentTrials.length), change: `${pendingCount} pending` };
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-black text-white">Dashboard</h2>
        <p className="text-gray-400 text-sm mt-1">Welcome back, Admin — here&apos;s what&apos;s happening today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ label, value, change, color, icon }) => (
          <div key={label} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}18` }}>
              <svg className="w-5 h-5" fill="none" stroke={color} viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-black text-white">{value}</p>
              <p className="text-gray-400 text-xs mt-0.5">{label}</p>
              <p className="text-xs mt-0.5" style={{ color }}>{change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Enrollments */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
          <h3 className="text-white font-bold text-sm uppercase tracking-widest">Recent Enrollments</h3>
          <a href="/admin/enrollments" className="text-[var(--color-accent)] text-xs font-semibold hover:underline">View All</a>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left px-6 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">Student</th>
              <th className="text-left px-6 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">Course</th>
              <th className="text-left px-6 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">Date</th>
              <th className="text-left px-6 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentEnrollments.map((enrollment: any) => (
              <tr key={enrollment._id} className="border-b border-[var(--color-border)] last:border-0 hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-3.5 text-white font-medium">
                  <div className="flex flex-col">
                    <span>{enrollment.name}</span>
                    <span className="text-xs text-gray-500">{enrollment.email || "—"}</span>
                  </div>
                </td>
                <td className="px-6 py-3.5 text-gray-400">
                  <div className="flex flex-col gap-0.5">
                    <span>{enrollment.course}</span>
                    <span className="text-xs text-gray-500">{enrollment.country || "—"}</span>
                  </div>
                </td>
                <td className="px-6 py-3.5 text-gray-500 text-xs">{new Date(enrollment.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-3.5">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${statusColors[enrollment.status] || statusColors.pending}`}>{enrollment.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Trial Requests */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
          <h3 className="text-white font-bold text-sm uppercase tracking-widest">Recent Trial Requests</h3>
          <a href="/admin/trials" className="text-[var(--color-accent)] text-xs font-semibold hover:underline">View All</a>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left px-6 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">Student</th>
              <th className="text-left px-6 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">Course</th>
              <th className="text-left px-6 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">Date</th>
              <th className="text-left px-6 py-3 text-gray-400 font-semibold text-xs uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentTrials.map((trial: any) => (
              <tr key={trial._id} className="border-b border-[var(--color-border)] last:border-0 hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-3.5 text-white font-medium">{trial.name}</td>
                <td className="px-6 py-3.5 text-gray-400">{trial.course || "—"}</td>
                <td className="px-6 py-3.5 text-gray-500 text-xs">{new Date(trial.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-3.5">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${statusColors[trial.status] || statusColors.pending}`}>{trial.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
