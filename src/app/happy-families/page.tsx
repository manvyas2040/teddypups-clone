"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, Sparkles } from "lucide-react";
import { HAPPY_FAMILIES } from "@/data/happyFamilies";
import { PolaroidCard } from "@/components/families/PolaroidCard";
import { LightboxModal } from "@/components/families/LightboxModal";
import { FamilyStory } from "@/types";

export default function HappyFamiliesPage() {
  const [selectedStory, setSelectedStory] = useState<FamilyStory | null>(null);

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
              cherished forever memories
            </span>
          </div>

          <h1 className="font-plush mt-4 text-4xl font-extrabold text-[#2a170e] sm:text-6xl">
            Happy families
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5a3a28] sm:text-lg">
            Real photos shared by TeddyPups families across Dubai and the UAE after welcoming their new puppy home.
          </p>
        </div>
      </section>

      {/* Polaroid Wall */}
      <div className="gutter mx-auto mt-14 max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {HAPPY_FAMILIES.map((story) => (
            <PolaroidCard
              key={story.id}
              story={story}
              onClick={(s) => setSelectedStory(s)}
            />
          ))}
        </div>

        {/* CTA Card */}
        <div className="tp-board mx-auto mt-20 max-w-3xl text-center p-8 sm:p-12">
          <span className="font-scrawl text-lg font-bold text-[#8e3f15]">
            welcome your own bundle of joy
          </span>
          <h2 className="font-plush mt-2 text-3xl font-extrabold text-[#2a170e] sm:text-4xl">
            Ready to join our happy families?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[#5a3a28] sm:text-base">
            Reach out on WhatsApp to speak with our coordinators, request videos, or schedule an in-person viewing at our Downtown Dubai showroom.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919737372040?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp font-bold"
            >
              <MessageCircle className="size-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link href="/puppies" className="btn btn-primary font-bold">
              <span>View available puppies</span>
            </Link>
          </div>
        </div>
      </div>

      <LightboxModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />
    </div>
  );
}
