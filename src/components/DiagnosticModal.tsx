"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Bot, Building2, PhoneCall, Sparkles, ShieldCheck } from "lucide-react";
import { useDiagnostic } from "@/context/DiagnosticContext";

const SEGMENTS = [
  "Imobiliária / Construtora",
  "Clínica / Saúde",
  "Hotelaria / Pousada",
  "Lava Car / Estética Automotiva",
  "Restaurante / Gastronomia",
  "Comércio / E-commerce",
  "Prestador de Serviços",
  "Outro Segmento"
];

const PAIN_POINTS = [
  "Atendimento demorado no WhatsApp",
  "Leads esquecidos sem follow-up",
  "Equipe sobrecarregada de mensagens repetitivas",
  "Falta de integração com CRM",
  "Perda de vendas fora do horário comercial",
  "Perda de controle dos agendamentos"
];

export const DiagnosticModal: React.FC = () => {
  const { isOpen, closeDiagnosticModal } = useDiagnostic();
  const [step, setStep] = useState(1);

  // Form State
  const [selectedSegment, setSelectedSegment] = useState("");
  const [selectedPains, setSelectedPains] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    whatsapp: "",
    email: "",
    monthlyLeads: "500 - 2.000 leads",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const togglePain = (pain: string) => {
    if (selectedPains.includes(pain)) {
      setSelectedPains(selectedPains.filter((p) => p !== pain));
    } else {
      setSelectedPains([...selectedPains, pain]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    closeDiagnosticModal();
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
      setSelectedSegment("");
      setSelectedPains([]);
      setFormData({ name: "", company: "", whatsapp: "", email: "", monthlyLeads: "500 - 2.000 leads" });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0D0D11] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Subtle Glow background */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> Diagnóstico Empresarial com IA
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Descubra o potencial de aceleração do seu negócio
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Responda 3 perguntas para nossa equipe analisar a maturidade digital da sua empresa e projetar a solução **NeuralFlow**.
                </p>

                {/* Progress Bar */}
                <div className="flex items-center gap-2 mt-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                        i <= step ? "bg-gradient-to-r from-cyan-400 to-purple-500" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1: Segment */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-cyan-400" /> Qual o segmento da sua empresa?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SEGMENTS.map((seg) => (
                      <button
                        key={seg}
                        type="button"
                        onClick={() => setSelectedSegment(seg)}
                        className={`text-left p-3.5 rounded-xl border text-sm transition-all duration-200 ${
                          selectedSegment === seg
                            ? "bg-cyan-500/15 border-cyan-400 text-white font-semibold shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                            : "bg-white/5 border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/10"
                        }`}
                      >
                        {seg}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      disabled={!selectedSegment}
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/25"
                    >
                      Próximo passo <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Pain points */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Bot className="w-4 h-4 text-purple-400" /> Quais gargalos sua empresa enfrenta hoje? (Selecione todos que se aplicam)
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {PAIN_POINTS.map((pain) => {
                      const isSelected = selectedPains.includes(pain);
                      return (
                        <button
                          key={pain}
                          type="button"
                          onClick={() => togglePain(pain)}
                          className={`text-left p-3.5 rounded-xl border text-sm flex items-center justify-between transition-all duration-200 ${
                            isSelected
                              ? "bg-purple-500/15 border-purple-400 text-white font-semibold shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                              : "bg-white/5 border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/10"
                          }`}
                        >
                          <span>{pain}</span>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                              isSelected ? "bg-purple-500 border-purple-400 text-white" : "border-white/20"
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Voltar
                    </button>
                    <button
                      disabled={selectedPains.length === 0}
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25"
                    >
                      Avançar para contato <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Form */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-cyan-400" /> Para onde devemos enviar a proposta de diagnóstico?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Seu nome completo *</label>
                      <input
                        required
                        type="text"
                        placeholder="Ex: Roberto Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Nome da Empresa *</label>
                      <input
                        required
                        type="text"
                        placeholder="Ex: Grupo Imobiliário Calixto"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">WhatsApp de contato (com DDD) *</label>
                      <input
                        required
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">E-mail corporativo *</label>
                      <input
                        required
                        type="email"
                        placeholder="roberto@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Volume estimado de contatos / mês</label>
                    <select
                      value={formData.monthlyLeads}
                      onChange={(e) => setFormData({ ...formData, monthlyLeads: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-sm bg-[#121218] text-white"
                    >
                      <option value="Até 500 leads">Até 500 leads / mês</option>
                      <option value="500 - 2.000 leads">500 a 2.000 leads / mês</option>
                      <option value="2.000 - 10.000 leads">2.000 a 10.000 leads / mês</option>
                      <option value="Mais de 10.000 leads">Mais de 10.000 leads / mês (Enterprise)</option>
                    </select>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0 text-cyan-400" />
                    <span>Seus dados estão protegidos sob sigilo corporativo. Um consultor especialista apresentará uma simulação personalizada da NeuralFlow.</span>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)]"
                    >
                      <Sparkles className="w-4 h-4" /> Solicitar Diagnóstico Agora
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Submission Success View */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">Diagnóstico Solicitado com Sucesso!</h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto">
                Recebemos os dados da sua empresa ({formData.company || "Sua empresa"}). Um especialista sênior em inteligência artificial entrará em contato via WhatsApp ({formData.whatsapp}) nas próximas horas.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs text-gray-400 space-y-1">
                <p><strong className="text-white">Segmento:</strong> {selectedSegment}</p>
                <p><strong className="text-white">Gargalos identificados:</strong> {selectedPains.join(", ")}</p>
                <p><strong className="text-white">Estimativa NeuralFlow:</strong> Potencial de automação de até 92% do atendimento primário.</p>
              </div>
              <button
                onClick={resetAndClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
              >
                Fechar janela
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
