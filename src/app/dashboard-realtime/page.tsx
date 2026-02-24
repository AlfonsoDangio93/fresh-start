import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import DashboardSection from "@/components/sections/DashboardSection";

export const metadata = {
  title: "Dashboard real-time | Hommi — Gestione manutenzione immobili",
  description:
    "Tutti i tuoi alloggi in una schermata. Ticket, costi, tempi di risposta aggiornati in tempo reale.",
};

export default function DashboardRealtimePage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <DashboardSection />
      <Footer />
    </main>
  );
}
