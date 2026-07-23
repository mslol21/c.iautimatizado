"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cpu, Menu, X, Sparkles, ChevronRight } from "lucide-react";
import { useDiagnostic } from "@/context/DiagnosticContext";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/neuralflow", label: "NeuralFlow" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/cases", label: "Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openDiagnosticModal } = useDiagnostic();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px] shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all">
              <div className="w-full h-full bg-[#0A0A0F] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                C.iautomatiza <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </span>
              <span className="text-[10px] tracking-widest text-gray-400 uppercase font-semibold font-mono flex items-center gap-1">
                Powered by <span className="text-purple-400 font-bold">NeuralFlow</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white/10 text-white shadow-sm font-semibold border border-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/neuralflow"
              className="px-4 py-2 rounded-xl text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              Conheça a NeuralFlow
            </Link>
            <button
              onClick={openDiagnosticModal}
              className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium text-xs shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Solicitar Diagnóstico</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={openDiagnosticModal}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold"
            >
              Diagnóstico
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white border border-white/10"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0E]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-semibold"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileOpen(false);
                openDiagnosticModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold text-sm shadow-lg text-center flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Solicitar Diagnóstico Gratuito
            </button>
            <Link
              href="/neuralflow"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-center text-sm font-medium"
            >
              Conheça a Plataforma NeuralFlow
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
