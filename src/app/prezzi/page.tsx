import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PricingSection from "@/components/sections/PricingSection";

export const metadata = {
  title: "Prezzi | Hommi — Gestione manutenzione immobili",
  description:
    "Piani trasparenti per property manager. Nessun vincolo annuale, prezzo fisso, zero sorprese.",
};

export default function PrezziPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <PricingSection />
      <Footer />
    </main>
  );
}
