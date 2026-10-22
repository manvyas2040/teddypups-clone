"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2 } from "lucide-react";

interface PuppyInquiryFormProps {
  puppyName: string;
  puppySlug: string;
}

export function PuppyInquiryForm({ puppyName, puppySlug }: PuppyInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: `Hi TeddyPups! I would love to learn more about ${puppyName} and schedule a viewing or video consultation.`,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {}
    }, 600);
  };

  return (
    <div id={`enquire-${puppySlug}`} className="tp-board mt-12 p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <span className="tp-chapter__n">4</span>
        <span className="font-scrawl text-lg font-semibold text-[#8e3f15]">
          get in touch
        </span>
      </div>

      <h2 className="font-plush mt-2 text-2xl font-bold text-[#2a170e] sm:text-3xl">
        Ask about {puppyName}
      </h2>
      <p className="mt-1 text-sm text-[#5a3a28]">
        Send us a quick message and our nursery coordinator will get back to you with videos, health records, and viewing availability.
      </p>

      {isSubmitted ? (
        <div className="mt-6 rounded-2xl border border-[#1f7a4d]/20 bg-[#1f7a4d]/10 p-6 text-center">
          <CheckCircle2 className="mx-auto size-10 text-[#1f7a4d]" />
          <h3 className="font-plush mt-3 text-xl font-bold text-[#1f7a4d]">
            Thank you! Your letter has been posted
          </h3>
          <p className="mt-2 text-sm text-[#2a170e]">
            We have received your enquiry about <strong>{puppyName}</strong>. Our team will contact you shortly on WhatsApp or phone.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="btn btn-ghost mt-4 !min-h-[2.4rem] !px-4 !py-1 text-xs font-bold"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-wider text-[#5a3a28]"
              >
                Your Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Al Nuaimi"
                className="mt-1.5 w-full rounded-xl border border-[#2a170e]/20 bg-[#fffdf8] px-4 py-3 text-sm text-[#2a170e] placeholder-[#2a170e]/40 focus:border-[#a24a1a] focus:outline-none focus:ring-2 focus:ring-[#a24a1a]/20"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#5a3a28]"
              >
                WhatsApp / Phone *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+971 50 123 4567"
                className="mt-1.5 w-full rounded-xl border border-[#2a170e]/20 bg-[#fffdf8] px-4 py-3 text-sm text-[#2a170e] placeholder-[#2a170e]/40 focus:border-[#a24a1a] focus:outline-none focus:ring-2 focus:ring-[#a24a1a]/20"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-[#5a3a28]"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="sarah@example.com"
              className="mt-1.5 w-full rounded-xl border border-[#2a170e]/20 bg-[#fffdf8] px-4 py-3 text-sm text-[#2a170e] placeholder-[#2a170e]/40 focus:border-[#a24a1a] focus:outline-none focus:ring-2 focus:ring-[#a24a1a]/20"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-[#5a3a28]"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-[#2a170e]/20 bg-[#fffdf8] px-4 py-3 text-sm text-[#2a170e] placeholder-[#2a170e]/40 focus:border-[#a24a1a] focus:outline-none focus:ring-2 focus:ring-[#a24a1a]/20"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full justify-center text-center font-bold"
          >
            <Send className="size-4" />
            <span>{isSubmitting ? "Posting your letter..." : "Send enquiry"}</span>
          </button>
        </form>
      )}
    </div>
  );
}
