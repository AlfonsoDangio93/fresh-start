"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

/* Map section IDs to contextual CTA when that section already shows "Richiedi accesso prioritario" */
const CONTEXTUAL_CTA: Record<string, { label: string; href: string }> = {
  "come-funziona": { label: "Scopri i piani", href: "#prezzi" },
  servizi: { label: "Richiedi accesso prioritario", href: CTA_URL },
  prezzi: { label: "Richiedi accesso prioritario", href: CTA_URL },
  testimonianze: { label: "Richiedi accesso prioritario", href: CTA_URL },
  faq: { label: "Richiedi accesso prioritario", href: CTA_URL },
};

/* Sections whose inline CTA already says "Richiedi accesso prioritario" — use alternate text */
const SECTIONS_WITH_SAME_CTA = new Set(["come-funziona"]);

const DEFAULT_CTA = { label: "Richiedi accesso prioritario", href: CTA_URL };

export default function MobileBottomCTA() {
  const [show, setShow] = useState(false);
  const [cta, setCta] = useState(DEFAULT_CTA);

  const update = useCallback(() => {
    setShow(window.scrollY > window.innerHeight * 0.7);

    /* Find which section is most visible */
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    let best: { id: string; ratio: number } = { id: "", ratio: 0 };

    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(window.innerHeight, rect.bottom);
      const visibleH = Math.max(0, visibleBottom - visibleTop);
      const ratio = visibleH / window.innerHeight;
      if (ratio > best.ratio) {
        best = { id: sec.id, ratio };
      }
    });

    if (best.id && CONTEXTUAL_CTA[best.id]) {
      setCta(CONTEXTUAL_CTA[best.id]);
    } else {
      /* For sections without an ID (hero, feature showcase, comparison, CTA) check scroll position */
      const heroEnd = document.querySelector("#come-funziona")?.getBoundingClientRect().top ?? 999;
      if (heroEnd > window.innerHeight * 0.5) {
        /* Still in hero/feature area — they have "Richiedi accesso prioritario" */
        setCta({ label: "Scopri come funziona", href: "#come-funziona" });
      } else {
        setCta(DEFAULT_CTA);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [update]);

  const isInternal = cta.href.startsWith("#");

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 transition-all duration-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2">
        {isInternal ? (
          <a
            href={cta.href}
            className="flex-[4] flex items-center justify-center bg-primary text-white font-semibold text-[13px] rounded-lg py-2.5 shadow-md shadow-primary/15 hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
          >
            {cta.label}
          </a>
        ) : (
          <Link
            href={cta.href}
            className="flex-[4] flex items-center justify-center bg-primary text-white font-semibold text-[13px] rounded-lg py-2.5 shadow-md shadow-primary/15 hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
          >
            {cta.label}
          </Link>
        )}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Torna su"
          className="flex-[1] flex items-center justify-center bg-dark/80 hover:bg-primary text-white rounded-lg py-2.5 shadow-md transition-colors duration-200 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
