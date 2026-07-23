"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Hotel,
  Car,
  UtensilsCrossed,
  ShoppingBag,
  Briefcase,
  Home,
  ArrowUpRight
} from "lucide-react";
import { useDiagnostic } from "@/context/DiagnosticContext";

export const SEGMENT_LIST = [
  {
    id: "imobiliarias",
    title: "Imobiliárias & Corretores",
    icon: Home,
    desc: "Atendimento imediato a interessados em imóveis 24h, agendamento automático de visitas no WhatsApp e qualificação por renda e localização.",
    stat: "+340% Visitas Agendadas",
  },
  {
    id: "construtoras",
    title: "Construtoras & Incorporadoras",
    icon: Building2,
    desc: "Apresentação inteligente de plantão de vendas, envio de e-outdoors/plantas em PDF e nutrição contínua de cadastros de lançamentos.",
    stat: "90% Menor Tempo de Resposta",
  },
  {
    id: "clinicas",
    title: "Clínicas & Consultórios",
    icon: Stethoscope,
    desc: "Agendamento e confirmação ativa de consultas/procedimentos médicos, triagem inteligente de convênios e lembretes automáticos anti-falta.",
    stat: "-85% Faltas (No-shows)",
  },
  {
    id: "hoteis",
    title: "Hotéis, Pousadas & Resort",
    icon: Hotel,
    desc: "Cotação instantânea de tarifas por data e quantidade de hóspedes, reservas diretas sem comissões de OTAs e suporte em múltiplos idiomas.",
    stat: "+48% Reservas Diretas",
  },
  {
    id: "lavacars",
    title: "Lava Cars & Estética Automotiva",
    icon: Car,
    desc: "Agendamento automático de horários por tipo de serviço (lavagem, vitrificação, polimento) e upsell de pacotes recorrentes.",
    stat: "Zero Horários Ociosos",
  },
  {
    id: "restaurantes",
    title: "Restaurantes & Gastronomia",
    icon: UtensilsCrossed,
    desc: "Reservas de mesas automatizadas para eventos/datas comemorativas, cardápio digital interativo e suporte imediato a clientes VIP.",
    stat: "100% Mesas Ocupadas",
  },
  {
    id: "comercio",
    title: "Comércio & E-commerce",
    icon: ShoppingBag,
    desc: "Recuperação de carrinhos abandonados no WhatsApp, consulta de estoque em tempo real e status de envio integrado às transportadoras.",
    stat: "+65% Recuperação de Leads",
  },
  {
    id: "prestadores",
    title: "Prestadores de Serviço B2B/B2C",
    icon: Briefcase,
    desc: "Qualificação prévia de orçamentos, agendamento técnico de vistorias e automação completa de propostas comerciais no CRM.",
    stat: "3x Mais Propostas Fechadas",
  },
];

export const SegmentGrid: React.FC = () => {
  const { openDiagnosticModal } = useDiagnostic();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {SEGMENT_LIST.map((segment, idx) => {
        const Icon = segment.icon;
        return (
          <motion.div
            key={segment.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group relative p-6 rounded-2xl glass-card border border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-all cursor-pointer"
            onClick={openDiagnosticModal}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                  {segment.stat}
                </span>
              </div>

              <h3 className="text-white font-heading font-bold text-base mb-2 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                {segment.title}
              </h3>

              <p className="text-gray-400 text-xs leading-relaxed mb-4">{segment.desc}</p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-cyan-400 font-medium">
              <span>Ver solução para este setor</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
