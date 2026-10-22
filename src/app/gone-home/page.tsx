import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Heart } from "lucide-react";
import { PUPPIES } from "@/data/puppies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gone home | TeddyPups U.A.E.",
  description: "TeddyPups puppies who have already joined their families.",
};

export default function GoneHomePage() {
  // Take a selection of puppies to showcase as gone home
  const adoptedPups = PUPPIES.slice(0, 8);

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
            <Heart className="size-4 text-[#991b1b]" />
            <span className="font-scrawl text-sm font-semibold text-[#8e3f15] sm:text-base">
              happily ever after
            </span>
          </div>

          <h1 className="font-plush mt-4 text-4xl font-extrabold text-[#2a170e] sm:text-6xl">
            Gone home
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5a3a28] sm:text-lg">
            TeddyPups puppies who have already joined their families and found their forever homes.
          </p>
        </div>
      </section>

      {/* Grid of Adopted Puppies */}
      <div className="gutter mx-auto mt-14 max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {adoptedPups.map((pup) => (
            <div
              key={pup.id}
              className="tp-polaroid group flex flex-col transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#fbe3b4]/30">
                <Image
                  src={pup.cover.url}
                  alt={pup.displayName}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale-[20%] transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Gone Home Wax Stamp */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <span className="tp-gone-stamp text-xs font-bold shadow-md">
                    Gone Home ❤️
                  </span>
                </div>
              </div>

              <div className="mt-4 px-1 text-center">
                <h3 className="font-plush text-xl font-bold text-[#2a170e]">
                  {pup.displayName}
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-[#8e3f15]">
                  {pup.breed} · {pup.genderLabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Available Puppies Card */}
        <div className="tp-board mx-auto mt-20 max-w-2xl text-center p-8 sm:p-10">
          <Sparkles className="mx-auto size-8 text-[#a24a1a]" />
          <h2 className="font-plush mt-3 text-2xl font-bold text-[#2a170e] sm:text-3xl">
            Looking for an available puppy?
          </h2>
          <p className="mt-2 text-sm text-[#5a3a28]">
            We regularly welcome new litters in Downtown Dubai and source rare breeds upon request.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/puppies"
              className="btn btn-primary inline-flex items-center gap-2 font-bold"
            >
              <span>Explore available puppies</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
