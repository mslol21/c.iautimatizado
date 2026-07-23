"use client";

import React, { createContext, useContext, useState } from "react";

interface DiagnosticContextType {
  isOpen: boolean;
  openDiagnosticModal: () => void;
  closeDiagnosticModal: () => void;
}

const DiagnosticContext = createContext<DiagnosticContextType | undefined>(undefined);

export const DiagnosticProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDiagnosticModal = () => setIsOpen(true);
  const closeDiagnosticModal = () => setIsOpen(false);

  return (
    <DiagnosticContext.Provider value={{ isOpen, openDiagnosticModal, closeDiagnosticModal }}>
      {children}
    </DiagnosticContext.Provider>
  );
};

export const useDiagnostic = () => {
  const context = useContext(DiagnosticContext);
  if (!context) {
    throw new Error("useDiagnostic must be used within a DiagnosticProvider");
  }
  return context;
};
