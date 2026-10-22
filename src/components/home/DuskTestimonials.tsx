"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HAPPY_FAMILIES } from "@/data/happyFamilies";
import { PolaroidCard } from "@/components/families/PolaroidCard";
import { LightboxModal } from "@/components/families/LightboxModal";
import { FamilyStory } from "@/types";

export function DuskTestimonials() {
  const [selectedStory, setSelectedStory] = useState<FamilyStory | null>(null);

  // Take first 4 for home page
  const featuredStories = HAPPY_FAMILIES.slice(0, 4);

  return (
    <section
      data-pup-scene="true"
      data-tone="dark"
      style={{
        ["--sky-top" as string]: "#a65a30",
        ["--sky-bottom" as string]: "#4d2b19",
      }}
      className="tp-scene border-t border-[#3d1f11] py-16 sm:py-24"
      aria-labelledby="dusk-title"
    >
      <div className="gutter mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-scrawl text-lg font-semibold text-[#f2be6b]">
            captured moments of pure joy
          </p>
          <h2
            id="dusk-title"
            className="font-plush mt-2 text-3xl font-extrabold text-[#fffdf8] sm:text-5xl"
          >
            Happy families & puppies
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#fffdf8]/85">
            Real photos shared by families across Dubai and the UAE after welcoming their new puppy home.
          </p>
        </div>

        {/* Polaroid Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredStories.map((story) => (
            <PolaroidCard
              key={story.id}
              story={story}
              onClick={(s) => setSelectedStory(s)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/happy-families"
            className="btn btn-ghost inline-flex items-center gap-2 font-bold !border-[#fffdf8]/60 !text-[#fffdf8] hover:!bg-[#fffdf8]/10"
          >
            <span>View all family moments ({HAPPY_FAMILIES.length})</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <LightboxModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />
    </section>
  );
}
