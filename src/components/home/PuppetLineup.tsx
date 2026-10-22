"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PUPPIES } from "@/data/puppies";

export function PuppetLineup() {
  // Take first 5 featured puppies for the lineup
  const lineupPups = PUPPIES.slice(0, 5);

  const rotations = [-2.5, 1.5, -1, 2, -1.8];

  return (
    <div className="relative mx-auto mt-8 w-full max-w-5xl py-6">
      <div className="flex items-center justify-center -space-x-4 overflow-x-auto px-4 py-4 sm:-space-x-6 sm:overflow-visible">
        {lineupPups.map((pup, index) => {
          const rot = rotations[index % rotations.length];
          return (
            <Link
              key={pup.id}
              href={`/puppies/${pup.slug}`}
              style={{ transform: `rotate(${rot}deg)` }}
              className="group relative flex-shrink-0 transition-all duration-300 hover:z-20 hover:scale-110 hover:!rotate-0"
            >
              <div className="tp-polaroid w-32 border-2 border-[#2a170e]/20 bg-[#ffffff] p-2 sm:w-44 sm:p-2.5">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#fbe3b4]/30">
                  <Image
                    src={pup.cover.url}
                    alt={pup.displayName}
                    fill
                    sizes="(max-width: 640px) 128px, 176px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-1 right-1 rounded-md bg-[#2a170e]/80 px-1.5 py-0.5 text-[0.65rem] font-bold text-[#fffdf8]">
                    {pup.breed.split(" ")[0]}
                  </span>
                </div>
                <div className="mt-2 text-center">
                  <p className="font-scrawl text-sm font-bold text-[#2a170e] sm:text-base">
                    {pup.displayName}
                  </p>
                  <p className="text-[0.65rem] font-semibold text-[#8e3f15] sm:text-xs">
                    {pup.genderLabel} · {pup.age}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
