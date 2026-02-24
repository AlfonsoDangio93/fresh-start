import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FAQSection from "@/components/sections/FAQSection";

export const metadata = {
  title: "FAQ | Hommi — Domande frequenti",
  description:
    "Risposte alle domande più frequenti su Hommi: costi, tecnici, gestione guasti e molto altro.",
};

export default function FaqPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <FAQSection />
      <Footer />
    </main>
  );
}
