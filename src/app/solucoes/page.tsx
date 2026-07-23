"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { useDiagnostic } from "@/context/DiagnosticContext";
import { SegmentGrid, SEGMENT_LIST } from "@/components/SegmentGrid";
import { ROICalculator } from "@/components/ROICalculator";

export default function SolucoesPage() {
  const { openDiagnosticModal } = useDiagnostic();
  const [selectedSegId, setSelectedSegId] = useState<string>("imobiliarias");

  const activeSegment = SEGMENT_LIST.find((s) => s.id === selectedSegId) || SEGMENT_LIST[0];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
          Soluções Especializadas
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
          Inteligência Artificial desenhada sob medida para o seu setor
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Cada setor possui dinâmicas de vendas e objeções únicas. Nossas matrizes de IA são pré-treinadas para entregar o máximo de conversão na sua vertical de negócio.
        </p>
      </div>

      {/* Interactive Segment Filter Showcase */}
      <div className="space-y-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SEGMENT_LIST.map((seg) => (
            <button
              key={seg.id}
              onClick={() => setSelectedSegId(seg.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedSegId === seg.id
                  ? "bg-gradient-to-r from-cyan-400 to-purple-600 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {seg.title}
            </button>
          ))}
        </div>

        {/* Selected Segment Feature Breakdown */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-cyan-500/30 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-cyan-400 font-mono text-xs font-bold uppercase">Setor Selecionado</span>
              <h2 className="text-3xl font-heading font-bold text-white mt-1">{activeSegment.title}</h2>
            </div>
            <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
              Resultado Médio: {activeSegment.stat}
            </div>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{activeSegment.desc}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Qualificação Instantânea
              </h4>
              <p className="text-gray-400 text-xs">Atendimento no WhatsApp em menos de 5 segundos sem atendente humano.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> Agendamento na Agenda
              </h4>
              <p className="text-gray-400 text-xs">Reserva automática de visitas, reuniões ou exames na agenda da equipe.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Registro no CRM
              </h4>
              <p className="text-gray-400 text-xs">Alimentação automática do pipeline comercial sem erros de preenchimento.</p>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={openDiagnosticModal}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Solicitar Diagnóstico para {activeSegment.title}
            </button>
          </div>
        </div>
      </div>

      {/* Grid of all segments */}
      <div className="space-y-6">
        <h3 className="text-2xl font-heading font-bold text-white text-center">Todos os Segmentos Cobertos</h3>
        <SegmentGrid />
      </div>

      {/* Embedded ROI Calculator */}
      <ROICalculator />
    </div>
  );
}
