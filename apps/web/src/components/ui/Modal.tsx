"use client";

import React from "react";

interface ModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({
  open,
  title,
  children,
  onClose,
}: ModalProps) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

      <div className="bg-white rounded-xl w-full max-w-lg p-6">

        <div className="flex justify-between items-center mb-5">

          <h2 className="text-xl font-bold">{title}</h2>

          <button onClick={onClose} aria-label="Close modal">
            ✕
          </button>

        </div>

        {children}

      </div>

    </div>
  );
}