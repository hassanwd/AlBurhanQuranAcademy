"use client";

import { useEffect, useState } from "react";

const statusColors: Record<string, string> = {
  pending:  "text-yellow-400 bg-yellow-400/10 border border-yellow-400/30",
  approved: "text-green-400 bg-green-400/10 border border-green-400/30",
  rejected: "text-red-400 bg-red-400/10 border border-red-400/30",
};

type EnrollmentRecord = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  country?: string;
  gender?: string;
  age?: string;
  guardianName?: string;
  guardianPhone?: string;
  convenientTimeFrom?: string;
  convenientTimeTo?: string;
  frequency?: string;
  daySlot?: string;
  message?: string;
  status: string;
  createdAt: string;
};

export default function AdminEnrollmentsPage() {
  const [enrollments, setEnrollments] = useState<EnrollmentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEnrollments() {
      try {
        const res = await fetch("/api/enrollments");
        if (!res.ok) throw new Error("Unable to load enrollments");
        const data = await res.json();
        setEnrollments(data.enrollments || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadEnrollments();
  }, []);

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
        {loading ? (
          <p className="px-5 py-6 text-gray-400">Loading enrollments...</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Student</th>
                <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Course</th>
                <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Details</th>
                <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Date</th>
                <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((e) => (
                <tr key={e._id} className="border-b border-[var(--color-border)] last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="text-white font-medium">{e.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{e.email}</p>
                  </td>
                  <td className="px-5 py-3.5 text-gray-400">{e.course}</td>
                  <td className="px-5 py-3.5 text-gray-400 text-xs">
                    <div className="space-y-1">
                      <p>Phone: {e.phone}</p>
                      <p>Country: {e.country || "-"}</p>
                      <p>Gender: {e.gender || "-"}</p>
                      {e.age && <p>Age: {e.age}</p>}
                      {e.guardianName && <p>Guardian: {e.guardianName}</p>}
                      {e.guardianPhone && <p>Guardian Phone: {e.guardianPhone}</p>}
                      {(e.convenientTimeFrom || e.convenientTimeTo) && <p>Time: {e.convenientTimeFrom || "-"} to {e.convenientTimeTo || "-"}</p>}
                      {e.frequency && <p>Frequency: {e.frequency}</p>}
                      {e.daySlot && <p>Days: {e.daySlot}</p>}
                      {e.message && <p>Message: {e.message}</p>}
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500 text-xs">{new Date(e.createdAt).toLocaleDateString()}</td>
                  <td className="px-5 py-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${statusColors[e.status] || statusColors.pending}`}>{e.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
