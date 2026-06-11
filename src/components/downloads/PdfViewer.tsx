"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DownloadCategory, DownloadPdf } from "@/lib/downloadsData";
import { useAuth } from "@/hooks/useAuth";

export default function PdfViewer({ category, pdf }: { category: DownloadCategory; pdf: DownloadPdf }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();

  return (
    <section className="bg-[var(--color-black)] flex flex-col" style={{ minHeight: "calc(100vh - 130px)" }}>

      {/* Top bar */}
      <div className="bg-[var(--color-black-soft)] border-b border-[var(--color-border)] px-4 py-4 shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Link href="/downloads" className="hover:text-[var(--color-accent)] transition-colors">Downloads</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <Link href={`/downloads/${category.id}`} className="hover:text-[var(--color-accent)] transition-colors">{category.name}</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-400 truncate max-w-[160px]">{pdf.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <h1 className="text-white font-black text-lg">{pdf.name}</h1>
              <span className="text-gray-600 text-sm ml-1">({pdf.pages})</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/downloads/${category.id}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-sky)]/40 text-gray-300 hover:text-white text-xs font-semibold transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back
            </Link>

            {!loading && (
              user ? (
                <a
                  href={pdf.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-xs font-bold transition-colors shadow-[0_0_20px_rgba(250,132,30,0.3)]"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download PDF
                </a>
              ) : (
                <Link
                  href={`/login?redirect=${pathname}`}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[var(--color-sky)]/10 hover:bg-[var(--color-sky)]/20 border border-[var(--color-sky)]/30 text-[var(--color-sky)] text-xs font-bold transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Sign in to Download
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* PDF iframe + login overlay for guests */}
      <div className="relative flex-1 w-full" style={{ minHeight: "80vh" }}>

        {/* Always show the iframe */}
        <iframe
          src={pdf.viewUrl}
          className="absolute inset-0 w-full h-full"
          style={{ border: "none" }}
          title={pdf.name}
        />
        {/* Hide Google Drive's top-right expand button */}
        <div className="absolute top-3 right-3 w-14 h-10 bg-[#1E1E1E] z-10" />

        {/* Login gate overlay — only shown to guests, covers bottom ~60% to let first page show */}
        {!loading && !user && (
          <div className="absolute bottom-0 left-0 right-0 z-20" style={{ height: "62%" }}>
            {/* Gradient fade from transparent to solid so it looks natural */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent to-[var(--color-black)]" />
            <div className="absolute inset-x-0 bottom-0 top-32 bg-[var(--color-black)] flex items-center justify-center px-4">
              <div className="flex flex-col items-center gap-5 text-center max-w-sm">
                <div className="w-14 h-14 rounded-full bg-[var(--color-sky)]/10 border border-[var(--color-sky)]/30 flex items-center justify-center">
                  <svg className="w-7 h-7 text-[var(--color-sky)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-black text-lg">Sign in to Read & Download</h3>
                  <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">
                    Create a free account or sign in to access the full PDF and download it.
                  </p>
                </div>
                <div className="flex gap-3 w-full">
                  <Link
                    href={`/register?redirect=${pathname}`}
                    className="flex-1 py-2.5 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-white/30 text-sm font-semibold transition-colors text-center"
                  >
                    Register
                  </Link>
                  <Link
                    href={`/login?redirect=${pathname}`}
                    className="flex-1 py-2.5 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-sm font-bold transition-colors text-center shadow-[0_4px_20px_rgba(250,132,30,0.3)]"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
