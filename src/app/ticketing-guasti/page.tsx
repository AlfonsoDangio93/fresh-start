import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import TicketingSection from "@/components/sections/TicketingSection";

export const metadata = {
  title: "Ticketing guasti | Hommi — Gestione manutenzione immobili",
  description:
    "Segnala, coordina e risolvi i guasti da un\u2019unica piattaforma. Tecnici verificati, aggiornamenti in tempo reale, tutto tracciato.",
};

export default function TicketingGuastiPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <TicketingSection />
      <Footer />
    </main>
  );
}
