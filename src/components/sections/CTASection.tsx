import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-dark rounded-[10px] overflow-hidden px-8 py-24 md:px-16 md:py-32 text-center">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2" aria-hidden="true" />

      <div className="relative z-10 max-w-site mx-auto">
        <h2 className="font-display text-[30px] md:text-[46px] font-bold text-white leading-[1.1] tracking-tight">
          Pronto a smettere di rincorrere
          <br />
          idraulici ed elettricisti?
        </h2>
        <p className="mt-5 text-white/60 text-[16px] md:text-[18px] max-w-[460px] mx-auto leading-relaxed">
          2.000+ property manager hanno gi&agrave; scelto Hommi.
          Nessun vincolo annuale, prezzo fisso, zero sorprese.
        </p>
        <div className="mt-8">
          <Link
            href="https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold text-[15px] rounded-[10px] px-8 py-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-dark"
          >
            Richiedi accesso prioritario
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
