"use client";

import { Smartphone, Wrench, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    num: "01",
    icon: <Smartphone className="w-6 h-6" />,
    title: "Segnala il guasto",
    desc: "Apri l'app, seleziona l'alloggio e descrivi il problema. Niente telefonate.",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    num: "02",
    icon: <Wrench className="w-6 h-6" />,
    title: "Noi coordiniamo tutto",
    desc: "Il nostro team assegna un tecnico verificato nella tua zona. Tu non devi fare nulla.",
    iconBg: "bg-secondary/10 text-secondary",
  },
  {
    num: "03",
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Problema risolto",
    desc: "Aggiornamenti in tempo reale. Conferma a lavoro completato. Tutto tracciato.",
    iconBg: "bg-success/10 text-success",
  },
];

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="come-funziona" className="py-20 md:py-28 bg-surface" ref={ref}>
      <div className="max-w-site mx-auto px-6">
        <div className={`text-center mb-16 reveal ${vis ? "revealed" : ""}`}>
          <span className="inline-block text-[12px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">Come funziona</span>
          <h2 className="font-display text-[30px] md:text-[42px] font-bold text-dark leading-[1.1] tracking-tight">
            Tre passi. Zero pensieri.
          </h2>
          <p className="mt-4 text-secondary text-[16px] md:text-[18px] max-w-[480px] mx-auto leading-relaxed">
            Dalla segnalazione alla risoluzione, ci pensiamo noi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`relative bg-white rounded-2xl border border-border p-8 hover:shadow-lg transition-all duration-200 group cursor-default reveal ${vis ? "revealed" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="text-[64px] font-display font-bold text-dark/[0.04] absolute top-4 right-6 leading-none select-none group-hover:text-primary/[0.08] transition-colors duration-200" aria-hidden="true">
                {step.num}
              </span>
              <div className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center mb-5`}>{step.icon}</div>
              <h3 className="font-display text-[18px] font-bold text-dark mb-2">{step.title}</h3>
              <p className="text-[15px] text-secondary leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
