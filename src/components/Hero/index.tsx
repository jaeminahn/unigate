"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const Hero = () => {
  const t = useTranslation();

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[calc(100svh-80px)] items-center overflow-hidden bg-white pt-28 pb-20 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28"
    >
      <div className="container">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary uppercase">
            {t.hero.eyebrow}
          </span>

          <h1 className="mb-6 text-3xl leading-tight font-bold text-black sm:text-4xl md:text-5xl lg:text-[56px]">
            {t.hero.title}
          </h1>

          <p className="text-body-color dark:text-body-color-dark mx-auto mb-10 max-w-[680px] text-base leading-relaxed! sm:text-lg md:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://lms.unigate.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition duration-300 ease-in-out"
            >
              {t.hero.cta}
              <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute top-0 right-0 z-[-1] opacity-30"
        aria-hidden="true"
      >
        <svg
          width="480"
          height="320"
          viewBox="0 0 480 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 260C120 200 220 200 300 220C360 235 420 230 480 210"
            stroke="#155FCC"
            strokeOpacity="0.2"
            strokeWidth="1.5"
          />
          <path
            d="M0 230C100 170 220 170 320 190C380 205 430 200 480 185"
            stroke="#155FCC"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 z-[-1] opacity-30"
        aria-hidden="true"
      >
        <svg
          width="440"
          height="240"
          viewBox="0 0 440 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-20 150C80 120 180 125 260 145C320 165 370 170 440 160"
            stroke="#155FCC"
            strokeOpacity="0.16"
            strokeWidth="1.5"
          />
          <path
            d="M-20 185C100 160 220 160 300 180C350 200 390 205 440 195"
            stroke="#155FCC"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
