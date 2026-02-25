import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ManutentoriSection from "@/components/sections/ManutentoriSection";

export const metadata = {
  title: "Per Manutentori | Hommi — Entra nella rete di tecnici verificati",
  description:
    "Ricevi incarichi da property manager verificati, gestisci tutto dall'app e vieni pagato puntualmente. Diventa manutentore Hommi.",
};

export default function ManutentoriPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <ManutentoriSection />
      <Footer />
    </main>
  );
}
