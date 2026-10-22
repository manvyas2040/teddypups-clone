import React from "react";
import Link from "next/link";
import { MessageCircle, Sparkles } from "lucide-react";

export function HearthCTA() {
  return (
    <section
      data-pup-scene="true"
      data-tone="dark"
      style={{
        ["--sky-top" as string]: "#2f1a10",
        ["--sky-bottom" as string]: "#24130b",
      }}
      className="tp-scene border-t border-[#3d1f11] py-20 sm:py-28"
      aria-labelledby="cta-title"
    >
      <div className="gutter mx-auto max-w-4xl text-center">
        {/* Decorative badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#f2be6b]/30 bg-[#fffdf8]/10 px-4 py-1.5 text-sm font-semibold text-[#f2be6b] backdrop-blur-md">
          <Sparkles className="size-4" />
          <span className="font-scrawl text-base">your new companion is waiting</span>
        </div>

        <h2
          id="cta-title"
          className="font-plush mt-6 text-3xl font-extrabold text-[#fffdf8] sm:text-5xl md:text-6xl"
        >
          Ready to meet your <br />
          <span className="text-[#f2be6b]">new best friend?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#fffdf8]/85 sm:text-lg">
          Visit our boutique nursery in Downtown Dubai or chat directly with our specialists on WhatsApp for personalized videos, photos, and answers.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-base font-bold shadow-lg"
          >
            <MessageCircle className="size-5" />
            <span>Chat on WhatsApp</span>
          </a>
          <Link
            href="/puppies"
            className="btn btn-ghost text-base font-bold !border-[#fffdf8]/60 !text-[#fffdf8] hover:!bg-[#fffdf8]/10"
          >
            <span>Browse available puppies</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
