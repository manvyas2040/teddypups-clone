import React from "react";
import Link from "next/link";
import { MessageCircle, Sparkles } from "lucide-react";
import { PuppetLineup } from "./PuppetLineup";

export function HeroSection() {
  return (
    <section
      data-pup-scene="true"
      data-tone="light"
      style={{
        ["--sky-top" as string]: "#fffdf8",
        ["--sky-bottom" as string]: "#fff1d8",
      }}
      className="tp-scene relative overflow-hidden pb-16 pt-8 sm:pb-24 sm:pt-16"
      aria-labelledby="hero-title"
    >
      {/* Decorative sun background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 size-[42rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-b from-[#fbe3b4]/60 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="gutter relative mx-auto max-w-5xl text-center">
        {/* Chapter pill note */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#c2622b]/30 bg-[#fffdf8]/90 px-4 py-1.5 shadow-sm backdrop-blur-sm">
          <Sparkles className="size-4 text-[#c2622b]" />
          <span className="font-scrawl text-sm font-semibold text-[#8e3f15] sm:text-base">
            Dubai’s boutique teacup nursery
          </span>
        </div>

        {/* Headline */}
        <h1
          id="hero-title"
          className="font-plush mt-6 text-4xl font-extrabold tracking-tight text-[#2a170e] sm:text-6xl md:text-7xl"
        >
          Premium teacup <br />
          <span className="text-[#a24a1a]">puppies in Dubai</span>
        </h1>

        {/* Lede text */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#5a3a28] sm:text-lg md:text-xl">
          Teddy bear and teacup puppies raised with gentle hands and open hearts.
          Meet local puppies in our Downtown Dubai showroom or reserve a rare teacup breed imported for you.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10">
          <Link href="/puppies" className="btn btn-primary text-base">
            <span>Meet the puppies</span>
            <span aria-hidden="true">🐾</span>
          </Link>
          <a
            href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-base"
          >
            <MessageCircle className="size-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Puppies Lineup Carousel */}
        <PuppetLineup />
      </div>
    </section>
  );
}
