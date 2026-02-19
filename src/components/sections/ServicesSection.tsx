"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    title: "Ticketing guasti",
    desc: "Segnala un problema in pochi tap. Traccia lo stato in tempo reale fino alla risoluzione.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Tecnici verificati",
    desc: "Rete di professionisti selezionati e monitorati. Idraulici, elettricisti, fabbri, tuttofare.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Dashboard real-time",
    desc: "Panoramica completa: ticket aperti, tempi di risposta, costi per alloggio e trend.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-6" />
      </svg>
    ),
  },
  {
    title: "Notifiche in tempo reale",
    desc: "Ogni cambio di stato ti arriva subito. Sai sempre a che punto siamo con ogni intervento.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: "Report e analytics",
    desc: "Esporta report dettagliati. Costi, interventi, tempi. Tutto misurato, niente a occhio.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Multi-propriet\u00e0",
    desc: "Gestisci 5 o 500 alloggi dalla stessa piattaforma. Scala senza complicazioni.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5 9.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Calendario interventi",
    desc: "Pianifica manutenzioni, sopralluoghi e check-out. Tutto sincronizzato in un\u2019unica vista.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Gestione fornitori",
    desc: "Assegna i tecnici giusti per zona e specialit\u00e0. Monitora performance e costi.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Storico completo",
    desc: "Ogni intervento registrato. Cerca per alloggio, data o tecnico in pochi secondi.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="servizi" className="py-20 md:py-28 bg-surface" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16 reveal ${vis ? "revealed" : ""}`}>
          <div className="max-w-[700px]">
            <span className="inline-block text-[11px] font-semibold text-dark uppercase tracking-[0.08em] border border-border rounded-full px-3.5 py-1.5 mb-5">
              Piattaforma
            </span>
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight">
              Tutto sotto controllo.{" "}
              <br className="hidden md:block" />
              Da un&apos;unica piattaforma.
            </h2>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-4 shrink-0 mt-2 lg:mt-8">
            <div className="w-[60px] h-[60px] rounded-xl bg-white border border-border flex flex-col items-center justify-center p-1.5">
              <span className="text-[18px] font-bold text-primary leading-none">4.9</span>
              <div className="flex gap-px mt-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="8" height="8" viewBox="0 0 20 20" fill="#F16B01"><path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z"/></svg>
                ))}
              </div>
              <span className="text-[6px] text-secondary/40 mt-0.5 font-medium">RATING</span>
            </div>
            <div className="w-[60px] h-[60px] rounded-xl bg-white border border-border flex flex-col items-center justify-center p-1.5">
              <span className="text-[18px] font-bold text-dark leading-none">97%</span>
              <span className="text-[6px] text-secondary/40 mt-1 font-medium text-center leading-tight">RISOLUZIONE</span>
            </div>
            <div className="w-[60px] h-[60px] rounded-xl bg-white border border-border flex flex-col items-center justify-center p-1.5">
              <span className="text-[18px] font-bold text-dark leading-none">2K+</span>
              <span className="text-[6px] text-secondary/40 mt-1 font-medium text-center leading-tight">CLIENTI</span>
            </div>
          </div>
        </div>

        {/* Grid — icon left, text right */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mb-12 reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.1s" }}>
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="group flex items-start gap-4"
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <div className="w-[52px] h-[52px] rounded-2xl bg-white border border-border flex items-center justify-center text-dark shrink-0 transition-colors duration-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary [&_svg]:transition-colors [&_svg]:duration-200 group-hover:[&_svg]:stroke-white">
                {s.icon}
              </div>
              <div>
                <h3 className="font-display text-[15px] font-bold text-dark mb-1">{s.title}</h3>
                <p className="text-[13px] text-secondary leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`reveal ${vis ? "revealed" : ""}`} style={{ transitionDelay: "0.2s" }}>
          <Link
            href="#"
            className="inline-flex items-center justify-center bg-dark text-white font-semibold text-[14px] rounded-xl px-7 py-3.5 transition-all duration-200 hover:bg-primary hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
          >
            Scopri di più
          </Link>
        </div>
      </div>
    </section>
  );
}
