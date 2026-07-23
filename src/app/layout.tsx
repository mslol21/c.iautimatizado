import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { DiagnosticProvider } from "@/context/DiagnosticContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DiagnosticModal } from "@/components/DiagnosticModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "C.iautomatiza | Inteligência Artificial Aplicada a Negócios & NeuralFlow",
  description:
    "Transforme trabalho repetitivo em crescimento inteligente. Plataforma NeuralFlow para automação de WhatsApp, atendimento, qualificação de leads e CRM.",
  keywords: [
    "Inteligência Artificial",
    "NeuralFlow",
    "C.iautomatiza",
    "Automação WhatsApp",
    "CRM IA",
    "Qualificação de Leads",
    "Atendimento Automatizado 24h",
  ],
  authors: [{ name: "C.iautomatiza" }],
  openGraph: {
    title: "C.iautomatiza | IA Proprietária & NeuralFlow",
    description: "Crescimento empresarial impulsionado por Inteligência Artificial de padrão internacional.",
    url: "https://ciautomatiza.com.br",
    siteName: "C.iautomatiza",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-[#050505] text-white min-h-screen flex flex-col antialiased selection:bg-cyan-500/30 selection:text-white">
        <DiagnosticProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <DiagnosticModal />
        </DiagnosticProvider>
      </body>
    </html>
  );
};
