"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Prodotto",
    megamenu: {
      columns: [
        {
          title: "Funzionalità",
          links: [
            { name: "Ticketing guasti", desc: "Gestisci segnalazioni e interventi in un unico posto" },
            { name: "Dashboard real-time", desc: "Monitora lo stato di tutti i tuoi alloggi" },
            { name: "Gestione tecnici", desc: "Assegna e traccia i tecnici sul campo" },
            { name: "Report e analytics", desc: "Dati e insight per ottimizzare la manutenzione" },
          ],
        },
        {
          title: "Soluzioni",
          links: [
            { name: "Per property manager", desc: "Gestisci decine di alloggi senza stress" },
            { name: "Per agenzie", desc: "Scala le operazioni di manutenzione" },
            { name: "Per host professionali", desc: "Automatizza la gestione degli imprevisti" },
          ],
        },
      ],
    },
  },
  {
    label: "Risorse",
    megamenu: {
      columns: [
        {
          title: "Impara",
          links: [
            { name: "Blog", desc: "Guide e best practice per la gestione immobiliare" },
            { name: "Centro assistenza", desc: "Documentazione e tutorial passo-passo" },
            { name: "Webinar", desc: "Sessioni live con esperti del settore" },
          ],
        },
        {
          title: "Community",
          links: [
            { name: "Storie di successo", desc: "Come i nostri clienti usano Hommi" },
            { name: "Partner", desc: "Entra nel programma partner Hommi" },
          ],
        },
      ],
    },
  },
  {
    label: "Prezzi",
    href: "#prezzi",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [merged, setMerged] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  // Scroll detection — merge after hero, split again on dark sections
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const heroEl = document.querySelector("section");
        const heroEnd = heroEl ? heroEl.offsetTop + heroEl.offsetHeight - 100 : 500;
        const darkEl = document.getElementById("come-funziona");
        const scrollY = window.scrollY;

        if (scrollY <= heroEnd) {
          // Still in hero — split
          setMerged(false);
        } else if (darkEl) {
          const darkTop = darkEl.offsetTop - 80;
          const darkBottom = darkEl.offsetTop + darkEl.offsetHeight - 80;
          if (scrollY >= darkTop && scrollY <= darkBottom) {
            // Inside dark section — split
            setMerged(false);
          } else {
            setMerged(true);
          }
        } else {
          setMerged(true);
        }

        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <nav className="fixed top-4 left-6 right-6 z-50 flex justify-center" role="navigation" aria-label="Navigazione principale">
      <div ref={navRef} className="flex items-stretch max-w-site w-full">
        {/* Outer spacer left — expands when merged to push pills to center */}
        <div className={`hidden md:block nav-spacer-outer ${merged ? "" : "nav-spacer-outer-hidden"}`} />

        {/* ─── Left pill ─── */}
        <div
          className={`
            relative flex items-center bg-white/90 backdrop-blur-md border border-border shadow-sm px-5 py-3
            nav-pill transition-all duration-500 ease-out
            ${merged ? "rounded-l-xl rounded-r-none nav-merged-left" : "rounded-xl"}
          `}
        >
          <Link href="/" className="flex items-center gap-2 cursor-pointer shrink-0" aria-label="Hommi home">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10.5L12 3l9 7.5" />
                <path d="M5 9.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
              </svg>
            </div>
            <span className="text-[16px] font-display font-bold text-dark">Hommi</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 ml-10 text-[13px] font-medium">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megamenu && handleEnter(item.label)}
                onMouseLeave={handleLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="nav-link nav-link-light flex items-center gap-1"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="nav-link nav-link-light flex items-center gap-1"
                    onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden ml-auto p-1.5 text-secondary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* ─── Mega menu dropdown ─── */}
          {NAV_ITEMS.map((item) =>
            item.megamenu && activeMenu === item.label ? (
              <div
                key={item.label}
                className="absolute top-full left-0 mt-2 bg-white rounded-xl border border-border shadow-xl p-5 min-w-[480px] z-50"
                onMouseEnter={() => handleEnter(item.label)}
                onMouseLeave={handleLeave}
              >
                <div className={`grid gap-8 ${item.megamenu.columns.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {item.megamenu.columns.map((col) => (
                    <div key={col.title}>
                      <p className="text-[11px] font-semibold text-secondary/40 uppercase tracking-wider mb-3">{col.title}</p>
                      <div className="space-y-1">
                        {col.links.map((link) => (
                          <Link
                            key={link.name}
                            href="#"
                            className="block px-3 py-2.5 rounded-lg hover:bg-surface transition-colors duration-150 cursor-pointer group"
                            onClick={() => setActiveMenu(null)}
                          >
                            <p className="text-[13px] font-medium text-dark group-hover:text-primary transition-colors duration-150">{link.name}</p>
                            <p className="text-[12px] text-secondary/50 mt-0.5 leading-relaxed">{link.desc}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* Middle spacer — collapses to merge */}
        <div className={`hidden md:block nav-spacer ${merged ? "nav-spacer-collapsed" : ""}`} />

        {/* ─── Right pill ─── */}
        <div
          className={`
            hidden md:flex items-center gap-2 bg-white/90 backdrop-blur-md border border-border shadow-sm px-5 py-3
            nav-pill transition-all duration-500 ease-out
            ${merged ? "rounded-r-xl rounded-l-none nav-merged-right" : "rounded-xl"}
          `}
        >
          <Link href="#" className="text-[13px] font-bold text-secondary hover:text-dark transition-colors duration-200 px-3 py-1.5 cursor-pointer">
            Accedi
          </Link>
          <Link href="#" className="nav-cta-primary">
            Prova gratis
          </Link>
        </div>

        {/* Outer spacer right — expands when merged to push pills to center */}
        <div className={`hidden md:block nav-spacer-outer ${merged ? "" : "nav-spacer-outer-hidden"}`} />
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[62px] left-0 right-0 mx-4 bg-white rounded-xl border border-border shadow-lg p-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href || "#"} className="text-[14px] text-dark font-medium py-2.5 px-4 rounded-lg hover:bg-surface transition-colors duration-200 cursor-pointer" onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <hr className="border-border my-2" />
          <Link href="#" className="nav-cta-primary text-center">Prova gratis</Link>
        </div>
      )}
    </nav>
  );
}
