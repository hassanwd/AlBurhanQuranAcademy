import Image from "next/image";
import Link from "next/link";
import { downloadsData } from "@/lib/downloadsData";

export default function DownloadsList() {
  return (
    <section className="bg-[var(--color-black)] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-sky)] rounded-full" />
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Browse</p>
            <h2 className="text-white font-black text-2xl">All Collections</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloadsData.map((cat) => (
            <Link
              key={cat.id}
              href={`/downloads/${cat.id}`}
              className="group relative bg-[var(--color-surface)] rounded-2xl overflow-hidden border-2 border-[var(--color-sky)]/20 hover:border-orange-500/60 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/20 to-transparent" />

                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--color-accent)] text-white shadow-lg">
                    {cat.tag}
                  </span>
                </div>

                {/* File count badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                    <svg className="w-3 h-3 text-[var(--color-sky)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <span className="text-white text-xs font-semibold">{cat.pdfs.length} PDF{cat.pdfs.length !== 1 ? "s" : ""}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-white font-black text-xl group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-tight">
                  {cat.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{cat.description}</p>

                {/* CTA row */}
                <div className="flex items-center justify-between mt-2 pt-4 border-t border-[var(--color-border)]">
                  <span className="text-[var(--color-sky)] text-xs font-semibold uppercase tracking-wider">
                    View Files
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-all duration-300">
                    <svg className="w-4 h-4 text-[var(--color-accent)] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>


            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
