"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Filter } from "lucide-react";
import { PUPPIES } from "@/data/puppies";
import { PuppyCard } from "@/components/puppies/PuppyCard";

export default function PuppiesCatalogPage() {
  const [selectedOrigin, setSelectedOrigin] = useState<"all" | "local" | "imported">("all");
  const [selectedBreed, setSelectedBreed] = useState<string>("all");

  const breeds = [
    { label: "All breeds", value: "all" },
    { label: "Maltipoo", value: "maltipoo" },
    { label: "Pomeranian", value: "pomeranian" },
    { label: "Poodle", value: "poodle" },
    { label: "Cavapoo", value: "cavapoo" },
    { label: "Shih Tzu", value: "shih-tzu" },
  ];

  const filteredPuppies = useMemo(() => {
    return PUPPIES.filter((pup) => {
      // Origin filter
      if (selectedOrigin === "local" && pup.origin.slug !== "local") return false;
      if (selectedOrigin === "imported" && pup.origin.slug !== "imported") return false;

      // Breed filter
      if (selectedBreed !== "all" && pup.breedSlug !== selectedBreed) return false;

      return true;
    });
  }, [selectedOrigin, selectedBreed]);

  return (
    <div className="min-h-screen pb-20">
      {/* Top Banner */}
      <section
        style={{
          ["--sky-top" as string]: "#fffdf8",
          ["--sky-bottom" as string]: "#fff1d8",
        }}
        className="tp-scene border-b border-[#c2622b]/15 py-12 sm:py-20"
      >
        <div className="gutter mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c2622b]/30 bg-[#fffdf8]/90 px-4 py-1.5 shadow-sm">
            <Sparkles className="size-4 text-[#c2622b]" />
            <span className="font-scrawl text-sm font-semibold text-[#8e3f15] sm:text-base">
              purebred, teacup & teddy lines
            </span>
          </div>

          <h1 className="font-plush mt-4 text-4xl font-extrabold text-[#2a170e] sm:text-6xl">
            Available puppies
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5a3a28] sm:text-lg">
            Teacup and teddy bear puppies available now in Dubai and imported from trusted breeders — every listing shows real photos of the puppy.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="gutter sticky top-[var(--header-h)] z-30 border-b border-[#2a170e]/10 bg-[#fffdf8]/90 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          {/* Origin Tabs */}
          <div className="flex items-center rounded-full border border-[#2a170e]/15 bg-[#fff8ea] p-1">
            <button
              type="button"
              onClick={() => setSelectedOrigin("all")}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all sm:text-sm ${
                selectedOrigin === "all"
                  ? "bg-[#2a170e] text-[#fffdf8] shadow-sm"
                  : "text-[#5a3a28] hover:text-[#2a170e]"
              }`}
            >
              All Puppies ({PUPPIES.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedOrigin("local")}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all sm:text-sm ${
                selectedOrigin === "local"
                  ? "bg-[#1f7a4d] text-[#fffdf8] shadow-sm"
                  : "text-[#5a3a28] hover:text-[#1f7a4d]"
              }`}
            >
              In Dubai
            </button>
            <button
              type="button"
              onClick={() => setSelectedOrigin("imported")}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all sm:text-sm ${
                selectedOrigin === "imported"
                  ? "bg-[#a24a1a] text-[#fffdf8] shadow-sm"
                  : "text-[#5a3a28] hover:text-[#a24a1a]"
              }`}
            >
              Imported
            </button>
          </div>

          {/* Breed Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="hidden items-center gap-1 text-xs font-bold text-[#5a3a28] sm:inline-flex">
              <Filter className="size-3.5" /> Breed:
            </span>
            {breeds.map((b) => (
              <button
                key={b.value}
                type="button"
                onClick={() => setSelectedBreed(b.value)}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition-all ${
                  selectedBreed === b.value
                    ? "border-[#a24a1a] bg-[#a24a1a] text-[#fffdf8]"
                    : "border-[#2a170e]/15 bg-[#ffffff] text-[#5a3a28] hover:border-[#a24a1a]/40"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Puppies */}
      <div className="gutter mx-auto mt-10 max-w-7xl">
        {filteredPuppies.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPuppies.map((puppy, i) => (
              <PuppyCard key={puppy.id} puppy={puppy} priority={i < 6} />
            ))}
          </div>
        ) : (
          <div className="tp-paper mx-auto my-12 max-w-md text-center">
            <p className="font-scrawl text-2xl font-bold text-[#2a170e]">
              No puppies match this filter
            </p>
            <p className="mt-2 text-sm text-[#5a3a28]">
              Try resetting your origin or breed filters to see all available puppies.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedOrigin("all");
                setSelectedBreed("all");
              }}
              className="btn btn-primary mt-6 !min-h-[2.6rem] !px-4 !py-1 text-sm font-bold"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Gone Home Banner Strip */}
        <div className="tp-board mt-16 flex flex-col items-center justify-between gap-6 sm:flex-row sm:p-8">
          <div>
            <span className="tp-gone-stamp text-xs font-bold">Adopted</span>
            <h2 className="font-plush mt-2 text-2xl font-bold text-[#2a170e] sm:text-3xl">
              Looking for puppies already gone home?
            </h2>
            <p className="mt-1 text-sm text-[#5a3a28]">
              Browse our archive of sweet puppies who have already joined their forever families.
            </p>
          </div>

          <Link
            href="/gone-home"
            className="btn btn-ghost inline-flex items-center gap-2 font-bold whitespace-nowrap"
          >
            <span>View adopted puppies</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
