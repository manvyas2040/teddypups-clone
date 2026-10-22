import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQS } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";

export function NightFAQ() {
  // Show first 5 on home page
  const homeFaqs = FAQS.slice(0, 5);

  return (
    <section
      data-pup-scene="true"
      data-tone="dark"
      style={{
        ["--sky-top" as string]: "#4d2b19",
        ["--sky-bottom" as string]: "#2f1a10",
      }}
      className="tp-scene border-t border-[#3d1f11] py-16 sm:py-24"
      aria-labelledby="questions-title"
    >
      <div className="gutter mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-scrawl text-lg font-semibold text-[#f2be6b]">
            clear facts, no surprises
          </p>
          <h2
            id="questions-title"
            className="font-plush mt-2 text-3xl font-extrabold text-[#fffdf8] sm:text-5xl"
          >
            Questions, answered
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#fffdf8]/85">
            Everything you need to know about health guarantees, vaccinations, travel, and welcoming your puppy.
          </p>
        </div>

        <div className="mt-12">
          <Accordion items={homeFaqs} tone="dark" />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="btn btn-ghost inline-flex items-center gap-2 font-bold !border-[#fffdf8]/60 !text-[#fffdf8] hover:!bg-[#fffdf8]/10"
          >
            <span>View all questions & answers ({FAQS.length})</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
