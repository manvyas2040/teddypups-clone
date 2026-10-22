"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { FamilyStory } from "@/types";

interface LightboxModalProps {
  story: FamilyStory | null;
  onClose: () => void;
}

export function LightboxModal({ story, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (story) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [story, onClose]);

  if (!story) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#24130b]/80 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg rounded-2xl border-2 border-[#fffdf8]/20 bg-[#ffffff] p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-[#2a170e]/80 text-[#fffdf8] transition-colors hover:bg-[#2a170e]"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#fbe3b4]/30">
          <Image
            src={story.image.url}
            alt={story.image.alt || story.caption}
            fill
            sizes="(max-width: 640px) 100vw, 500px"
            className="object-cover"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="font-scrawl text-xl font-bold text-[#2a170e]">
            {story.caption}
          </p>
          <p className="mt-1 text-xs text-[#5a3a28]">
            Shared by a happy TeddyPups family in the UAE ❤️
          </p>
        </div>
      </div>
    </div>
  );
}
