"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { MediaItem } from "@/types";

interface PuppyMediaGalleryProps {
  media: MediaItem[];
  puppyName: string;
}

export function PuppyMediaGallery({ media, puppyName }: PuppyMediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = media[activeIndex] || media[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Display Window */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-2 border-[#2a170e]/15 bg-[#fbe3b4]/30 shadow-lg">
        {activeItem.kind === "video" ? (
          <video
            src={activeItem.url}
            controls
            autoPlay
            loop
            playsInline
            className="size-full object-cover"
          />
        ) : (
          <Image
            src={activeItem.url}
            alt={activeItem.alt || puppyName}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition-all duration-300"
            priority
          />
        )}
      </div>

      {/* Thumbnails Row (if more than 1 media item) */}
      {media.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {media.map((item, index) => {
            const isCurrent = activeIndex === index;
            return (
              <button
                key={item.id + index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative size-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                  isCurrent
                    ? "border-[#a24a1a] shadow-md ring-2 ring-[#a24a1a]/30"
                    : "border-[#2a170e]/20 opacity-70 hover:opacity-100"
                }`}
              >
                {item.kind === "video" ? (
                  <div className="relative flex size-full items-center justify-center bg-[#2a170e] text-white">
                    <Play className="size-6 text-[#f2be6b]" />
                  </div>
                ) : (
                  <Image
                    src={item.url}
                    alt={`${puppyName} thumbnail ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
