"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─── Feature data ─── */
const FEATURES = [
  {
    badge: "Dashboard",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-6" />
      </svg>
    ),
    title: <>Tutti i tuoi alloggi. Un colpo d&#8217;occhio.</>,
    bullets: [
      "Ticket aperti, costi, tempi di risposta: tutto in una schermata. Basta fogli Excel e gruppi WhatsApp.",
      "Filtra per alloggio, tecnico o priorit\u00e0. Trovi quello che cerchi in due click.",
      "Esporta report in PDF per i proprietari. Rendicontazione trasparente, zero fatica.",
    ],
    mockup: <DashboardFeatureMockup />,
  },
  {
    badge: "Ticketing",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Un guasto mal gestito ti brucia recensioni e fatturato.",
    bullets: [
      "Basta messaggi a orari assurdi, preventivi che non arrivano, tecnici che spariscono. Ci pensiamo noi.",
      "Staff e addetti segnalano dall\u2019app con foto. Tu ricevi solo la conferma: \u201cProblema risolto\u201d.",
      "Ogni intervento tracciato dall\u2019inizio alla fine. Ospiti soddisfatti, recensioni intatte.",
    ],
    mockup: <TicketMockup />,
    reverse: true,
  },
];

/* ─── Ticket mockup (phone-style) ─── */
function TicketMockup() {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="relative w-[260px] md:w-[280px] bg-white rounded-[2rem] shadow-2xl shadow-black/15 border border-[#E5E5E5] p-2 mx-auto">
        <div className="bg-[#FAFAFA] rounded-[1.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-2">
            <span className="text-[9px] font-semibold text-dark">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-2 rounded-sm border border-dark/30" />
            </div>
          </div>

          {/* Header */}
          <div className="px-4 pb-3 border-b border-[#EFEFEF]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-[10px] font-semibold text-dark">Alta priorit&agrave;</span>
            </div>
            <p className="text-[13px] font-bold text-dark mt-1.5">Perdita rubinetto bagno</p>
            <p className="text-[9px] text-secondary/50 mt-0.5">Via Roma 12, Milano</p>
          </div>

          {/* Details */}
          <div className="px-4 py-3 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-secondary/40">Stato</span>
              <span className="text-[9px] font-semibold text-white bg-primary rounded px-2 py-0.5">In corso</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-secondary/40">Priorit&agrave;</span>
              <span className="text-[9px] font-medium text-amber-600">Media</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-secondary/40">Tecnico</span>
              <span className="text-[9px] font-medium text-dark">Marco Bianchi</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-secondary/40">Creato</span>
              <span className="text-[9px] font-medium text-dark">18 Feb 2026, 10:30</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-secondary/40">Scadenza</span>
              <span className="text-[9px] font-medium text-red-500">Oggi, 16:00</span>
            </div>
          </div>

          {/* Photo */}
          <div className="px-4 pb-3">
            <div className="w-full h-[80px] rounded-lg bg-gradient-to-br from-primary/8 to-primary/3 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="1.5" opacity="0.4">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
          </div>

          {/* CTA */}
          <div className="px-4 pb-4">
            <div className="w-full py-2.5 bg-primary rounded-xl text-center text-[11px] font-semibold text-white">
              Segnala problema
            </div>
          </div>
        </div>
      </div>

      {/* Floating card — ticket detail overlay */}
      <div className="absolute -top-4 -right-8 md:-right-12 w-[200px] bg-white rounded-xl shadow-xl shadow-black/10 border border-[#EBEBEB] p-3.5 z-10">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <p className="text-[10px] font-semibold text-dark">Intervento in corso</p>
        </div>
        <div className="space-y-2 text-[9px]">
          <div>
            <p className="text-secondary/40">Tecnico</p>
            <p className="text-dark font-medium">Marco Bianchi</p>
          </div>
          <div>
            <p className="text-secondary/40">ETA</p>
            <p className="text-dark font-medium">15 minuti</p>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[8px] text-green-600 font-medium">In arrivo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Dashboard feature mockup ─── */
function DashboardFeatureMockup() {
  return (
    <div className="relative">
      {/* Browser-style frame */}
      <div className="relative w-[320px] md:w-[360px] bg-white rounded-xl shadow-2xl shadow-black/15 border border-[#E5E5E5] overflow-hidden mx-auto">
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#FAFAFA] border-b border-[#EFEFEF]">
          <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
          <div className="w-2 h-2 rounded-full bg-[#28C840]" />
          <div className="ml-2 flex-1 bg-white rounded px-2 py-0.5 text-[8px] text-secondary/30 border border-[#EFEFEF]">app.hommi.it/dashboard</div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[12px] font-semibold text-dark">Panoramica</p>
              <p className="text-[9px] text-secondary/40">Ultimo aggiornamento: 2 min fa</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: "Aperti", val: "12", color: "text-primary" },
              { label: "In corso", val: "5", color: "text-amber-500" },
              { label: "Risolti", val: "28", color: "text-green-600" },
            ].map((s) => (
              <div key={s.label} className="bg-[#FAFAFA] rounded-lg p-2 border border-[#F0F0F0] text-center">
                <p className="text-[7px] text-secondary/40 uppercase tracking-wider font-medium mb-0.5">{s.label}</p>
                <p className={`text-[16px] font-bold leading-none ${s.color}`}>{s.val}</p>
              </div>
            ))}
          </div>

          {/* Mini chart */}
          <div className="mb-3">
            <p className="text-[8px] font-semibold text-secondary/40 uppercase tracking-wider mb-2">Ticket settimanali</p>
            <div className="flex items-end gap-1.5 h-[50px]">
              {[40, 65, 35, 80, 55, 70, 45].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-primary/15 relative" style={{ height: `${h}%` }}>
                  <div className="absolute bottom-0 left-0 right-0 rounded-t bg-primary" style={{ height: "55%" }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-1 text-[7px] text-secondary/30">
              <span>Lun</span><span>Mar</span><span>Mer</span><span>Gio</span><span>Ven</span><span>Sab</span><span>Dom</span>
            </div>
          </div>

          {/* Recent activity */}
          <div>
            <p className="text-[8px] font-semibold text-secondary/40 uppercase tracking-wider mb-2">Attivit&agrave; recenti</p>
            <div className="space-y-0">
              {[
                { text: "Ticket #142 risolto", time: "5 min fa", dot: "bg-green-500" },
                { text: "Nuovo: Serratura rotta", time: "12 min fa", dot: "bg-primary" },
                { text: "Tecnico assegnato #139", time: "30 min fa", dot: "bg-blue-500" },
              ].map((a, i) => (
                <div key={i} className="flex items-start gap-2 py-1.5 border-b border-[#F5F5F5] last:border-0">
                  <div className={`w-1.5 h-1.5 rounded-full ${a.dot} mt-1 shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] text-dark truncate">{a.text}</p>
                    <p className="text-[7px] text-secondary/30">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute -bottom-4 -left-8 md:-left-12 w-[190px] bg-white rounded-xl shadow-xl shadow-black/10 border border-[#EBEBEB] p-3.5 z-10">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <p className="text-[10px] font-semibold text-dark">Report pronto</p>
        </div>
        <div className="space-y-2 text-[9px]">
          <div>
            <p className="text-secondary/40">Efficienza</p>
            <p className="text-dark font-medium">+12% vs mese scorso</p>
          </div>
          <div>
            <p className="text-secondary/40">Costo medio</p>
            <p className="text-dark font-medium">&euro;85 per intervento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Checkmark icon ─── */
function Check() {
  return (
    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F16B01" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  );
}

/* ─── Main section ─── */
export default function FeatureShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-site mx-auto px-6 space-y-24 md:space-y-32">
        {FEATURES.map((f, i) => (
          <div
            key={f.badge}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center reveal ${vis ? "revealed" : ""}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {/* Mockup */}
            <div className={`flex justify-center ${f.reverse ? "lg:order-2" : ""}`}>
              {f.mockup}
            </div>

            {/* Copy */}
            <div className={f.reverse ? "lg:order-1" : ""}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center">
                  {f.icon}
                </div>
                <span className="text-[12px] font-semibold text-primary uppercase tracking-[0.12em]">{f.badge}</span>
              </div>

              <h2 className="font-display text-[26px] md:text-[34px] font-bold text-dark leading-[1.15] tracking-tight mb-6">
                {f.title}
              </h2>

              <div className="space-y-4 mb-8">
                {f.bullets.map((b, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check />
                    <p className="text-[14px] md:text-[15px] text-secondary leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>

              <Link
                href="https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw"
                className="inline-flex items-center justify-center bg-primary text-white font-semibold text-[14px] rounded-xl px-7 py-3 transition-all duration-200 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
              >
                Richiedi accesso prioritario
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
