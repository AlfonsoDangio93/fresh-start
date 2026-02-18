"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote: "Da quando usiamo Hommi, gestiamo 40 appartamenti senza impazzire. I guasti vengono risolti prima che l'ospite se ne accorga.",
    name: "Marco Bellini",
    role: "Property Manager · Milano",
    initials: "MB",
  },
  {
    quote: "Il tempo medio di risposta è pazzesco. Prima perdevamo ore al telefono con idraulici e elettricisti, ora ci pensa Hommi.",
    name: "Giulia Ferretti",
    role: "Host Superhost · Firenze",
    initials: "GF",
  },
  {
    quote: "La reportistica è il vero game-changer. Sapere esattamente quanto spendo per ogni alloggio mi ha fatto risparmiare il 30%.",
    name: "Alessandro Conti",
    role: "CEO, StayBright Rentals · Roma",
    initials: "AC",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonianze" className="py-20 md:py-28 bg-surface" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        <div className={`text-center mb-16 reveal ${vis ? "revealed" : ""}`}>
          <span className="inline-block text-[12px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">Testimonianze</span>
          <h2 className="font-display text-[30px] md:text-[42px] font-bold text-dark leading-[1.1] tracking-tight">
            Lo dicono i property manager.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-2xl border border-border p-8 hover:shadow-lg transition-all duration-200 flex flex-col cursor-default reveal ${vis ? "revealed" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex gap-1 mb-5" aria-label="5 stelle su 5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24" stroke="none" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-[15px] text-dark/80 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[13px] font-bold" aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-dark">{t.name}</p>
                  <p className="text-[12px] text-secondary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
