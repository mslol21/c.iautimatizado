"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  UserX,
  Database,
  Flame,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Quote,
  Building,
  Star,
  Activity
} from "lucide-react";
import { useDiagnostic } from "@/context/DiagnosticContext";
import { AIDashboardSimulator } from "@/components/AIDashboardSimulator";
import { FlowchartDiagram } from "@/components/FlowchartDiagram";
import { Timeline } from "@/components/Timeline";
import { SegmentGrid } from "@/components/SegmentGrid";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ROICalculator } from "@/components/ROICalculator";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const PAIN_CARDS = [
  {
    icon: Clock,
    title: "Atendimento Demorado no WhatsApp",
    desc: "Clientes esperam minutos ou horas para ser atendidos. Enquanto isso, fecham negócio com o concorrente que respondeu primeiro.",
    color: "text-red-400 border-red-500/20 bg-red-500/5",
  },
  {
    icon: UserX,
    title: "Leads Esquecidos Sem Follow-up",
    desc: "Mais de 60% dos contatos gerados por anúncios nunca recebem uma segunda mensagem de acompanhamento da equipe.",
    color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
  },
  {
    icon: Database,
    title: "CRM Inexistente ou Desatualizado",
    desc: "Vendedores não registram as informações das conversas, tornando impossível prever o faturamento ou auditar a operação.",
    color: "text-orange-400 border-orange-500/20 bg-orange-500/5",
  },
  {
    icon: Flame,
    title: "Equipe Sobrecarregada e Estressada",
    desc: "Sua equipe despende 80% do tempo respondendo perguntas triviais e repetitivas em vez de focar no fechamento de vendas.",
    color: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5",
  },
];

const TESTIMONIALS = [
  {
    name: "Dr. Eduardo Calixto",
    role: "Diretor Geral • Grupo Imobiliário Calixto",
    segment: "Imobiliária & Construtora",
    quote: "A NeuralFlow transformou completamente o nosso plantão de vendas. Hoje 100% dos leads de WhatsApp são atendidos e qualificados em menos de 5 segundos. O volume de visitas agendadas triplicou no primeiro mês.",
    results: "+310% Visitas Agendadas",
  },
  {
    name: "Dra. Beatriz Mendes",
    role: "Fundadora • Clínica Estética MedLaser",
    segment: "Saúde & Estética",
    quote: "Eliminamos o problema de faltas nas consultas. A IA confirma os horários automaticamente no WhatsApp e faz o reagendamento instantâneo. A receptividade dos pacientes com o tom humano da IA é impressionante.",
    results: "-88% Taxa de Faltas",
  },
  {
    name: "Marcos Vinícius",
    role: "CEO • Rede AutoCare Estética",
    segment: "Automotivo & Serviços",
    quote: "Antes perdíamos centenas de orçamentos noturnos no WhatsApp. Com a C.iautomatiza, a NeuralFlow fecha o agendamento do serviço e envia o comprovante direto para nosso sistema mesmo às 2h da manhã.",
    results: "+45% Faturamento Noturno",
  },
];

export default function Home() {
  const { openDiagnosticModal } = useDiagnostic();

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-hero-gradient pointer-events-none -z-10" />
      <div className="absolute top-[800px] left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[1600px] right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* ========================================================================= */}
      {/* 1. HERO FULLSCREEN */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Inteligência Artificial Proprietária para Negócios</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Transformamos trabalho repetitivo em{" "}
              <span className="text-gradient">crescimento inteligente.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Não vendemos robôs de mensagem. Entregamos aceleração empresarial através da plataforma{" "}
              <strong className="text-white">NeuralFlow</strong>: IA treinada exclusivamente no seu negócio para automatizar atendimento no WhatsApp, CRM e vendas 24/7.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={openDiagnosticModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Solicitar Diagnóstico</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/neuralflow"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm transition-all text-center flex items-center justify-center gap-2"
              >
                Conheça a NeuralFlow
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-400 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Segurança LGPD</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>WhatsApp Oficial API</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Tempo Resposta &lt; 5s</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: AIDashboardSimulator Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 blur-xl animate-pulse-glow" />
            <AIDashboardSimulator />
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PROBLEMAS / DORES DO EMPRESÁRIO */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#07070A] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
              O Custo da Ineficiência
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Sua empresa está vazando vendas no WhatsApp todos os dias
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Identifique se o seu modelo atual de atendimento padece de algum desses gargalos críticos que impedem a escala do seu faturamento:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAIN_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl border ${card.color} glass-card space-y-4`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white">{card.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. A SOLUÇÃO NEURALFLOW & FLUXOGRAMA */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            Arquitetura NeuralFlow
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Não é um chatbot engessado. É uma Inteligência Artificial treinada para vender.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            A **NeuralFlow** é alimentada com todo o know-how comercial da sua empresa, atuando como um vendedor sênior que nunca dorme e não comete erros de digitação.
          </p>
        </div>

        {/* Visual Flowchart Component */}
        <FlowchartDiagram />
      </section>

      {/* ========================================================================= */}
      {/* 4. COMO FUNCIONA (TIMELINE) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#060609] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-purple-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
              Metodologia de Implantação
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Do diagnóstico à operação em alta performance
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Nosso processo é estruturado por engenheiros de IA para garantir zero impacto negativo na sua operação atual durante a transição.
            </p>
          </div>

          <Timeline />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SEGMENTOS ATENDIDOS */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            Especializações de Mercado
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Soluções desenhadas para a realidade do seu segmento
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Modelos de IA pré-treinados com vocabulário técnico e objeções específicas para cada setor empresarial.
          </p>
        </div>

        <SegmentGrid />
      </section>

      {/* ========================================================================= */}
      {/* 6. CALCULADORA DE ROI */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ROICalculator />
      </section>

      {/* ========================================================================= */}
      {/* 7. DIFERENCIAIS (TABELA COMPARATIVA) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#07070A] border-y border-white/10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-purple-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
            Comparativo Direto
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Por que empresas líderes escolhem a C.iautomatiza
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Veja a diferença entre manter um processo manual ou ferramentas genéricas versus ter a **NeuralFlow** operando seu negócio.
          </p>
        </div>

        <ComparisonTable />
      </section>

      {/* ========================================================================= */}
      {/* 8. RESULTADOS E CONTADORES ANIMADOS */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl glass-panel text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-heading font-bold text-cyan-400">
              <AnimatedCounter value={24} suffix="/7" />
            </div>
            <p className="text-gray-300 text-xs font-medium uppercase tracking-wider font-mono">
              Operação Ininterrupta
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-heading font-bold text-purple-400">
              <AnimatedCounter value={90} suffix="%" prefix="-" />
            </div>
            <p className="text-gray-300 text-xs font-medium uppercase tracking-wider font-mono">
              Tarefas Repetitivas
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-heading font-bold text-emerald-400">
              &lt; <AnimatedCounter value={5} suffix="s" />
            </div>
            <p className="text-gray-300 text-xs font-medium uppercase tracking-wider font-mono">
              Tempo de Resposta
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-heading font-bold text-cyan-300">
              +<AnimatedCounter value={312} suffix="%" />
            </div>
            <p className="text-gray-300 text-xs font-medium uppercase tracking-wider font-mono">
              Taxa de Conversão
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. DEPOIMENTOS / TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#060609] border-y border-white/10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            Casos de Sucesso
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            O que dizem os executivos que aceleraram com a NeuralFlow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card border border-white/10 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20 font-bold">
                    {item.results}
                  </span>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm font-heading">{item.name}</h4>
                  <p className="text-gray-400 text-xs">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FAQ SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-purple-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Tire suas dúvidas técnicas e comerciais
          </h2>
        </div>

        <FAQAccordion />
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL CTA HIGH IMPACT */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-cyan-950/40 via-[#0A0A10] to-purple-950/40 border border-cyan-500/30 p-8 sm:p-14 text-center space-y-6 shadow-[0_0_60px_rgba(0,240,255,0.15)] overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold">
            <Sparkles className="w-4 h-4" /> Diagnóstico Gratuito de Crescimento com IA
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Pronto para transformar seu atendimento em uma máquina de vendas?
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Nossos especialistas em Inteligência Artificial analisarão seus processos de atendimento e enviarão um plano de aceleração sob medida.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openDiagnosticModal}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-bold text-base transition-all shadow-[0_0_35px_rgba(0,240,255,0.5)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" /> Solicitar Diagnóstico Agora
            </button>
            <Link
              href="/contato"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-base transition-all text-center"
            >
              Falar com Consultor Sênior
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
