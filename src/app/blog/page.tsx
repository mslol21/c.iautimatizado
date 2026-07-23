"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Clock, User, Tag } from "lucide-react";
import { useDiagnostic } from "@/context/DiagnosticContext";

const POSTS = [
  {
    slug: "por-que-chatbots-tradicionais-falham-e-ia-converte",
    title: "Por que chatbots tradicionais falham e como a Inteligência Artificial aumenta em 3x a conversão no WhatsApp",
    summary: "Entenda por que fluxos engessados de botões irritam o consumidor moderno e como os modelos neurais compreendem a intenção real do cliente para fechar vendas.",
    author: "Equipe C.iautomatiza",
    date: "18 de Julho, 2026",
    readTime: "6 min de leitura",
    category: "Estratégia de IA",
  },
  {
    slug: "como-calcular-o-cac-e-tempo-de-resposta-no-whatsapp",
    title: "O impacto direto do tempo de resposta no Custo de Aquisição de Clientes (CAC)",
    summary: "Estudos comprovam que responder um lead em menos de 5 minutos aumenta as chances de conversão em até 391%. Descubra como a NeuralFlow zera o tempo de espera.",
    author: "Consultoria NeuralFlow",
    date: "10 de Julho, 2026",
    readTime: "8 min de leitura",
    category: "Crescimento & Vendas",
  },
  {
    slug: "integrando-ia-ao-crm-guia-definitivo-para-executivos",
    title: "Guia Definitivo de Integração de IA com CRM para diretores comerciais",
    summary: "Passo a passo estratégico para automatizar o preenchimento de pipelines, lead scoring e distribuição de oportunidades sem sobrecarregar seu time.",
    author: "Engenharia de IA",
    date: "02 de Julho, 2026",
    readTime: "10 min de leitura",
    category: "Tecnologia Enterprise",
  },
];

export default function BlogPage() {
  const { openDiagnosticModal } = useDiagnostic();

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
          Blog & Conhecimento
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
          Insights sobre Inteligência Artificial, Vendas & Transformação Digital
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Artigos técnicos e estratégicos produzidos pelos nossos especialistas em arquitetura de IA e aceleração de negócios.
        </p>
      </div>

      {/* Featured Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {POSTS.map((post, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl glass-card border border-white/10 flex flex-col justify-between space-y-6 group hover:border-cyan-500/40 transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20 font-bold">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-gray-300 text-xs leading-relaxed">{post.summary}</p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span>{post.date}</span>
              <button
                onClick={openDiagnosticModal}
                className="text-cyan-400 group-hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Ler artigo completo</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Newsletter / CTA */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0A0A10] to-purple-950/40 border border-cyan-500/30 text-center space-y-4">
        <h3 className="text-2xl font-heading font-bold text-white">Quer aplicar estes conceitos na sua empresa hoje mesmo?</h3>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Solicite uma análise técnica completa da sua operação comercial com nossos consultores de IA.
        </p>
        <button
          onClick={openDiagnosticModal}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] inline-flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" /> Solicitar Diagnóstico Gratuito
        </button>
      </div>
    </div>
  );
}
