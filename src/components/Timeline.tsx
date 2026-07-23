"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Cpu, Layers, Rocket, TrendingUp, CheckCircle } from "lucide-react";

export const Timeline: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Diagnóstico Estratégico",
      icon: Search,
      desc: "Mapeamos os gargalos de atendimento, volume de leads no WhatsApp, taxa de perda de oportunidades e integrações de CRM necessárias.",
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400",
    },
    {
      num: "02",
      title: "Planejamento & Arquitetura",
      icon: Compass,
      desc: "Desenhamos a matriz de qualificação de leads, tom de voz da IA, regras de distribuição de tarefas e fluxos de agendamento.",
      color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400",
    },
    {
      num: "03",
      title: "Treinamento da NeuralFlow IA",
      icon: Cpu,
      desc: "Alimentamos a NeuralFlow com o catálogo da empresa, FAQs, diretrizes de objeções e dados comerciais específicos do seu setor.",
      color: "from-purple-500/20 to-violet-500/20 border-purple-500/30 text-purple-400",
    },
    {
      num: "04",
      title: "Integração Multicanal",
      icon: Layers,
      desc: "Conectamos a IA com seu WhatsApp Oficial, CRM (HubSpot, RD Station, Piperun, etc.), agendas e plataformas financeiras.",
      color: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400",
    },
    {
      num: "05",
      title: "Implantação & Testes Estressados",
      icon: Rocket,
      desc: "Validação rigorosa em ambiente simulado e go-live acompanhado por engenheiros de IA para garantir transição 100% perfeita.",
      color: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400",
    },
    {
      num: "06",
      title: "Acompanhamento & Otimização Contínua",
      icon: TrendingUp,
      desc: "Auditoria semanal de dados de conversão, ajuste fino do modelo neural e relatórios consultivos de crescimento empresarial.",
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
    },
  ];

  return (
    <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-8 py-4">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Step marker */}
            <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#050505] border border-cyan-400/50 flex items-center justify-center text-cyan-400 text-xs font-mono font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:scale-110 transition-transform">
              {step.num}
            </div>

            <div className={`p-6 rounded-2xl glass-card border bg-gradient-to-r ${step.color}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-white/10 text-white">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-heading font-bold text-white">{step.title}</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
