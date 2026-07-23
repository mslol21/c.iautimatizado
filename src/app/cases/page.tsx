"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Clock, CheckCircle2, Star, ArrowUpRight } from "lucide-react";
import { useDiagnostic } from "@/context/DiagnosticContext";

const CASE_STUDIES = [
  {
    client: "Grupo Imobiliário Calixto",
    segment: "Imobiliária & Construtora",
    location: "São Paulo / Curitiba",
    challenge: "Perda massiva de leads de WhatsApp gerados por anúncios devido ao tempo médio de resposta superior a 40 minutos.",
    solution: "Implantação da NeuralFlow IA conectada ao CRM e WhatsApp Oficial, qualificando o perfil financeiro do lead e agendando a visita ao decorado em tempo real.",
    metrics: [
      { label: "Visitas Agendadas", before: "45 / mês", after: "185 / mês", improvement: "+311%" },
      { label: "Tempo Médio de Resposta", before: "42 min", after: "3.8 seg", improvement: "-99%" },
      { label: "Vendas Concluídas", before: "R$ 4.2M", after: "R$ 14.8M", improvement: "+252%" },
    ],
  },
  {
    client: "Clínica MedLaser Estética",
    segment: "Clínica & Saúde",
    location: "Belo Horizonte / MG",
    challenge: "Taxa de faltas (no-show) de 32% em procedimentos agendados e sobrecarga da recepção com dúvidas repetitivas.",
    solution: "Treinamento de modelo neural para tirar dúvidas clínicas primárias, realizar a pré-triagem de convênios e efetuar confirmações ativas com reagendamento automático.",
    metrics: [
      { label: "Taxa de Faltas", before: "32%", after: "4.2%", improvement: "-87%" },
      { label: "Agendamentos Noturnos", before: "0%", after: "38%", improvement: "+38%" },
      { label: "Ocupação da Agenda", before: "68%", after: "97%", improvement: "+29%" },
    ],
  },
  {
    client: "AutoCare Estética Automotiva",
    segment: "Lava Car & Serviços",
    location: "Campinas / SP",
    challenge: "Impossibilidade de atender clientes fora do horário comercial e desorganização no controle de horários dos boxes de polimento.",
    solution: "Automação total de cotações por modelo de veículo e agendamento instantâneo via WhatsApp com lembretes prévios.",
    metrics: [
      { label: "Faturamento Mensal", before: "R$ 48k", after: "R$ 112k", improvement: "+133%" },
      { label: "Horários Ociosos", before: "35%", after: "2%", improvement: "-94%" },
    ],
  },
];

export default function CasesPage() {
  const { openDiagnosticModal } = useDiagnostic();

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
          Cases de Sucesso
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
          Resultados reais medidos em faturamento e escala
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Veja como empresas de diversos segmentos transformaram a eficiência das suas vendas utilizando a plataforma **NeuralFlow**.
        </p>
      </div>

      {/* Cases List */}
      <div className="space-y-12">
        {CASE_STUDIES.map((cs, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/15 space-y-8 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-cyan-400 font-mono text-xs font-semibold uppercase">{cs.segment} • {cs.location}</span>
                <h2 className="text-3xl font-heading font-bold text-white mt-1">{cs.client}</h2>
              </div>
              <button
                onClick={openDiagnosticModal}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 self-start md:self-auto"
              >
                <span>Diagnóstico Similar</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-2">
                <h3 className="text-red-400 font-semibold font-mono text-xs uppercase">Desafio Inicial</h3>
                <p className="text-gray-300 leading-relaxed">{cs.challenge}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-cyan-400 font-semibold font-mono text-xs uppercase">Solução NeuralFlow</h3>
                <p className="text-gray-300 leading-relaxed">{cs.solution}</p>
              </div>
            </div>

            {/* Metrics Comparison Box */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <h4 className="text-xs uppercase font-mono text-gray-400 font-semibold">Impacto Mensurável</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cs.metrics.map((m, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-xs text-gray-400">{m.label}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 line-through">{m.before}</span>
                      <span className="text-lg font-bold font-mono text-white">{m.after}</span>
                    </div>
                    <div className="text-xs font-mono font-bold text-cyan-400">{m.improvement}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0A0A10] to-purple-950/40 border border-cyan-500/30 text-center space-y-4">
        <h3 className="text-2xl font-heading font-bold text-white">Sua empresa pode ser o próximo caso de sucesso</h3>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Solicite o diagnóstico empresarial e receba uma análise de viabilidade para o seu segmento.
        </p>
        <button
          onClick={openDiagnosticModal}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] inline-flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" /> Solicitar Diagnóstico Agora
        </button>
      </div>
    </div>
  );
}
