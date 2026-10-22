import React from "react";
import Link from "next/link";
import { MapPin, Globe, CheckCircle2, ArrowRight } from "lucide-react";

export function PathsSection() {
  return (
    <section
      data-pup-scene="true"
      data-tone="light"
      style={{
        ["--sky-top" as string]: "#fbe3b4",
        ["--sky-bottom" as string]: "#f7d18d",
      }}
      className="tp-scene border-t border-[#c2622b]/15 py-16 sm:py-24"
      aria-labelledby="paths-title"
    >
      <div className="gutter mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-scrawl text-lg font-semibold text-[#8e3f15]">
            adoption made gentle & clear
          </p>
          <h2
            id="paths-title"
            className="font-plush mt-2 text-3xl font-extrabold text-[#2a170e] sm:text-5xl"
          >
            Two ways to meet your puppy
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#5a3a28]">
            Whether you want to cuddle in Downtown Dubai or reserve an exceptional international breed, we make the journey easy and transparent.
          </p>
        </div>

        {/* Two cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Path 1: In Dubai */}
          <div className="tp-board flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#1f7a4d]/10 text-[#1f7a4d]">
                <MapPin className="size-7" />
              </div>
              <span className="font-scrawl mt-4 inline-block text-base font-semibold text-[#1f7a4d]">
                immediate availability
              </span>
              <h3 className="font-plush mt-1 text-2xl font-bold text-[#2a170e] sm:text-3xl">
                Puppies in Dubai
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5a3a28]">
                Meet our locally available puppies in person at our Downtown Dubai showroom. Spend quality time bonding, playing, and take your puppy home the very same day.
              </p>

              <ul className="mt-6 space-y-2.5 text-sm font-semibold text-[#2a170e]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#1f7a4d]" />
                  <span>Downtown Dubai showroom visit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#1f7a4d]" />
                  <span>Same-day collection or home delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#1f7a4d]" />
                  <span>Full veterinary health certificate</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-[#2a170e]/10 pt-6">
              <Link
                href="/puppies?origin=local"
                className="btn btn-primary w-full justify-center font-bold"
              >
                <span>View local Dubai puppies</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Path 2: Imported for you */}
          <div className="tp-board flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#a24a1a]/10 text-[#a24a1a]">
                <Globe className="size-7" />
              </div>
              <span className="font-scrawl mt-4 inline-block text-base font-semibold text-[#a24a1a]">
                bespoke international selection
              </span>
              <h3 className="font-plush mt-1 text-2xl font-bold text-[#2a170e] sm:text-3xl">
                Imported for you
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5a3a28]">
                Through our Order Upon Request service, we source rare teacup lines (Korean Teacup Maltipoo, Teacup Poodle, etc.) from verified international ethical breeders.
              </p>

              <ul className="mt-6 space-y-2.5 text-sm font-semibold text-[#2a170e]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#a24a1a]" />
                  <span>Rare and bespoke teacup lineages</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#a24a1a]" />
                  <span>Full veterinary flight & customs management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#a24a1a]" />
                  <span>Video consultations before travel</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-[#2a170e]/10 pt-6">
              <Link
                href="/puppies?origin=imported"
                className="btn btn-ghost w-full justify-center font-bold"
              >
                <span>Browse imported breeds</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
