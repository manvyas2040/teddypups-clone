"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    breed: "Maltipoo",
    message: "",
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
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {}
    }, 600);
  };

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
            <Sparkles className="size-4 text-[#c2622b]" />
            <span className="font-scrawl text-sm font-semibold text-[#8e3f15] sm:text-base">
              we would love to meet you
            </span>
          </div>

          <h1 className="font-plush mt-4 text-4xl font-extrabold text-[#2a170e] sm:text-6xl">
            Get in touch with us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5a3a28] sm:text-lg">
            Visit TeddyPups in Downtown Dubai or get in touch on WhatsApp, by phone or email.
          </p>
        </div>
      </section>

      <div className="gutter mx-auto mt-14 max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Showroom & Contact Details (Left col) */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="tp-board">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#a24a1a]/15 text-[#a24a1a]">
                    <MapPin className="size-6" />
                  </div>
                  <div>
                    <h2 className="font-plush text-xl font-bold text-[#2a170e]">
                      Downtown Dubai Showroom
                    </h2>
                    <p className="text-xs text-[#8e3f15]">Visiting by appointment</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-[#5a3a28]">
                  <p className="leading-relaxed">
                    Our welcoming showroom is situated in the heart of Downtown Dubai, offering a clean, calm, and hygienic nursery environment for bonding with our puppies.
                  </p>

                  <div className="flex items-center gap-3 border-t border-[#2a170e]/10 pt-4">
                    <Clock className="size-5 shrink-0 text-[#a24a1a]" />
                    <div>
                      <p className="font-bold text-[#2a170e]">Visiting Hours</p>
                      <p className="text-xs text-[#5a3a28]">Every day: 10:00 AM – 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact Cards */}
              <div className="mt-6 space-y-3">
                <a
                  href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20learn%20more%20about%20your%20puppies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-[#2a170e]/15 bg-[#fff8ea] p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#1f7a4d] text-white">
                      <MessageCircle className="size-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#2a170e]">WhatsApp Nursery Line</p>
                      <p className="text-xs text-[#5a3a28]">+971 54 167 6733</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#1f7a4d]">Chat now →</span>
                </a>

                <a
                  href="tel:+971541676733"
                  className="flex items-center justify-between rounded-2xl border border-[#2a170e]/15 bg-[#fff8ea] p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#a24a1a] text-white">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#2a170e]">Phone</p>
                      <p className="text-xs text-[#5a3a28]">+971 54 167 6733</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#a24a1a]">Call us →</span>
                </a>

                <a
                  href="mailto:info@teddypups.ae"
                  className="flex items-center justify-between rounded-2xl border border-[#2a170e]/15 bg-[#fff8ea] p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#2a170e] text-white">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#2a170e]">Email</p>
                      <p className="text-xs text-[#5a3a28]">info@teddypups.ae</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#2a170e]">Email us →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive "Post my letter" form (Right col) */}
          <div className="lg:col-span-7">
            <div className="tp-paper -rotate-0.5">
              <span className="font-scrawl text-lg font-bold text-[#8e3f15]">
                leave us a sweet note
              </span>
              <h2 className="font-plush mt-1 text-2xl font-bold text-[#2a170e] sm:text-3xl">
                Post your letter to TeddyPups
              </h2>
              <p className="mt-2 text-sm text-[#5a3a28]">
                Fill out the details below and we will contact you immediately with puppy recommendations, videos, and appointment times.
              </p>

              {isSubmitted ? (
                <div className="mt-8 rounded-2xl border border-[#1f7a4d]/20 bg-[#1f7a4d]/10 p-8 text-center">
                  <CheckCircle2 className="mx-auto size-12 text-[#1f7a4d]" />
                  <h3 className="font-plush mt-4 text-2xl font-bold text-[#1f7a4d]">
                    Your letter is safely received!
                  </h3>
                  <p className="mt-2 text-sm text-[#2a170e]">
                    Thank you, <strong>{formData.name || "friend"}</strong>. Our Downtown Dubai nursery team will review your message and reply via WhatsApp or phone.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-primary mt-6 !min-h-[2.6rem] !px-5 !py-1 text-sm font-bold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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
                        placeholder="e.g. Fatima Al Maktoum"
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
                        placeholder="+971 50 000 0000"
                        className="mt-1.5 w-full rounded-xl border border-[#2a170e]/20 bg-[#fffdf8] px-4 py-3 text-sm text-[#2a170e] placeholder-[#2a170e]/40 focus:border-[#a24a1a] focus:outline-none focus:ring-2 focus:ring-[#a24a1a]/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
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
                        placeholder="fatima@example.com"
                        className="mt-1.5 w-full rounded-xl border border-[#2a170e]/20 bg-[#fffdf8] px-4 py-3 text-sm text-[#2a170e] placeholder-[#2a170e]/40 focus:border-[#a24a1a] focus:outline-none focus:ring-2 focus:ring-[#a24a1a]/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="breed"
                        className="block text-xs font-bold uppercase tracking-wider text-[#5a3a28]"
                      >
                        Breed of Interest
                      </label>
                      <select
                        id="breed"
                        value={formData.breed}
                        onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-[#2a170e]/20 bg-[#fffdf8] px-4 py-3 text-sm text-[#2a170e] focus:border-[#a24a1a] focus:outline-none focus:ring-2 focus:ring-[#a24a1a]/20"
                      >
                        <option value="Maltipoo">Maltipoo</option>
                        <option value="Korean Teacup Maltipoo">Korean Teacup Maltipoo</option>
                        <option value="Korean Teacup Poodle">Korean Teacup Poodle</option>
                        <option value="Cavapoo">Cavapoo</option>
                        <option value="Pomeranian">Pomeranian</option>
                        <option value="Shih Tzu">Shih Tzu</option>
                        <option value="Other">Other / Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#5a3a28]"
                    >
                      Message or Questions
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about what you're looking for, preferred timing, or questions you have..."
                      className="mt-1.5 w-full rounded-xl border border-[#2a170e]/20 bg-[#fffdf8] px-4 py-3 text-sm text-[#2a170e] placeholder-[#2a170e]/40 focus:border-[#a24a1a] focus:outline-none focus:ring-2 focus:ring-[#a24a1a]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full justify-center font-bold"
                  >
                    <Send className="size-4" />
                    <span>{isSubmitting ? "Posting your letter..." : "Post my letter"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
