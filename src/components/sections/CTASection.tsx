import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-site mx-auto px-6">
        <div className="relative bg-dark rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2" aria-hidden="true" />

          <div className="relative z-10">
            <h2 className="font-display text-[30px] md:text-[46px] font-bold text-white leading-[1.1] tracking-tight">
              Pronto a smettere di rincorrere
              <br />
              idraulici ed elettricisti?
            </h2>
            <p className="mt-5 text-white/60 text-[16px] md:text-[18px] max-w-[460px] mx-auto leading-relaxed">
              200+ property manager hanno già scelto Hommi.
              Prova gratis per 14 giorni, nessun vincolo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-dark"
              >
                Inizia gratis
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center text-white/70 hover:text-white font-medium text-[15px] rounded-full px-6 py-3.5 border border-white/15 hover:border-white/30 transition-all duration-200 cursor-pointer"
              >
                Parla con noi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
