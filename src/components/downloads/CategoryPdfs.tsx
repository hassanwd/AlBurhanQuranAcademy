"use client";

import Image from "next/image";
import Link from "next/link";
import { DownloadCategory } from "@/lib/downloadsData";

export default function CategoryPdfs({ category }: { category: DownloadCategory }) {
  return (
    <section className="bg-[var(--color-black)] min-h-screen">

      {/* Hero banner */}
      <div className="relative overflow-hidden bg-[var(--color-black-soft)] border-b border-[var(--color-border)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-accent)]/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-sky)]/8 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-14 flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-2xl shrink-0">
            <Image src={category.image} alt={category.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="flex items-center gap-2 text-xs text-gray-500 justify-center md:justify-start">
              <Link href="/downloads" className="hover:text-[var(--color-accent)] transition-colors">Downloads</Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-400">{category.name}</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--color-accent)] text-white">{category.tag}</span>
              <span className="text-gray-500 text-xs">{category.pdfs.length} file{category.pdfs.length !== 1 ? "s" : ""}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white">{category.name}</h1>
            <p className="text-gray-400 text-base max-w-xl leading-relaxed">{category.description}</p>
          </div>
        </div>
      </div>

      {/* PDF List */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-8 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-sky)] rounded-full" />
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Available</p>
            <h2 className="text-white font-black text-2xl">PDF Files</h2>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-3xl">
          {category.pdfs.map((pdf, i) => (
            <Link
              key={pdf.id}
              href={`/downloads/${category.id}/${pdf.id}`}
              className="group flex items-center gap-5 bg-[var(--color-surface)] rounded-2xl p-5 border-2 border-[var(--color-sky)]/20 hover:border-orange-500/60 transition-all duration-300"
            >
              {/* PDF thumbnail mockup */}
              <div className="relative shrink-0 w-14 h-[72px] rounded-lg overflow-hidden shadow-lg">
                {/* Paper */}
                <div className="absolute inset-0 bg-white rounded-lg" />
                {/* Folded corner */}
                <div className="absolute top-0 right-0 w-0 h-0"
                  style={{ borderStyle: "solid", borderWidth: "0 14px 14px 0", borderColor: "transparent #e5e7eb transparent transparent" }}
                />
                <div className="absolute top-0 right-0 w-0 h-0"
                  style={{ borderStyle: "solid", borderWidth: "14px 14px 0 0", borderColor: "#d1d5db transparent transparent transparent" }}
                />
                {/* PDF label */}
                <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-accent)] py-1 flex items-center justify-center">
                  <span className="text-white text-[9px] font-black tracking-widest">PDF</span>
                </div>
                {/* Lines mockup */}
                <div className="absolute top-3 left-2 right-4 flex flex-col gap-1">
                  <div className="h-0.5 bg-gray-200 rounded-full w-full" />
                  <div className="h-0.5 bg-gray-200 rounded-full w-3/4" />
                  <div className="h-0.5 bg-gray-200 rounded-full w-5/6" />
                  <div className="h-0.5 bg-gray-200 rounded-full w-2/3" />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-widest bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full">PDF</span>
                  <span className="text-gray-600 text-xs">#{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-white font-bold text-base group-hover:text-[var(--color-accent)] transition-colors truncate">
                  {pdf.name}
                </h3>
                <p className="text-gray-500 text-sm truncate">{pdf.description}</p>
                <span className="flex items-center gap-1 text-gray-500 text-xs mt-0.5">
                  <svg className="w-3 h-3 text-[var(--color-sky)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  {pdf.pages}
                </span>
              </div>

              {/* Arrow */}
              <div className="shrink-0 w-9 h-9 rounded-full border border-[var(--color-border)] group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] flex items-center justify-center transition-all duration-300">
                <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
