"use client";

import React from "react";
import Link from "next/link";
import { Cpu, ArrowUpRight, MessageSquare, Mail, Phone, Shield, Sparkles } from "lucide-react";
import { useDiagnostic } from "@/context/DiagnosticContext";

export const Footer: React.FC = () => {
  const { openDiagnosticModal } = useDiagnostic();

  return (
    <footer className="relative bg-[#030305] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#0A0A0F] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-white">
                C.iautomatiza
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Transformamos atendimento, vendas e gestão em inteligência contínua. Não entregamos apenas automações: entregamos crescimento exponencial com IA proprietária.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Sistemas NeuralFlow 100% Operacionais
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider font-mono">
              Plataforma
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/neuralflow" className="hover:text-cyan-400 transition-colors">
                  NeuralFlow AI Engine
                </Link>
              </li>
              <li>
                <Link href="/neuralflow#whatsapp" className="hover:text-cyan-400 transition-colors">
                  Automação de WhatsApp
                </Link>
              </li>
              <li>
                <Link href="/neuralflow#crm" className="hover:text-cyan-400 transition-colors">
                  CRM Inteligente
                </Link>
              </li>
              <li>
                <Link href="/neuralflow#lead-scoring" className="hover:text-cyan-400 transition-colors">
                  Qualificação de Leads
                </Link>
              </li>
              <li>
                <Link href="/neuralflow#integrations" className="hover:text-cyan-400 transition-colors">
                  Integrações Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider font-mono">
              Segmentos
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/solucoes#imobiliarias" className="hover:text-purple-400 transition-colors">
                  Imobiliárias & Construtoras
                </Link>
              </li>
              <li>
                <Link href="/solucoes#clinicas" className="hover:text-purple-400 transition-colors">
                  Clínicas & Médicos
                </Link>
              </li>
              <li>
                <Link href="/solucoes#hoteis" className="hover:text-purple-400 transition-colors">
                  Hotéis & Pousadas
                </Link>
              </li>
              <li>
                <Link href="/solucoes#lavacars" className="hover:text-purple-400 transition-colors">
                  Lava Cars & Estética
                </Link>
              </li>
              <li>
                <Link href="/solucoes#comercio" className="hover:text-purple-400 transition-colors">
                  Varejo & Serviços
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional & Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider font-mono">
              Empresa
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-white transition-colors">
                  Cases de Sucesso
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog & Artigos
                </Link>
              </li>
              <li>
                <button
                  onClick={openDiagnosticModal}
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
                >
                  Solicitar Diagnóstico <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Bar in Footer */}
        <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2 justify-center md:justify-start">
              Pronto para transformar seu atendimento em uma máquina de vendas?
            </h3>
            <p className="text-gray-400 text-sm">
              Solicite uma análise técnica completa e sem compromisso dos seus processos de venda.
            </p>
          </div>
          <button
            onClick={openDiagnosticModal}
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Solicitar Diagnóstico
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} C.iautomatiza. Todos os direitos reservados. NeuralFlow® é marca registrada.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="hover:text-gray-300 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-gray-300 transition-colors">
              Termos de Uso
            </Link>
            <Link href="/seguranca" className="hover:text-gray-300 transition-colors flex items-center gap-1">
              <Shield className="w-3 h-3 text-cyan-400" /> Segurança LGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
