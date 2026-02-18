import Link from "next/link";

const LINKS = {
  Prodotto: ["Come funziona", "Servizi", "Prezzi", "Integrazioni"],
  Azienda: ["Chi siamo", "Blog", "Carriere", "Stampa"],
  Supporto: ["Centro assistenza", "Contattaci", "Status"],
  Legale: ["Privacy Policy", "Termini di servizio", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 cursor-pointer" aria-label="Hommi home">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 10.5L12 3l9 7.5" />
                  <path d="M5 9.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
                </svg>
              </div>
              <span className="text-lg font-display font-bold">Hommi</span>
            </Link>
            <p className="text-[14px] text-white/40 leading-relaxed max-w-[220px]">
              Gestisci la tua casa, anche da lontano.
            </p>
          </div>

          {Object.entries(LINKS).map(([title, items]) => (
            <nav key={title} aria-label={title}>
              <h4 className="text-[13px] font-semibold text-white/30 uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[14px] text-white/50 hover:text-white transition-colors duration-200 cursor-pointer">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-[13px] text-white/30">&copy; {new Date().getFullYear()} Hommi S.r.l. Tutti i diritti riservati.</p>
          <p className="text-[13px] text-white/20">Fatto con cura in Italia</p>
        </div>
      </div>
    </footer>
  );
}
