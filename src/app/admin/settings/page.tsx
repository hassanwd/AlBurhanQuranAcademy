export default function AdminSettingsPage() {
  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-black text-white">Settings</h2>
        <p className="text-gray-400 text-sm mt-1">Manage your account and site settings</p>
      </div>

      {/* Profile */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 flex flex-col gap-5">
        <h3 className="text-white font-bold text-sm uppercase tracking-widest">Profile</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Full Name</label>
            <input type="text" defaultValue="Admin" className="bg-[var(--color-black)] border border-[var(--color-border)] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[var(--color-accent)]/60" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Email</label>
            <input type="email" defaultValue="admin@alburhan.com" className="bg-[var(--color-black)] border border-[var(--color-border)] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[var(--color-accent)]/60" />
          </div>
          <button className="self-start px-5 py-2.5 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-sm font-bold transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 flex flex-col gap-5">
        <h3 className="text-white font-bold text-sm uppercase tracking-widest">Change Password</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Current Password</label>
            <input type="password" placeholder="••••••••" className="bg-[var(--color-black)] border border-[var(--color-border)] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[var(--color-accent)]/60" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">New Password</label>
            <input type="password" placeholder="••••••••" className="bg-[var(--color-black)] border border-[var(--color-border)] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[var(--color-accent)]/60" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Confirm New Password</label>
            <input type="password" placeholder="••••••••" className="bg-[var(--color-black)] border border-[var(--color-border)] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[var(--color-accent)]/60" />
          </div>
          <button className="self-start px-5 py-2.5 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-sm font-bold transition-colors">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
