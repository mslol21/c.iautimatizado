"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Database, MessageSquare, ShieldCheck, Layers, Bot, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { useDiagnostic } from "@/context/DiagnosticContext";
import { AIDashboardSimulator } from "@/components/AIDashboardSimulator";

export default function NeuralFlowPage() {
  const { openDiagnosticModal } = useDiagnostic();

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold">
          <Cpu className="w-4 h-4 text-purple-400" /> Plataforma Proprietária NeuralFlow Engine
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
          A inteligência por trás do crescimento automatizado
        </h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          A NeuralFlow é uma plataforma de IA conversacional e analítica criada para empresas que necessitam de atendimento no WhatsApp de alto nível, integração total com CRM e agendamentos instantâneos.
        </p>
      </div>

      {/* Interactive Simulator Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-white/10 pb-2">
          <span className="flex items-center gap-2 text-cyan-400">
            <Sparkles className="w-4 h-4" /> Demonstração em Tempo Real da NeuralFlow
          </span>
          <span>Simulação de ambiente real</span>
        </div>
        <AIDashboardSimulator />
      </div>

      {/* Technical Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-heading font-bold text-white">WhatsApp Business API Oficial</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Conexão homologada sem riscos de banimento de número. Suporte a envios em massa inteligentes e mensagens interativas.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
            <Bot className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-heading font-bold text-white">Treinamento Customizado por LLM</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Treinamos a IA com seu catálogo de produtos, tabela de preços, regras de agendamento e políticas internas da empresa.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-heading font-bold text-white">Sincronização Bidirecional de CRM</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Conexão com HubSpot, RD Station, Piperun, Pipedrive, Salesforce e bancos de dados proprietários via Webhooks e REST APIs.
          </p>
        </div>
      </div>

      {/* Architecture Deep Dive */}
      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/15 space-y-6">
        <h2 className="text-2xl font-heading font-bold text-white">Como a NeuralFlow processa cada mensagem</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-cyan-400 font-mono font-bold">01. Análise Semântica</span>
            <p className="text-gray-300">Identificação instantânea de intenção de compra, orçamento, dúvida de horário ou reclamação.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-purple-400 font-mono font-bold">02. Consulta à Base Técnica</span>
            <p className="text-gray-300">Busca em milésimos de segundo nos estoques, agendas e FAQs treinados do seu negócio.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-blue-400 font-mono font-bold">03. Resposta Humanizada</span>
            <p className="text-gray-300">Geração de texto natural no WhatsApp conduzindo o cliente para a conversão ou agendamento.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-emerald-400 font-mono font-bold">04. Atualização de CRM</span>
            <p className="text-gray-300">Classificação de lead scoring e agendamento registrado diretamente na agenda da equipe.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#0A0A10] to-cyan-950/40 border border-purple-500/30 text-center space-y-4">
        <h3 className="text-2xl font-heading font-bold text-white">Quer ver a NeuralFlow adaptada ao seu modelo de negócio?</h3>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Agende uma demonstração ao vivo com um de nossos arquitetos de inteligência artificial.
        </p>
        <button
          onClick={openDiagnosticModal}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] inline-flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" /> Solicitar Diagnóstico da NeuralFlow
        </button>
      </div>
    </div>
  );
}
