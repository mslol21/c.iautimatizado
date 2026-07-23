"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Phone, Mail, MapPin, MessageSquare, CheckCircle2, ShieldCheck } from "lucide-react";
import { useDiagnostic } from "@/context/DiagnosticContext";

export default function ContatoPage() {
  const { openDiagnosticModal } = useDiagnostic();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
          Canais de Atendimento
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
          Fale com um Especialista em Inteligência Artificial
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Estamos prontos para entender seu momento de negócio e desenhar a arquitetura ideal da **NeuralFlow**.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl glass-panel border border-white/15 space-y-6">
            <h3 className="text-xl font-heading font-bold text-white">Contatos Diretos</h3>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono">WhatsApp Corporativo</div>
                  <div className="text-white font-semibold">+55 (11) 99988-7766</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono">E-mail Comercial</div>
                  <div className="text-white font-semibold">contato@ciautomatiza.com.br</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono">Sede Corporativa</div>
                  <div className="text-white font-semibold">São Paulo / SP • Atendimento Global</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={openDiagnosticModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-bold text-xs transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Abrir Modal de Diagnóstico Completo
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Form */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-3xl glass-card border border-white/15 space-y-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-heading font-bold text-white">Envie uma mensagem direta</h3>
                <p className="text-gray-400 text-xs">Preencha o formulário e retornaremos em menos de 2 horas úteis.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Nome completo *</label>
                    <input required type="text" placeholder="Seu nome" className="w-full px-4 py-3 rounded-xl glass-input text-xs" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Empresa *</label>
                    <input required type="text" placeholder="Nome da empresa" className="w-full px-4 py-3 rounded-xl glass-input text-xs" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">WhatsApp com DDD *</label>
                    <input required type="tel" placeholder="(11) 99999-9999" className="w-full px-4 py-3 rounded-xl glass-input text-xs" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">E-mail corporativo *</label>
                    <input required type="email" placeholder="seuemail@empresa.com" className="w-full px-4 py-3 rounded-xl glass-input text-xs" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1">Como podemos ajudar sua empresa? *</label>
                  <textarea required rows={4} placeholder="Conte brevemente sobre seu volume de leads no WhatsApp e objetivos de vendas..." className="w-full px-4 py-3 rounded-xl glass-input text-xs" />
                </div>

                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Respeitamos a privacidade dos seus dados corporativos segundo a LGPD.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-bold text-sm transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Enviar Mensagem para Consultor Sênior
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mensagem Enviada!</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Obrigado pelo contato. Um dos nossos especialistas em IA retornará o contato no seu WhatsApp em instantes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
