import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import HostSection from "@/components/sections/HostSection";

export const metadata = {
  title: "Per Host Professionali | Hommi — Gestione manutenzione immobili",
  description:
    "Automatizza la gestione degli imprevisti. Interventi rapidi, recensioni protette, zero coordinamento. Torna a fare l\u2019host.",
};

export default function HostPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <HostSection />
      <Footer />
    </main>
  );
}
