import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PUPPIES } from "@/data/puppies";
import { PuppyCard } from "@/components/puppies/PuppyCard";

export function MeetSection() {
  // Show 6 featured puppies on home page
  const featuredPuppies = PUPPIES.slice(0, 6);

  return (
    <section
      data-pup-scene="true"
      data-tone="light"
      style={{
        ["--sky-top" as string]: "#fff1d8",
        ["--sky-bottom" as string]: "#fbe3b4",
      }}
      className="tp-scene border-t border-[#c2622b]/10 py-16 sm:py-24"
      aria-labelledby="meet-title"
    >
      <div className="gutter mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center">
          <p className="font-scrawl text-lg font-semibold text-[#8e3f15]">
            our sweet furry friends
          </p>
          <h2
            id="meet-title"
            className="font-plush mt-2 text-3xl font-extrabold text-[#2a170e] sm:text-5xl"
          >
            Meet the pups
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#5a3a28]">
            Local teacup and teddy bear puppies in Dubai, ready for cuddles and same-day home visits.
          </p>
        </div>

        {/* Grid of Puppies */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPuppies.map((puppy, i) => (
            <PuppyCard key={puppy.id} puppy={puppy} priority={i < 3} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/puppies"
            className="btn btn-ghost inline-flex items-center gap-2 font-bold"
          >
            <span>See all available puppies ({PUPPIES.length})</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
