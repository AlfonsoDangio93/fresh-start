import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "Hommi | Gestisci la tua casa, anche da lontano",
  description: "Ci occupiamo di guasti e imprevisti al posto tuo, con tecnici selezionati e aggiornamenti in tempo reale. La piattaforma per property manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased text-dark bg-white">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
