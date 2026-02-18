"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    title: "Ticketing guasti",
    desc: "Segnala un problema in pochi tap. Traccia lo stato in tempo reale fino alla risoluzione.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
    gradient: "from-primary to-[#FF8C33]",
  },
  {
    title: "Tecnici verificati",
    desc: "Rete di professionisti selezionati e monitorati. Idraulici, elettricisti, fabbri, tuttofare.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4z" /><path d="M9 12l2 2 4-4" /></svg>,
    gradient: "from-secondary to-[#4A6B8A]",
  },
  {
    title: "Dashboard in tempo reale",
    desc: "Panoramica completa: ticket aperti, tempi di risposta, costi per alloggio, trend.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-6" /></svg>,
    gradient: "from-[#0369A1] to-[#38BDF8]",
  },
  {
    title: "Notifiche e aggiornamenti",
    desc: "Ogni cambio di stato ti arriva in tempo reale. Sai sempre a che punto siamo.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
    gradient: "from-[#D97706] to-[#FBBF24]",
  },
  {
    title: "Report e analytics",
    desc: "Esporta report dettagliati. Costi, interventi, tempi. Tutto misurato, niente a occhio.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>,
    gradient: "from-[#7C3AED] to-[#A78BFA]",
  },
  {
    title: "Multi-proprietà",
    desc: "Gestisci 5 o 500 alloggi dalla stessa piattaforma. Scala senza complicazioni.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5" /><path d="M5 9.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" /><path d="M9 20v-6h6v6" /></svg>,
    gradient: "from-[#059669] to-[#34D399]",
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="servizi" className="py-20 md:py-28" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        <div className={`text-center mb-16 reveal ${vis ? "revealed" : ""}`}>
          <span className="inline-block text-[12px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">Servizi</span>
          <h2 className="font-display text-[30px] md:text-[42px] font-bold text-dark leading-[1.1] tracking-tight">
            Tutto sotto controllo. Da un&apos;unica piattaforma.
          </h2>
          <p className="mt-4 text-secondary text-[16px] md:text-[18px] max-w-[500px] mx-auto leading-relaxed">
            Dalla segnalazione al report, ogni passaggio è tracciato e misurabile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-white rounded-2xl border border-border p-7 hover:shadow-lg transition-all duration-200 cursor-default reveal ${vis ? "revealed" : ""}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-200`}>
                {s.icon}
              </div>
              <h3 className="font-display text-[16px] font-bold text-dark mb-2">{s.title}</h3>
              <p className="text-[14px] text-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
