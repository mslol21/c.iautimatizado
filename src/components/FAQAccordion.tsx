"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const FAQS = [
  {
    q: "A NeuralFlow é apenas mais um chatbot comum de atendimento?",
    a: "Não. Chatbots tradicionais seguem regras rígidas, botões engessados e frequentemente irritam o cliente com respostas 'não entendi'. A NeuralFlow é uma Inteligência Artificial proprietária com modelo de linguagem avançado, treinada especificamente nos dados, produtos, regras de negócio e tom de voz da sua empresa. Ela compreende intenções complexas, tira dúvidas contextuais e conduz a venda até o agendamento.",
  },
  {
    q: "Como a NeuralFlow se integra ao meu WhatsApp e CRM?",
    a: "Conectamos a NeuralFlow diretamente ao seu WhatsApp Business Oficial (via API oficial Meta) e sincronizamos com seu CRM (HubSpot, RD Station, Piperun, Salesforce, Pipedrive, etc.) ou banco de dados. Qualquer nova conversa gera automaticamente um card qualificado no CRM sem necessidade de digitação humana.",
  },
  {
    q: "A minha equipe continuará tendo acesso aos atendimentos do WhatsApp?",
    a: "Com certeza. A NeuralFlow atua como um filtro inteligente de alta velocidade. Ela realiza o atendimento primário em segundos, responde dúvidas frequentes, qualifica o lead e, quando o cliente está pronto para negociar ou solicita um especialista humano, transfere a conversa diretamente para o atendente correto com o resumo completo no CRM.",
  },
  {
    q: "Quanto tempo leva o processo de implantação da NeuralFlow?",
    a: "Nosso processo estruturado em 6 etapas leva em média de 7 a 14 dias úteis para estar 100% operacional no seu negócio, incluindo o período de treinamento da IA, integrações técnicas de CRM/agenda e testes de validação com os engenheiros de IA da C.iautomatiza.",
  },
  {
    q: "Os dados da minha empresa e dos meus clientes ficam seguros?",
    a: "Sim. A arquitetura da C.iautomatiza segue os mais rigorosos padrões de segurança internacional e conformidade total com a LGPD (Lei Geral de Proteção de Dados). Seus dados de vendas e conversas nunca são compartilhados ou utilizados para treinar modelos públicos.",
  },
  {
    q: "Qual a diferença entre a C.iautomatiza e uma agência de automação tradicional?",
    a: "Agências vendem ferramentas ou 'automações genéricas' sem compromisso com o resultado final. A C.iautomatiza é uma consultoria de crescimento impulsionada por inteligência artificial proprietária. Nosso verdadeiro produto não é o robô, mas sim o aumento mensurável no faturamento, na produtividade da equipe e na redução do custo por venda.",
  },
];

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all ${
              isOpen
                ? "bg-white/[0.05] border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.1)]"
                : "bg-white/[0.02] border-white/10 hover:border-white/20"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
            >
              <span className="text-white font-heading font-semibold text-sm sm:text-base flex items-center gap-3">
                <HelpCircle className={`w-5 h-5 flex-shrink-0 ${isOpen ? "text-cyan-400" : "text-gray-500"}`} />
                {faq.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-cyan-400" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 mt-1">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
