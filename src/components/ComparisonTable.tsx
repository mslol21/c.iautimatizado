"use client";

import React from "react";
import { Check, X, Sparkles, Zap } from "lucide-react";

export const ComparisonTable: React.FC = () => {
  const comparisons = [
    {
      feature: "Tempo Médio de Resposta no WhatsApp",
      traditional: "15 a 45 minutos (ou horas fora do horário comercial)",
      neuralFlow: "Instantâneo (< 5 segundos, 24 horas por dia)",
    },
    {
      feature: "Atendimento Noturno e Fins de Semana",
      traditional: "Inexistente / Resposta automática genérica sem venda",
      neuralFlow: "IA Totalmente Ativa, conduzindo a venda e agendando",
    },
    {
      feature: "Qualificação de Leads",
      traditional: "Manual, subjetiva e sem padrão da equipe",
      neuralFlow: "Algoritmo NeuralFlow com lead scoring automático (0-100)",
    },
    {
      feature: "Alimentação de CRM",
      traditional: "Esquecida com frequência pelos atendentes",
      neuralFlow: "100% Automatizada em tempo real com tags e dados precisos",
    },
    {
      feature: "Follow-up de Clientes Inativos",
      traditional: "Raro, esporádico e demorado",
      neuralFlow: "Cadência inteligente personalizada com lembretes ativos",
    },
    {
      feature: "Sobrecarga da Equipe Humana",
      traditional: "Alta (gastam 80% do dia respondendo perguntas básicas)",
      neuralFlow: "Mínima (equipe foca 100% na negociação de leads pré-qualificados)",
    },
    {
      feature: "Escalabilidade de Vendas",
      traditional: "Limitada ao número de contratados",
      neuralFlow: "Infinita (atende 1.000 ou 100.000 clientes simultaneamente)",
    },
  ];

  return (
    <div className="w-full overflow-x-auto rounded-2xl glass-panel border border-white/15 p-1 sm:p-2 shadow-2xl">
      <table className="w-full text-left border-collapse min-w-[640px]">
        <thead>
          <tr className="border-b border-white/10">
            <th className="p-4 sm:p-5 text-sm font-semibold text-gray-300 w-1/3">Critério de Desempenho</th>
            <th className="p-4 sm:p-5 text-sm font-semibold text-gray-400 w-1/3 bg-white/[0.02]">
              <span className="text-red-400 font-mono text-xs block uppercase">Operação Limitada</span>
              Empresa Tradicional
            </th>
            <th className="p-4 sm:p-5 text-sm font-bold text-white w-1/3 bg-cyan-500/10 border-l border-cyan-500/30">
              <span className="text-cyan-400 font-mono text-xs flex items-center gap-1 uppercase">
                <Sparkles className="w-3.5 h-3.5" /> Alta Performance
              </span>
              C.iautomatiza + NeuralFlow
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
          {comparisons.map((item, idx) => (
            <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
              <td className="p-4 sm:p-5 font-medium text-white">{item.feature}</td>
              <td className="p-4 sm:p-5 text-gray-400 bg-white/[0.01]">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>
              </td>
              <td className="p-4 sm:p-5 text-cyan-200 bg-cyan-500/5 font-medium border-l border-cyan-500/20">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{item.neuralFlow}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
