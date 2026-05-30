const contacts = [
  { name: "Sarah Johnson",  email: "sarah@email.com",   subject: "Trial Class Inquiry",       date: "27 May 2025", read: false },
  { name: "Ahmed Raza",     email: "ahmed@email.com",   subject: "Course Fee Question",        date: "26 May 2025", read: false },
  { name: "Emily Clarke",   email: "emily@email.com",   subject: "Schedule Availability",      date: "25 May 2025", read: true  },
  { name: "Hassan Ali",     email: "hassan@email.com",  subject: "Quran Memorization Program", date: "24 May 2025", read: true  },
  { name: "Nadia Hussain",  email: "nadia@email.com",   subject: "Women Only Classes",         date: "23 May 2025", read: false },
  { name: "James Wilson",   email: "james@email.com",   subject: "Kids Quran Course",          date: "22 May 2025", read: true  },
  { name: "Mariam Tahir",   email: "mariam@email.com",  subject: "General Inquiry",            date: "21 May 2025", read: true  },
  { name: "David Brown",    email: "david@email.com",   subject: "Online Class Setup Help",    date: "20 May 2025", read: false },
  { name: "Sana Sheikh",    email: "sana@email.com",    subject: "Tajweed Course Details",     date: "19 May 2025", read: true  },
];

export default function AdminContactsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-white">Contacts</h2>
          <p className="text-gray-400 text-sm mt-1">Messages from the contact form</p>
        </div>
        <div className="flex gap-2">
          {["All", "Unread", "Read"].map((f) => (
            <button key={f} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${f === "All" ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white" : "border-[var(--color-border)] text-gray-400 hover:text-white"}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <input type="text" placeholder="Search contacts..." className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)]/60" />
      </div>

      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Name</th>
              <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Subject</th>
              <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Date</th>
              <th className="text-left px-5 py-3.5 text-gray-400 font-semibold text-xs uppercase tracking-wider">Status</th>
              <th className="px-5 py-3.5" />
            </tr>
          </thead>
          <tbody>
            {contacts.map((c, i) => (
              <tr key={i} className={`border-b border-[var(--color-border)] last:border-0 hover:bg-white/[0.02] transition-colors ${!c.read ? "bg-[var(--color-accent)]/[0.03]" : ""}`}>
                <td className="px-5 py-3.5">
                  <p className={`font-medium ${!c.read ? "text-white" : "text-gray-300"}`}>{c.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{c.email}</p>
                </td>
                <td className={`px-5 py-3.5 ${!c.read ? "text-white font-medium" : "text-gray-400"}`}>{c.subject}</td>
                <td className="px-5 py-3.5 text-gray-500 text-xs">{c.date}</td>
                <td className="px-5 py-3.5">
                  {!c.read
                    ? <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30">Unread</span>
                    : <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-gray-400 bg-gray-400/10 border border-gray-400/20">Read</span>
                  }
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-2">
                    <button className="text-gray-400 hover:text-white transition-colors p-1" title="View">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </button>
                    <button className="text-gray-400 hover:text-red-400 transition-colors p-1" title="Delete">
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
