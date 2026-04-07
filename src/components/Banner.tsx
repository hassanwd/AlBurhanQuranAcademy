"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Button from "./Button";

const slides = [
  { src: "/banner1.jpeg", tag: "Learn, Recite, Understand" },
  { src: "/banner2.jpeg", tag: "A simple way to understand The Quran" },
  { src: "/banner3.jpeg", tag: "Learn The Quran Easily, Step by Step" },
];

export default function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [current, setCurrent] = useState(0);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setCurrent(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Carousel track */}
      <div ref={emblaRef} className="absolute inset-0">
        <div className="flex h-full">
          {slides.map(({ src, tag }, i) => (
            <div key={i} className="relative flex-[0_0_100%] h-full min-h-[90vh]">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${src}')` }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(80,20,0,0.85) 0%, rgba(120,40,0,0.55) 55%, rgba(60,15,0,0.35) 100%)",
                }}
              />
              {/* Per-slide tag */}
              <div className="absolute top-100 left-1/2 -translate-x-1/2 z-10 text-center">
                <span className="text-white/70 text-sm md:text-base tracking-widest uppercase border border-white/20 px-5 py-2 rounded-full backdrop-blur-sm">
                  {tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, rgba(5,20,5,0.85) 0%, transparent 100%)" }}
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-[90vh]">
        <div className="text-center px-4 mx-auto">
          <div
            className="arabic text-4xl md:text-5xl text-white mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            aria-label="Bismillah ir-Rahman ir-Rahim"
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </div>

          <p
            className="text-base md:text-lg text-[var(--color-sky)] tracking-[0.25em] uppercase mb-3 opacity-0 animate-fade-in-up delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            Al Burhan Quran Academy
          </p>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 opacity-0 animate-fade-in-up delay-400"
            style={{ animationFillMode: "forwards" }}
          >
            Online Qur&apos;an{" "}
            <span className="gold-shimmer-text">Classes</span>
          </h1>

          <div className="mt-40 opacity-0 animate-fade-in-up delay-400" style={{ animationFillMode: "forwards" }}>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
              icon={
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
            >
              Request Demo Class
            </Button>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current
                ? "w-8 h-3 bg-[var(--color-accent)]"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
