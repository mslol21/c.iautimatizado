"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Globe, Zap, Target, Award, Sparkles, CheckCircle } from "lucide-react";
import { useDiagnostic } from "@/context/DiagnosticContext";

export default function SobrePage() {
  const { openDiagnosticModal } = useDiagnostic();

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
          Sobre a C.iautomatiza
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
          Inteligência Artificial de padrão internacional aplicada ao crescimento corporativo.
        </h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          Nossa missão é erradicar o trabalho repetitivo e lento no atendimento empresarial, permitindo que líderes e equipes foquem no que realmente importa: fechar negócios e escalar.
        </p>
      </div>

      {/* Core Manifesto Card */}
      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/15 relative overflow-hidden space-y-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
            <Cpu className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-white">O Verdadeiro Produto é o Crescimento</h2>
        </div>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-4xl">
          A maioria das agências e fornecedores de tecnologia vende "robôs de mensagens" ou "automações engessadas" que apenas frustram o cliente final. Na **C.iautomatiza**, nós entendemos que a Inteligência Artificial é apenas o meio. O nosso compromisso é com o **crescimento previsível e sustentável do seu faturamento**.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <h4 className="text-white font-bold text-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" /> Atendimento 24/7 sem erros
            </h4>
            <p className="text-gray-400 text-xs">Respostas contextuais instantâneas mesmo nas madrugadas e finais de semana.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <h4 className="text-white font-bold text-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-400" /> Lead Scoring Inteligente
            </h4>
            <p className="text-gray-400 text-xs">Classificação automática do nível de intenção do cliente antes de repassar à equipe.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <h4 className="text-white font-bold text-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> CRM 100% Atualizado
            </h4>
            <p className="text-gray-400 text-xs">Eliminação total da digitação manual de relatórios de atendimento.</p>
          </div>
        </div>
      </div>

      {/* Corporate Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
          <Globe className="w-8 h-8 text-cyan-400" />
          <h3 className="text-lg font-heading font-bold text-white">Autoridade Internacional</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Nossos modelos neurais são construídos com as melhores tecnologias globais de Large Language Models (LLMs) ajustados e otimizados para o mercado brasileiro.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
          <ShieldCheck className="w-8 h-8 text-purple-400" />
          <h3 className="text-lg font-heading font-bold text-white">Segurança & Privacidade LGPD</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Proteção rigorosa de dados corporativos e sigilo comercial. Infraestrutura isolada e criptografada de ponta a ponta.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
          <Target className="w-8 h-8 text-emerald-400" />
          <h3 className="text-lg font-heading font-bold text-white">Foco Obsessivo em ROI</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Cada implementação é guiada por métricas quantitativas de aumento de conversão, redução de tempo de resposta e ampliação do pipeline.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0C0C12] to-purple-950/40 border border-cyan-500/30 text-center space-y-4">
        <h3 className="text-2xl font-heading font-bold text-white">Quer saber como a C.iautomatiza pode transformar sua empresa?</h3>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Solicite um diagnóstico completo sem custo e descubra o plano exato de automação inteligente para sua operação.
        </p>
        <button
          onClick={openDiagnosticModal}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] inline-flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" /> Solicitar Diagnóstico Empresarial
        </button>
      </div>
    </div>
  );
}
