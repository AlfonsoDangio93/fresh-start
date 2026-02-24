import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AgenzieSection from "@/components/sections/AgenzieSection";

export const metadata = {
  title: "Per Agenzie | Hommi — Gestione manutenzione immobili",
  description:
    "Scala le operazioni di manutenzione senza assumere. Processi standardizzati, rete tecnici scalabile, report per ogni proprietario.",
};

export default function AgenziePage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <AgenzieSection />
      <Footer />
    </main>
  );
}
