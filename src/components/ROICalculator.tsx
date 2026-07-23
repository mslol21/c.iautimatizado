"use client";

import React, { useState } from "react";
import { Sparkles, Calculator, ArrowRight, TrendingUp, AlertTriangle } from "lucide-react";
import { useDiagnostic } from "@/context/DiagnosticContext";

export const ROICalculator: React.FC = () => {
  const [monthlyLeads, setMonthlyLeads] = useState(1000);
  const [avgTicket, setAvgTicket] = useState(1500);
  const [currentConversion, setCurrentConversion] = useState(3); // 3%
  const { openDiagnosticModal } = useDiagnostic();

  // Calculations
  const currentSales = Math.round(monthlyLeads * (currentConversion / 100));
  const currentRevenue = currentSales * avgTicket;

  // Estimated NeuralFlow metrics: +60% conversion boost due to < 5s response and 24/7 coverage
  const estimatedConversion = Number((currentConversion * 2.2).toFixed(1));
  const projectedSales = Math.round(monthlyLeads * (estimatedConversion / 100));
  const projectedRevenue = projectedSales * avgTicket;
  const monthlyGain = projectedRevenue - currentRevenue;
  const lostRevenuePerYear = monthlyGain * 12;

  return (
    <div className="w-full rounded-2xl glass-panel border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Calculator className="w-3.5 h-3.5" /> Simulador de Retorno Financeiro
          </div>
          <h3 className="text-2xl font-heading font-bold text-white">
            Calcule o faturamento perdido hoje sem Inteligência Artificial
          </h3>
          <p className="text-gray-400 text-sm">
            Ajuste os valores da sua operação e veja o impacto projetado da **NeuralFlow** no seu faturamento mensal e anual.
          </p>

          <div className="space-y-4">
            {/* Input 1: Monthly Leads */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5">
                <span className="text-gray-300">Volume de Mensagens / Leads por mês:</span>
                <span className="text-cyan-400 font-mono font-bold">{monthlyLeads.toLocaleString()} leads</span>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Input 2: Average Ticket */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5">
                <span className="text-gray-300">Ticket Médio por Venda (R$):</span>
                <span className="text-cyan-400 font-mono font-bold">R$ {avgTicket.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="100"
                max="20000"
                step="250"
                value={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Input 3: Current Conversion */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5">
                <span className="text-gray-300">Taxa Atual de Conversão Estimada:</span>
                <span className="text-purple-400 font-mono font-bold">{currentConversion}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={currentConversion}
                onChange={(e) => setCurrentConversion(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
            </div>
          </div>
        </div>

        {/* Projected ROI Results Column */}
        <div className="lg:col-span-6 bg-gradient-to-br from-[#0F0F17] to-[#08080C] border border-white/15 rounded-2xl p-6 space-y-6 shadow-xl">
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Perda estimada por lentidão de atendimento:</span>
              Sua empresa deixa de faturar cerca de{" "}
              <strong className="text-red-400 font-mono font-bold">
                R$ {monthlyGain.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </strong>{" "}
              todos os meses por falta de follow-up em tempo real.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[11px] text-gray-400">Faturamento Atual</span>
              <div className="text-lg font-bold font-mono text-gray-300">
                R$ {currentRevenue.toLocaleString("pt-BR", { minimumFractionDigits: 0 })}
              </div>
              <div className="text-[10px] text-gray-500">{currentSales} vendas / mês</div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 space-y-1">
              <span className="text-[11px] text-cyan-300 font-semibold">Projeção NeuralFlow</span>
              <div className="text-lg font-bold font-mono text-cyan-400">
                R$ {projectedRevenue.toLocaleString("pt-BR", { minimumFractionDigits: 0 })}
              </div>
              <div className="text-[10px] text-cyan-300">{projectedSales} vendas / mês (+{estimatedConversion}%)</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 text-center space-y-1">
            <div className="text-xs uppercase tracking-wider text-gray-300 font-mono font-semibold">
              Potencial Adicional Anual de Receita
            </div>
            <div className="text-3xl font-extrabold font-mono text-white text-gradient">
              + R$ {lostRevenuePerYear.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
          </div>

          <button
            onClick={openDiagnosticModal}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Solicitar Diagnóstico para Capturar Este Resultado
          </button>
        </div>
      </div>
    </div>
  );
};
