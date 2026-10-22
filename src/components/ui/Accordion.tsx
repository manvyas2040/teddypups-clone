"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/types";

interface AccordionProps {
  items: FAQItem[];
  tone?: "light" | "dark";
}

export function Accordion({ items, tone = "light" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isDark = tone === "dark";

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              isDark
                ? "border-[#fffdf8]/15 bg-[#fffdf8]/5 backdrop-blur-md"
                : "border-[#2a170e]/15 bg-[#ffffff] shadow-sm"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold sm:p-6"
              aria-expanded={isOpen}
            >
              <span
                className={`font-plush text-lg sm:text-xl ${
                  isDark ? "text-[#fffdf8]" : "text-[#2a170e]"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                } ${
                  isDark
                    ? "bg-[#fffdf8]/10 text-[#f2be6b]"
                    : "bg-[#2a170e]/5 text-[#a24a1a]"
                }`}
              >
                <ChevronDown className="size-5" />
              </span>
            </button>

            {isOpen && (
              <div
                className={`px-5 pb-6 sm:px-6 ${
                  isDark ? "text-[#fffdf8]/85" : "text-[#5a3a28]"
                }`}
              >
                <p className="text-sm leading-relaxed sm:text-base">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
