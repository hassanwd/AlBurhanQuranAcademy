"use client";

import { useEffect, useState } from "react";

import { connectDB } from "@/lib/mongodb";
import { Trial } from "@/models/Trial";

const statusColors: Record<string, string> = {
  pending: "text-yellow-400 bg-yellow-400/10 border border-yellow-400/30",
  confirmed: "text-green-400 bg-green-400/10 border border-green-400/30",
  cancelled: "text-red-400 bg-red-400/10 border border-red-400/30",
};

type TrialRecord = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  course?: string;
  status: string;
  createdAt: string;
};

export default function AdminTrialsPage() {
  const [trials, setTrials] = useState<TrialRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTrials() {
      try {
        const res = await fetch("/api/trials");
        if (!res.ok) throw new Error("Unable to load trial requests");
        const data = await res.json();
        setTrials(data.trials || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadTrials();
  }, []);

  async function updateStatus(id: string, status: string) {
    const res = await fetch(`/api/trials/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) return;

    const data = await res.json();
    setTrials((current) => current.map((trial) => (trial._id === id ? { ...trial, status: data.trial.status } : trial)));
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-black text-white">Trial Class Requests</h2>
        <p className="text-gray-400 text-sm mt-1">Review and manage trial bookings submitted from the site.</p>
      </div>

      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
        {loading ? (
          <p className="px-5 py-6 text-gray-400">Loading trial requests...</p>
        ) : (
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
              {trials.map((trial) => (
                <tr key={trial._id} className="border-b border-[var(--color-border)] last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="text-white font-medium">{trial.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{trial.email}</p>
                  </td>
                  <td className="px-5 py-3.5 text-gray-400">{trial.course || "—"}</td>
                  <td className="px-5 py-3.5 text-gray-400 text-xs">{trial.phone || "—"}</td>
                  <td className="px-5 py-3.5 text-gray-500 text-xs">{new Date(trial.createdAt).toLocaleDateString()}</td>
                  <td className="px-5 py-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${statusColors[trial.status] || statusColors.pending}`}>
                      {trial.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <button
                      onClick={() => updateStatus(trial._id, trial.status === "confirmed" ? "pending" : "confirmed")}
                      className="text-xs font-semibold rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-gray-300 hover:text-white hover:border-[var(--color-accent)] transition-colors"
                    >
                      {trial.status === "confirmed" ? "Mark Pending" : "Mark Active"}
                    </button>
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
