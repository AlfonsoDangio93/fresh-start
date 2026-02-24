import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import GestioneTecniciSection from "@/components/sections/GestioneTecniciSection";

export const metadata = {
  title: "Gestione tecnici | Hommi — Gestione manutenzione immobili",
  description:
    "Tecnici verificati, dedicati e coordinati da noi. Idraulici, elettricisti, fabbri: il professionista giusto per ogni intervento.",
};

export default function GestioneTecniciPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <GestioneTecniciSection />
      <Footer />
    </main>
  );
}
