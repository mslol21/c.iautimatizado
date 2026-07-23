"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Cpu, Database, Users, DollarSign, ArrowRight, Sparkles } from "lucide-react";

export const FlowchartDiagram: React.FC = () => {
  const steps = [
    {
      id: "cliente",
      icon: UserCheck,
      title: "1. Cliente Envia Mensagem",
      desc: "Contato imediato via WhatsApp, Anúncios Meta, Google Ads ou Site.",
      badge: "WhatsApp / Web",
      color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-400",
    },
    {
      id: "neuralflow",
      icon: Cpu,
      title: "2. NeuralFlow IA Responde",
      desc: "IA treinada no seu negócio entende a intenção, qualifica e agenda em < 5 segundos.",
      badge: "IA Proprietária",
      color: "from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]",
      highlight: true,
    },
    {
      id: "crm",
      icon: Database,
      title: "3. Atualização Instantânea no CRM",
      desc: "Histórico completo, tag de interesse e score de intenção registrados sem erro humano.",
      badge: "CRM Automático",
      color: "from-blue-600/20 to-indigo-600/20 border-blue-500/30 text-blue-400",
    },
    {
      id: "equipe",
      icon: Users,
      title: "4. Equipe Assume Leads Quentes",
      desc: "Sua equipe só entra em ação para negociar com clientes pré-qualificados e agendados.",
      badge: "Produtividade 10x",
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400",
    },
    {
      id: "venda",
      icon: DollarSign,
      title: "5. Fechamento & Crescimento",
      desc: "Maior conversão, menor custo de aquisição (CAC) e crescimento sustentável.",
      badge: "Resultado Real",
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    },
  ];

  return (
    <div className="w-full py-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative p-5 rounded-2xl border bg-gradient-to-b backdrop-blur-xl flex flex-col justify-between ${
                step.color
              } ${step.highlight ? "ring-2 ring-purple-500/50 scale-[1.02]" : ""}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-white uppercase tracking-wider">
                    {step.badge}
                  </span>
                </div>

                <h4 className="text-white font-heading font-bold text-sm mb-1.5 flex items-center gap-1.5">
                  {step.title}
                </h4>

                <p className="text-gray-300 text-xs leading-relaxed">{step.desc}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#0D0D11] border border-white/20 items-center justify-center text-cyan-400">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
