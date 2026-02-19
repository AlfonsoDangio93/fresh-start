"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Step data ─── */
const STEPS = [
  {
    num: "1",
    title: "Segnala il guasto in pochi tap",
    desc: "Apri l\u2019app, seleziona l\u2019alloggio e descrivi il problema con foto e dettagli. Niente telefonate, niente email perse. Il ticket viene creato in automatico e assegnato al team giusto.",
    mockup: <StepMockup1 />,
  },
  {
    num: "2",
    title: "Noi coordiniamo tutto per te",
    desc: "Il nostro sistema assegna automaticamente un tecnico verificato nella tua zona. Ricevi aggiornamenti in tempo reale sullo stato dell\u2019intervento, dal momento della presa in carico fino alla risoluzione.",
    mockup: <StepMockup2 />,
    reverse: true,
  },
  {
    num: "3",
    title: "Problema risolto, tutto tracciato",
    desc: "Conferma a lavoro completato con foto e report. Storico completo degli interventi, costi e tempi. Dati sempre aggiornati e report pronti all\u2019uso per una gestione trasparente.",
    mockup: <StepMockup3 />,
  },
];

/* ─── Mockup 1: Ticket creation (phone) ─── */
function StepMockup1() {
  return (
    <div className="relative flex justify-center">
      {/* Main card */}
      <div className="w-[300px] bg-white rounded-2xl border border-[#EBEBEB] shadow-xl shadow-black/10 p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-[13px] font-semibold text-dark">Nuovo ticket</p>
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-[12px] text-primary">+</span>
          </div>
        </div>

        {/* Form fields */}
        <div className="space-y-3">
          <div className="bg-[#FAFAFA] rounded-xl p-3 border border-[#F0F0F0]">
            <p className="text-[9px] text-secondary/40 uppercase tracking-wider mb-1">Alloggio</p>
            <p className="text-[12px] text-dark font-medium">Via Roma 12, Milano</p>
          </div>
          <div className="bg-[#FAFAFA] rounded-xl p-3 border border-[#F0F0F0]">
            <p className="text-[9px] text-secondary/40 uppercase tracking-wider mb-1">Problema</p>
            <p className="text-[12px] text-dark font-medium">Perdita rubinetto bagno</p>
          </div>
          <div className="bg-[#FAFAFA] rounded-xl p-3 border border-[#F0F0F0]">
            <p className="text-[9px] text-secondary/40 uppercase tracking-wider mb-1">Priorit&agrave;</p>
            <div className="flex gap-2 mt-1">
              <span className="px-2.5 py-1 rounded-lg bg-red-500/20 text-red-400 text-[9px] font-semibold">Urgente</span>
              <span className="px-2.5 py-1 rounded-lg bg-[#F0F0F0] text-secondary/50 text-[9px] font-medium">Alta</span>
              <span className="px-2.5 py-1 rounded-lg bg-[#F0F0F0] text-secondary/50 text-[9px] font-medium">Media</span>
            </div>
          </div>
          <div className="bg-[#FAFAFA] rounded-xl p-3 border border-[#F0F0F0]">
            <p className="text-[9px] text-secondary/40 uppercase tracking-wider mb-1">Foto</p>
            <div className="flex gap-2 mt-1">
              <div className="w-10 h-10 rounded-lg bg-[#F0F0F0] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#344966" strokeWidth="1.5" opacity="0.35">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#F0F0F0] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#344966" strokeWidth="1.5" opacity="0.35">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-lg border border-dashed border-[#E0E0E0] flex items-center justify-center">
                <span className="text-secondary/25 text-[14px]">+</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4 w-full py-2.5 bg-primary rounded-xl text-center text-[11px] font-semibold text-white">
          Invia segnalazione
        </div>
      </div>

      {/* Floating card */}
      <div className="absolute -bottom-3 -right-2 w-[160px] bg-white rounded-xl border border-[#EBEBEB] shadow-lg shadow-black/8 p-3">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <p className="text-[9px] text-green-400 font-medium">Ticket creato</p>
        </div>
        <p className="text-[8px] text-secondary/50">Assegnazione automatica in corso...</p>
      </div>
    </div>
  );
}

/* ─── Mockup 2: Coordination / tracking ─── */
function StepMockup2() {
  return (
    <div className="relative flex justify-center">
      {/* Main card — list of assignments */}
      <div className="w-[300px] bg-white rounded-2xl border border-[#EBEBEB] shadow-xl shadow-black/10 p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[13px] font-semibold text-dark">Scadenze</p>
          <span className="text-[10px] text-secondary/40">Oggi</span>
        </div>

        <div className="space-y-2.5">
          {[
            { name: "Perdita rubinetto bagno", tech: "M. Bianchi", status: "In arrivo", statusColor: "text-amber-400", dot: "bg-amber-400", time: "Domani" },
            { name: "Caldaia guasta", tech: "L. Verdi", status: "In corso", statusColor: "text-primary", dot: "bg-primary", time: "Tra 2 giorni" },
            { name: "Serratura rotta", tech: "S. Ferri", status: "Assegnato", statusColor: "text-blue-400", dot: "bg-blue-400", time: "Marted\u00ec" },
          ].map((item, i) => (
            <div key={i} className="bg-[#FAFAFA] rounded-xl p-3 border border-[#F0F0F0]">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F0F0F0] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#344966" strokeWidth="1.5" opacity="0.5">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-dark font-medium">{item.name}</p>
                    <p className="text-[9px] text-secondary/40">{item.tech}</p>
                  </div>
                </div>
                <span className="text-[9px] text-secondary/30 shrink-0">{item.time}</span>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <div className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                <span className={`text-[9px] font-medium ${item.statusColor}`}>{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating chat bubble */}
      <div className="absolute -top-2 -right-4 w-[170px] bg-white rounded-xl border border-[#EBEBEB] shadow-lg shadow-black/8 p-3">
        <p className="text-[9px] text-secondary/60 mb-1">Aggiornamento</p>
        <p className="text-[10px] text-dark font-medium">Il tecnico &egrave; in arrivo, ETA 15 min</p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="w-4 h-4 rounded-full bg-primary/30 flex items-center justify-center text-[7px] font-bold text-primary">MB</div>
          <p className="text-[8px] text-secondary/40">Marco Bianchi</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Mockup 3: Report / completion ─── */
function StepMockup3() {
  return (
    <div className="relative flex justify-center">
      {/* Main card */}
      <div className="w-[300px] bg-white rounded-2xl border border-[#EBEBEB] shadow-xl shadow-black/10 p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[13px] font-semibold text-dark">Costo del personale</p>
          <div className="w-6 h-6 rounded-full bg-[#F0F0F0] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#344966" strokeWidth="1.5" opacity="0.4">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-2.5 h-[120px] mb-2">
          {[
            { label: "Gen", h: 45 },
            { label: "Feb", h: 60 },
            { label: "Mar", h: 80, active: true },
            { label: "Apr", h: 55 },
            { label: "Mag", h: 70 },
            { label: "Giu", h: 40 },
          ].map((bar) => (
            <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
              {bar.active && (
                <div className="bg-[#F0F0F0] rounded px-1.5 py-0.5 mb-1">
                  <p className="text-[8px] text-dark/70 font-medium">&euro; 2.450</p>
                </div>
              )}
              <div
                className={`w-full rounded-t ${bar.active ? "bg-primary" : "bg-primary/20"}`}
                style={{ height: `${bar.h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between px-1 text-[8px] text-secondary/30">
          <span>Gen</span><span>Feb</span><span className="text-primary font-medium">Mar</span><span>Apr</span><span>Mag</span><span>Giu</span>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-2 gap-2.5 mt-4">
          {[
            { label: "Risoluzione", val: "97%", sub: "+2%" },
            { label: "Tempo medio", val: "43m", sub: "-12m" },
          ].map((s) => (
            <div key={s.label} className="bg-[#FAFAFA] rounded-xl p-2.5 border border-[#F0F0F0]">
              <p className="text-[8px] text-secondary/40 uppercase tracking-wider mb-0.5">{s.label}</p>
              <p className="text-[16px] font-bold text-dark leading-none">{s.val}</p>
              <p className="text-[8px] text-green-400 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating card */}
      <div className="absolute -bottom-3 -left-2 w-[155px] bg-white rounded-xl border border-[#EBEBEB] shadow-lg shadow-black/8 p-3">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <p className="text-[9px] text-primary font-medium">Report pronto</p>
        </div>
        <p className="text-[8px] text-secondary/50">Esporta in PDF o CSV</p>
      </div>
    </div>
  );
}

/* ─── Typing effect for step titles ─── */
function useStepTyping(text: string, inView: boolean, speed = 40) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      setDisplayed(text.slice(0, idx));
      if (idx >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [inView, text, speed]);

  return { displayed, done };
}

/* ─── Single step block ─── */
function StepBlock({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const blockRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!blockRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(blockRef.current);
    return () => obs.disconnect();
  }, []);

  const { displayed, done } = useStepTyping(step.title, inView, 40);

  const cursor = (
    <span className={`inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-baseline relative top-[0.05em] ${done ? "animate-blink" : ""}`} />
  );

  return (
    <div
      ref={blockRef}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center reveal ${inView ? "revealed" : ""}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Mockup */}
      <div className={`flex justify-center ${step.reverse ? "lg:order-2" : ""}`}>
        {step.mockup}
      </div>

      {/* Text */}
      <div className={step.reverse ? "lg:order-1" : ""}>
        <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center mb-5">
          <span className="text-[13px] font-semibold text-primary">{step.num}</span>
        </div>
        <h3 className="font-display text-[24px] md:text-[30px] font-bold text-white leading-[1.15] tracking-tight mb-4">
          <span className="relative block">
            <span className="invisible" aria-hidden="true">{step.title}</span>
            <span className="absolute inset-0">
              {displayed}
              {!done && cursor}
              {done && cursor}
            </span>
          </span>
        </h3>
        <p className="text-[14px] md:text-[15px] text-white/50 leading-relaxed max-w-[440px]">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── Main section ─── */
export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="come-funziona" className="py-20 md:py-28 bg-dark rounded-[10px]" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 reveal ${vis ? "revealed" : ""}`}>
          <span className="inline-block text-[12px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">Come funziona</span>
          <h2 className="font-display text-[30px] md:text-[42px] font-bold text-white leading-[1.1] tracking-tight">
            Tre passi. Zero pensieri.
          </h2>
          <p className="mt-4 text-white/40 text-[16px] md:text-[18px] max-w-[480px] mx-auto leading-relaxed">
            Dalla segnalazione alla risoluzione, ci pensiamo noi.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20 md:space-y-28">
          {STEPS.map((step, i) => (
            <StepBlock key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
