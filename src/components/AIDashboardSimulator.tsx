"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Kanban,
  BarChart3,
  Calendar,
  Sparkles,
  Bot,
  User,
  CheckCheck,
  Zap,
  TrendingUp,
  Clock,
  Send,
  Users,
  ShieldCheck,
  ChevronRight,
  Search,
  Filter,
  PhoneCall
} from "lucide-react";

export const AIDashboardSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "pipeline" | "analytics">("chat");

  // Simulated Chat State
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "user",
      text: "Olá! Vi o anúncio do empreendimento no Jardins. Vocês têm apartamento com 3 suítes disponível?",
      time: "14:32",
    },
    {
      id: 2,
      sender: "ai",
      text: "Olá! Seja muito bem-vindo. Sou a NeuralFlow IA da construtora. Sim, temos 2 unidades exclusivas no 14º e 18º andar com 3 suítes, 180m² e varanda gourmet. Qual o melhor horário para agendarmos uma visita ou apresentação em vídeo?",
      time: "14:32",
      metadata: "Qualificação Automática: Lead Alta Intent (Score: 94/100)",
    },
    {
      id: 3,
      sender: "user",
      text: "Quero agendar uma visita presencial amanhã às 15h. Aceita permuta?",
      time: "14:33",
    },
    {
      id: 4,
      sender: "ai",
      text: "Perfeito! Já reservei o horário das 15h00 de amanhã com nosso gestor de conta. Quanto à permuta, analisamos veículos e imóveis até 40% do valor. Enviei a confirmação para seu WhatsApp e atualizei o CRM.",
      time: "14:33",
      metadata: "Ação realizada: Agendamento criado + CRM movido para 'Proposta Enviada'",
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "user",
      text: inputVal,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: `NeuralFlow analisou sua mensagem ("${newMsg.text}"). Em produção real, nossa IA consulta suas APIs de estoque, agenda do Google/Outlook e política de vendas em < 3 segundos para responder com tom humano e fechar a oportunidade.`,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          metadata: "Qualificação Automática: Lead Atualizado no CRM em tempo real.",
        },
      ]);
    }, 1200);
  };

  return (
    <div className="w-full rounded-2xl glass-panel border border-white/15 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] relative font-sans text-xs sm:text-sm">
      {/* Top Header */}
      <div className="bg-[#09090D] border-b border-white/10 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-gray-400 font-mono text-xs border-l border-white/10 pl-3">
            NeuralFlow Engine v4.2 • <span className="text-cyan-400">Live Operation</span>
          </span>
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            WhatsApp IA Conectado
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-medium">
            <Zap className="w-3 h-3" />
            Tempo Resposta: 2.8s
          </div>
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[440px] bg-[#07070A]">
        {/* Navigation Sidebar */}
        <div className="md:col-span-3 bg-[#0A0A0F] border-r border-white/10 p-3 space-y-1">
          <div className="text-[10px] uppercase font-mono text-gray-400 font-semibold px-2 py-1 tracking-wider">
            Módulos Ativos
          </div>

          <button
            onClick={() => setActiveTab("chat")}
            className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all ${
              activeTab === "chat"
                ? "bg-cyan-500/15 border border-cyan-500/30 text-white font-semibold shadow-sm"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Conversas WhatsApp</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
          </button>

          <button
            onClick={() => setActiveTab("pipeline")}
            className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all ${
              activeTab === "pipeline"
                ? "bg-purple-500/15 border border-purple-400/30 text-white font-semibold shadow-sm"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Kanban className="w-4 h-4 text-purple-400" />
              <span>CRM & Pipeline</span>
            </div>
            <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">
              14 Leads
            </span>
          </button>

          <button
            onClick={() => setActiveTab("analytics")}
            className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all ${
              activeTab === "analytics"
                ? "bg-blue-500/15 border border-blue-400/30 text-white font-semibold shadow-sm"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span>Indicadores & Funil</span>
            </div>
            <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
              +312%
            </span>
          </button>

          {/* Quick Stats Summary */}
          <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
            <div className="text-[10px] uppercase font-mono text-gray-400 font-semibold px-2 tracking-wider">
              Desempenho IA (Hoje)
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Atendimentos 24h:</span>
                <span className="text-white font-mono font-bold">148</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Qualificados IA:</span>
                <span className="text-cyan-400 font-mono font-bold">92.5%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Agendados:</span>
                <span className="text-purple-400 font-mono font-bold">34</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="md:col-span-9 p-4 flex flex-col justify-between">
          {/* TAB 1: WHATSAPP CHAT INTERACTION */}
          {activeTab === "chat" && (
            <div className="flex flex-col h-full space-y-3">
              {/* Chat Contact Bar */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-xs sm:text-sm flex items-center gap-2">
                      Dr. Marcelo Silva (Lead Imobiliária)
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] font-mono">
                        Score 94 (Quente)
                      </span>
                    </div>
                    <div className="text-[11px] text-gray-400">Origem: Anúncio Meta • WhatsApp (+55 11 98...33)</div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-gray-300">
                    Atendido por: NeuralFlow IA
                  </span>
                </div>
              </div>

              {/* Chat Message Stream */}
              <div className="flex-1 overflow-y-auto space-y-3 pr-2 max-h-[300px]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none shadow-md"
                          : "bg-white/[0.07] border border-white/10 text-gray-200 rounded-tl-none"
                      }`}
                    >
                      {msg.sender === "ai" && (
                        <div className="flex items-center gap-1.5 mb-1.5 pb-1 border-b border-white/10 text-cyan-400 font-semibold text-[10px]">
                          <Bot className="w-3.5 h-3.5 text-cyan-400" /> NeuralFlow IA
                        </div>
                      )}
                      <p>{msg.text}</p>
                      <div className="mt-1 flex items-center justify-between gap-4 text-[10px] text-gray-400">
                        <span>{msg.time}</span>
                        {msg.sender === "user" ? (
                          <CheckCheck className="w-3 h-3 text-cyan-300" />
                        ) : (
                          <span className="text-emerald-400 font-mono">Processado em 1.4s</span>
                        )}
                      </div>
                    </div>
                    {msg.metadata && (
                      <div className="mt-1 text-[10px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> {msg.metadata}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 w-max text-xs text-cyan-400 font-mono animate-pulse">
                    <Bot className="w-4 h-4 animate-spin" /> NeuralFlow IA está gerando resposta inteligente...
                  </div>
                )}
              </div>

              {/* Chat Input Simulator */}
              <form onSubmit={handleSendMessage} className="flex items-center gap-2 pt-2 border-t border-white/10">
                <input
                  type="text"
                  placeholder="Simule enviando uma mensagem como cliente..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="flex-1 glass-input px-3.5 py-2.5 rounded-xl text-xs"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white hover:from-cyan-300 hover:to-blue-500 transition-all font-semibold flex items-center gap-1.5 shadow-md"
                >
                  <Send className="w-3.5 h-3.5" /> Enviar
                </button>
              </form>
            </div>
          )}

          {/* TAB 2: CRM PIPELINE */}
          {activeTab === "pipeline" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-white font-semibold text-xs flex items-center gap-2">
                  <Kanban className="w-4 h-4 text-purple-400" /> Pipeline de Vendas NeuralFlow (Integração Automática)
                </h4>
                <div className="text-[11px] text-gray-400">Atualizado automaticamente pela IA sem digitação manual</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {/* Column 1 */}
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-2.5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-300 pb-1 border-b border-white/10">
                    <span>1. Novo Lead</span>
                    <span className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[10px]">4</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                    <div className="font-medium text-white text-xs">Carlos Eduardo</div>
                    <div className="text-[10px] text-gray-400">WhatsApp • Há 2 min</div>
                    <div className="text-[10px] text-cyan-400 font-mono">IA Qualificando...</div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-2.5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-cyan-300 pb-1 border-b border-white/10">
                    <span>2. Qualificado IA</span>
                    <span className="w-5 h-5 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px]">5</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 space-y-1 shadow-sm">
                    <div className="font-medium text-white text-xs">Dra. Vanessa Lima</div>
                    <div className="text-[10px] text-gray-300">Orçamento R$ 45.000</div>
                    <div className="text-[10px] text-emerald-400 font-mono">Score: 98/100</div>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-2.5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-purple-300 pb-1 border-b border-white/10">
                    <span>3. Agendado</span>
                    <span className="w-5 h-5 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px]">3</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 space-y-1 shadow-sm">
                    <div className="font-medium text-white text-xs">Grupo Hotelaria Sol</div>
                    <div className="text-[10px] text-purple-300">Reunião: Amanhã 15:00</div>
                    <div className="text-[10px] text-gray-400">Lembrete IA Enviado</div>
                  </div>
                </div>

                {/* Column 4 */}
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-2.5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-emerald-300 pb-1 border-b border-white/10">
                    <span>4. Venda / Fechado</span>
                    <span className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">2</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 space-y-1 shadow-sm">
                    <div className="font-medium text-white text-xs">Lava Car Premium</div>
                    <div className="text-[10px] text-emerald-300 font-bold">R$ 18.500 /mês</div>
                    <div className="text-[10px] text-gray-400">Pix Confirmado IA</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ANALYTICS & FUNNEL */}
          {activeTab === "analytics" && (
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-xs flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-400" /> Relatórios de Produtividade & Crescimento
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="text-[11px] text-gray-400">Taxa de Resposta Imediata</div>
                  <div className="text-2xl font-bold font-mono text-cyan-400">99.8%</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Resposta em &lt; 5 segundos
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="text-[11px] text-gray-400">Leads Convertidos em Agenda</div>
                  <div className="text-2xl font-bold font-mono text-purple-400">42.4%</div>
                  <div className="text-[10px] text-purple-300">vs 8% com atendimento manual</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="text-[11px] text-gray-400">Redução de Custos Operacionais</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400">88%</div>
                  <div className="text-[10px] text-emerald-300">Economia real de equipe</div>
                </div>
              </div>

              {/* Conversion Funnel Bar */}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="text-xs text-gray-300 font-semibold">Funil de Atendimento Automático NeuralFlow</div>
                
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-gray-400 text-[11px]">
                    <span>1. Visitantes WhatsApp / Anúncios</span>
                    <span className="font-mono text-white">1.000 (100%)</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-full" />
                  </div>

                  <div className="flex justify-between text-gray-400 text-[11px] pt-1">
                    <span>2. Qualificados pela NeuralFlow IA</span>
                    <span className="font-mono text-cyan-400">850 (85%)</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full w-[85%]" />
                  </div>

                  <div className="flex justify-between text-gray-400 text-[11px] pt-1">
                    <span>3. Agendados no CRM / Reunião</span>
                    <span className="font-mono text-purple-400">420 (42%)</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-[42%]" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
