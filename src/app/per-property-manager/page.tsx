import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PropertyManagerSection from "@/components/sections/PropertyManagerSection";

export const metadata = {
  title: "Per Property Manager | Hommi — Gestione manutenzione immobili",
  description:
    "Gestisci decine di alloggi senza stress. Tecnici dedicati, dashboard real-time, report automatici. Hommi si occupa della manutenzione.",
};

export default function PropertyManagerPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <PropertyManagerSection />
      <Footer />
    </main>
  );
}
