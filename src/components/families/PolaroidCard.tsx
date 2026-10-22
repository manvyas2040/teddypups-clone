"use client";

import React from "react";
import Image from "next/image";
import { FamilyStory } from "@/types";

interface PolaroidCardProps {
  story: FamilyStory;
  onClick: (story: FamilyStory) => void;
}

export function PolaroidCard({ story, onClick }: PolaroidCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(story)}
      style={{ transform: `rotate(${story.rotation}deg)` }}
      className="tp-polaroid group flex w-full flex-col text-left transition-all duration-300 hover:z-20 hover:scale-105 hover:!rotate-0"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-md bg-[#fbe3b4]/30">
        <Image
          src={story.image.url}
          alt={story.image.alt || story.caption}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-3 px-1 text-center">
        <p className="font-scrawl line-clamp-1 text-base font-bold text-[#2a170e]">
          {story.caption}
        </p>
      </div>
    </button>
  );
}
