import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ReportSection from "@/components/sections/ReportSection";

export const metadata = {
  title: "Report e analytics | Hommi — Gestione manutenzione immobili",
  description:
    "Costi, tempi, performance: tutto misurato e visualizzato. Report PDF, CSV e dashboard interattiva per decisioni informate.",
};

export default function ReportAnalyticsPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <ReportSection />
      <Footer />
    </main>
  );
}
