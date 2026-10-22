"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IN_DUBAI_STEPS, IMPORTED_STEPS } from "@/data/adoptionSteps";
import {
  MapPin,
  Globe,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Headphones,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<"local" | "imported">("local");

  const steps = activeTab === "local" ? IN_DUBAI_STEPS : IMPORTED_STEPS;

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
          <p className="font-scrawl text-lg font-semibold text-[#8e3f15]">
            transparent, caring & gentle
          </p>
          <h1 className="font-plush mt-2 text-4xl font-extrabold text-[#2a170e] sm:text-6xl">
            How it works
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5a3a28] sm:text-lg">
            Meet a local puppy in our Downtown Dubai showroom or reserve a premium teacup breed imported for you — every step, from choosing to coming home.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="gutter mx-auto mt-12 max-w-6xl">
        {/* Two Ways Home Tabs */}
        <div className="text-center">
          <h2 className="font-plush text-3xl font-extrabold text-[#2a170e] sm:text-4xl">
            Two ways home
          </h2>
          <p className="mt-2 text-sm text-[#5a3a28]">
            Select your preferred adoption method below to see the exact step-by-step process:
          </p>

          <div className="mt-6 inline-flex rounded-full border-2 border-[#2a170e]/20 bg-[#fff8ea] p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab("local")}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all sm:text-base ${
                activeTab === "local"
                  ? "bg-[#1f7a4d] text-white shadow-md"
                  : "text-[#5a3a28] hover:text-[#2a170e]"
              }`}
            >
              <MapPin className="size-4" />
              <span>In Dubai — meet in person</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("imported")}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all sm:text-base ${
                activeTab === "imported"
                  ? "bg-[#a24a1a] text-white shadow-md"
                  : "text-[#5a3a28] hover:text-[#2a170e]"
              }`}
            >
              <Globe className="size-4" />
              <span>Imported — order upon request</span>
            </button>
          </div>
        </div>

        {/* 4 Step Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="tp-board flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="tp-chapter__n">{s.step}</span>
                  <span className="rounded-full bg-[#c2622b]/15 px-2.5 py-0.5 text-xs font-bold text-[#8e3f15]">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-plush mt-4 text-xl font-bold text-[#2a170e]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5a3a28]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Puppy Promise Card */}
        <div className="tp-paper mt-16 -rotate-[0.6deg]">
          <div className="flex items-center gap-2">
            <span className="font-scrawl text-lg font-bold text-[#8e3f15]">
              guaranteed peace of mind
            </span>
          </div>
          <h2 className="font-plush mt-2 text-3xl font-extrabold text-[#2a170e] sm:text-4xl">
            Our premium puppy promise
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#5a3a28] sm:text-base">
            Every puppy at TeddyPups receives the utmost compassionate veterinary care. We never compromise on pedigree health, ethical breeding conditions, or the lifelong wellbeing of our animals.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#1f7a4d]" />
              <div>
                <h4 className="font-bold text-[#2a170e]">Licensed Vets Only</h4>
                <p className="text-xs text-[#5a3a28]">Verified health certifications before handover.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#1f7a4d]" />
              <div>
                <h4 className="font-bold text-[#2a170e]">ISO Microchip</h4>
                <p className="text-xs text-[#5a3a28]">Global identification registered in your name.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#1f7a4d]" />
              <div>
                <h4 className="font-bold text-[#2a170e]">Written Guarantee</h4>
                <p className="text-xs text-[#5a3a28]">Coverage against congenital medical defects.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery & Collection Grid */}
        <div className="mt-20">
          <h2 className="font-plush text-center text-3xl font-extrabold text-[#2a170e] sm:text-4xl">
            Delivery & collection
          </h2>
          <p className="mt-2 text-center text-sm text-[#5a3a28]">
            Flexible options to bring your baby home safely:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#2a170e]/15 bg-[#fff8ea] p-6 shadow-sm">
              <HeartHandshake className="size-8 text-[#a24a1a]" />
              <h3 className="font-plush mt-4 text-lg font-bold text-[#2a170e]">
                Same-Day Pickup
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#5a3a28]">
                Visit our Downtown Dubai showroom and take your puppy home immediately.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2a170e]/15 bg-[#fff8ea] p-6 shadow-sm">
              <Truck className="size-8 text-[#a24a1a]" />
              <h3 className="font-plush mt-4 text-lg font-bold text-[#2a170e]">
                Dubai Delivery
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#5a3a28]">
                Temperature-controlled private chauffeur delivery across Dubai & Northern Emirates.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2a170e]/15 bg-[#fff8ea] p-6 shadow-sm">
              <Globe className="size-8 text-[#a24a1a]" />
              <h3 className="font-plush mt-4 text-lg font-bold text-[#2a170e]">
                International Cargo
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#5a3a28]">
                IATA-compliant pet travel cabins with certified animal handlers.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2a170e]/15 bg-[#fff8ea] p-6 shadow-sm">
              <ShieldCheck className="size-8 text-[#a24a1a]" />
              <h3 className="font-plush mt-4 text-lg font-bold text-[#2a170e]">
                Worldwide Delivery
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#5a3a28]">
                Doorstep delivery options to GCC countries and destinations worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h2 className="font-plush text-center text-3xl font-extrabold text-[#2a170e] sm:text-4xl">
            Why choose us
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="tp-board text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#a24a1a]/15 text-[#a24a1a]">
                <Truck className="size-7" />
              </div>
              <h3 className="font-plush mt-4 text-xl font-bold text-[#2a170e]">
                International Cargo
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#5a3a28]">
                Safe, climate-monitored international pet transport with veterinary airport escorts.
              </p>
            </div>

            <div className="tp-board text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#1f7a4d]/15 text-[#1f7a4d]">
                <Headphones className="size-7" />
              </div>
              <h3 className="font-plush mt-4 text-xl font-bold text-[#2a170e]">
                Support 24/7
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#5a3a28]">
                Continuous WhatsApp guidance on nutrition, crate training, and developmental stages.
              </p>
            </div>

            <div className="tp-board text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#c2622b]/15 text-[#c2622b]">
                <ShieldCheck className="size-7" />
              </div>
              <h3 className="font-plush mt-4 text-xl font-bold text-[#2a170e]">
                Health Guarantee
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#5a3a28]">
                Comprehensive veterinary health guarantee backing every puppy we pair with a family.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="tp-board mt-20 flex flex-col items-center justify-between gap-6 md:flex-row md:p-10">
          <div>
            <h2 className="font-plush text-2xl font-bold text-[#2a170e] sm:text-3xl">
              Unique and high quality puppies
            </h2>
            <p className="mt-1 text-sm text-[#5a3a28]">
              Speak with our Dubai nursery advisors to learn more about upcoming litters.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/919737372040?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp font-bold"
            >
              <MessageCircle className="size-4" />
              <span>Message on WhatsApp</span>
            </a>
            <Link href="/puppies" className="btn btn-primary font-bold">
              <span>View puppies</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
