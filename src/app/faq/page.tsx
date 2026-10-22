import React from "react";
import { MessageCircle, Phone, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Questions & answers | TeddyPups U.A.E.",
  description:
    "Answers about TeddyPups puppies: health checks and vaccinations, meeting local puppies, imported teacup breeds and delivery.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen pb-24">
      {/* Top Banner */}
      <section
        style={{
          ["--sky-top" as string]: "#fffdf8",
          ["--sky-bottom" as string]: "#fff1d8",
        }}
        className="tp-scene border-b border-[#c2622b]/15 py-14 sm:py-20"
      >
        <div className="gutter mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c2622b]/30 bg-[#fffdf8]/90 px-4 py-1.5 shadow-sm">
            <HelpCircle className="size-4 text-[#c2622b]" />
            <span className="font-scrawl text-sm font-semibold text-[#8e3f15] sm:text-base">
              helpful guidance & answers
            </span>
          </div>

          <h1 className="font-plush mt-4 text-4xl font-extrabold text-[#2a170e] sm:text-6xl">
            Questions & answers
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5a3a28] sm:text-lg">
            Answers about TeddyPups puppies: health checks and vaccinations, meeting local puppies, imported teacup breeds and delivery.
          </p>
        </div>
      </section>

      {/* Accordion Container */}
      <div className="gutter mx-auto mt-12 max-w-4xl">
        <Accordion items={FAQS} tone="light" />

        {/* Still have questions card */}
        <div className="tp-board mt-16 p-8 text-center sm:p-12">
          <h2 className="font-plush text-2xl font-bold text-[#2a170e] sm:text-3xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#5a3a28]">
            We are always here to chat. Contact us directly on WhatsApp or phone for immediate assistance.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20ask%20a%20few%20questions%20about%20your%20puppies."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp font-bold"
            >
              <MessageCircle className="size-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href="tel:+971541676733"
              className="btn btn-ghost font-bold"
            >
              <Phone className="size-4" />
              <span>Call +971 54 167 6733</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
