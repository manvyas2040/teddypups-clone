import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Globe } from "lucide-react";
import { Puppy } from "@/types";

interface PuppyCardProps {
  puppy: Puppy;
  priority?: boolean;
}

export function PuppyCard({ puppy, priority = false }: PuppyCardProps) {
  const isImported = puppy.origin.slug === "imported";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-[#2a170e]/15 bg-[#ffffff] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#a24a1a]/40 hover:shadow-xl">
      {/* Cover Image Container */}
      <Link
        href={`/puppies/${puppy.slug}`}
        className="relative aspect-[4/5] w-full overflow-hidden bg-[#fbe3b4]/40"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={puppy.cover.url}
          alt={puppy.cover.alt || puppy.displayName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority={priority}
        />

        {/* Origin Badge */}
        <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-[#2a170e]/10 bg-[#fffdf8]/95 px-3 py-1 text-xs font-bold text-[#2a170e] shadow-sm backdrop-blur-sm">
          {isImported ? (
            <>
              <Globe className="size-3.5 text-[#a24a1a]" />
              <span>Imported</span>
            </>
          ) : (
            <>
              <MapPin className="size-3.5 text-[#1f7a4d]" />
              <span>In Dubai</span>
            </>
          )}
        </div>

        {/* Gender / Age Tag */}
        <div className="absolute bottom-3 right-3 z-10 rounded-full border border-[#2a170e]/10 bg-[#fffdf8]/95 px-3 py-1 text-xs font-bold text-[#5a3a28] shadow-sm backdrop-blur-sm">
          {puppy.genderLabel} · {puppy.age}
        </div>
      </Link>

      {/* Info Section */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-plush text-xl font-bold tracking-tight text-[#2a170e] group-hover:text-[#a24a1a] sm:text-2xl">
              <Link href={`/puppies/${puppy.slug}`}>
                {puppy.displayName}
              </Link>
            </h3>
            <p className="mt-0.5 text-sm font-semibold text-[#8e3f15]">
              {puppy.breed}
            </p>
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-[#5a3a28]">
          {puppy.description}
        </p>

        {/* Actions Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-[#2a170e]/10 pt-4">
          <Link
            href={`/puppies/${puppy.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#a24a1a] transition-all hover:gap-2.5 hover:text-[#8e3f15]"
          >
            <span>Meet {puppy.displayName.split(" ")[0]}</span>
            <ArrowRight className="size-4" />
          </Link>

          <a
            href={`https://wa.me/919737372040?text=Hi%20TeddyPups!%20I'm%20interested%20in%20${encodeURIComponent(
              puppy.displayName
            )}%20(${encodeURIComponent(puppy.breed)}):%20https://puppy.instabizweb.com/puppies/${puppy.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1f7a4d]/10 px-3 py-1 text-xs font-bold text-[#1f7a4d] transition-colors hover:bg-[#1f7a4d] hover:text-white"
            aria-label={`Ask about ${puppy.displayName} on WhatsApp`}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
