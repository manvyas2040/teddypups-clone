import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PUPPIES } from "@/data/puppies";
import { PuppyMediaGallery } from "@/components/puppies/PuppyMediaGallery";
import { PuppyInquiryForm } from "@/components/puppies/PuppyInquiryForm";
import { MessageCircle, Check } from "lucide-react";
import type { Metadata } from "next";

interface PuppyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PUPPIES.map((puppy) => ({
    slug: puppy.slug,
  }));
}

export async function generateMetadata({ params }: PuppyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const puppy = PUPPIES.find((p) => p.slug === slug);
  if (!puppy) return { title: "Puppy Not Found | TeddyPups U.A.E." };

  return {
    title: `${puppy.displayName}, ${puppy.breed} puppy | TeddyPups U.A.E.`,
    description: `Meet ${puppy.displayName}: ${puppy.breed}, ${puppy.genderLabel.toLowerCase()}, ${puppy.age} old, ${puppy.origin.name}. Real photos and video from TeddyPups U.A.E.`,
  };
}

export default async function PuppyDetailPage({ params }: PuppyPageProps) {
  const { slug } = await params;
  const puppy = PUPPIES.find((p) => p.slug === slug);

  if (!puppy) {
    notFound();
  }

  const isImported = puppy.origin.slug === "imported";

  const arrivalSteps = isImported
    ? [
        {
          step: 1,
          title: "Reserve your puppy",
          desc: `Reserve ${puppy.displayName} with an official deposit. We immediately confirm their flight clearance and health dossier.`,
        },
        {
          step: 2,
          title: "Personalized consultation",
          desc: "Receive pre-travel video clips, pedigree certificates, and complete veterinary vaccine records.",
        },
        {
          step: 3,
          title: "Import & arrival",
          desc: "Our licensed animal cargo specialists manage all UAE Ministry approvals, safe transit, and airport veterinary clearance.",
        },
        {
          step: 4,
          title: "Welcome home",
          desc: "Meet your puppy at our Downtown Dubai showroom or enjoy white-glove doorstep delivery anywhere across the UAE.",
        },
      ]
    : [
        {
          step: 1,
          title: "Visit our showroom",
          desc: `Come meet ${puppy.displayName} in person at our welcoming Downtown Dubai boutique showroom.`,
        },
        {
          step: 2,
          title: "Intimate bonding session",
          desc: "Spend quality cuddle time together in a peaceful, hygienic environment.",
        },
        {
          step: 3,
          title: "Health card verification",
          desc: "Review vaccination logs, microchip registration, and written health guarantee with our veterinary coordinator.",
        },
        {
          step: 4,
          title: "Take home today",
          desc: "Take your baby home immediately or schedule a chauffeur delivery right to your door.",
        },
      ];

  const waText = `Hi TeddyPups! I'm interested in ${puppy.displayName}, the ${puppy.breed}: https://puppy.instabizweb.com/puppies/${puppy.slug}`;

  return (
    <div className="gutter mx-auto max-w-[110rem] pb-24 pt-6 sm:pt-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm font-semibold text-[#5a3a28]">
        <Link href="/puppies" className="link-ink">
          Available puppies
        </Link>
        <span className="mx-2 text-[#2a170e]/30">/</span>
        <span aria-current="page" className="text-[#2a170e]">
          {puppy.displayName}
        </span>
      </nav>

      {/* Chapter 1: hello, it's me */}
      <div className="mt-6 flex items-center gap-2">
        <span className="tp-chapter__n">1</span>
        <span className="font-scrawl text-lg font-semibold text-[#8e3f15]">
          hello, it’s me
        </span>
      </div>

      {/* Main Grid: Gallery & Specs */}
      <div className="mt-4 grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Media Gallery (Left col) */}
        <div className="min-w-0 lg:col-span-7">
          <PuppyMediaGallery media={puppy.media} puppyName={puppy.displayName} />
        </div>

        {/* Specifications & Actions (Right col) */}
        <div className="flex flex-col justify-start lg:col-span-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h1 className="font-plush text-4xl font-extrabold text-[#2a170e] sm:text-5xl">
              {puppy.displayName}
            </h1>
            <span className="rounded-full border border-[#a24a1a]/30 bg-[#a24a1a]/10 px-3 py-1 text-xs font-bold text-[#a24a1a]">
              {puppy.origin.name}
            </span>
          </div>

          <p className="mt-2 text-lg font-bold text-[#8e3f15]">
            {puppy.breed}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#5a3a28]">
            {puppy.description}
          </p>

          {/* Specs Definition List */}
          <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-[#2a170e]/15 bg-[#fff8ea]/70 p-5">
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-[#5a3a28]">
                Breed
              </dt>
              <dd className="mt-0.5 text-base font-bold text-[#2a170e]">
                {puppy.breed}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-[#5a3a28]">
                Gender
              </dt>
              <dd className="mt-0.5 text-base font-bold text-[#2a170e]">
                {puppy.genderLabel}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-[#5a3a28]">
                Age
              </dt>
              <dd className="mt-0.5 text-base font-bold text-[#2a170e]">
                {puppy.age}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-[#5a3a28]">
                Where
              </dt>
              <dd className="mt-0.5 text-base font-bold text-[#2a170e]">
                {puppy.origin.name}
              </dd>
            </div>
          </dl>

          {/* Direct Actions */}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`https://wa.me/971541676733?text=${encodeURIComponent(waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full justify-center text-center font-bold"
            >
              <MessageCircle className="size-5" />
              <span>Ask about {puppy.displayName} on WhatsApp</span>
            </a>

            <a
              href={`#enquire-${puppy.slug}`}
              className="btn btn-ghost w-full justify-center text-center font-bold"
            >
              Send an enquiry
            </a>
          </div>

          {/* Chapter 2: Every Teddy Pup comes */}
          <div className="tp-paper mt-8 -rotate-1">
            <div className="flex items-center gap-2">
              <span className="tp-chapter__n">2</span>
              <span className="font-scrawl text-sm font-semibold text-[#8e3f15]">
                what comes with {puppy.displayName}
              </span>
            </div>

            <h2 className="font-plush mt-2 text-2xl font-bold text-[#2a170e]">
              Every Teddy Pup comes
            </h2>

            <ul className="mt-4 space-y-2.5">
              {puppy.checklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-[#2a170e]">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#1f7a4d] text-white">
                    <Check className="size-3.5 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Chapter 3: Journey timeline */}
      <div className="mt-20">
        <div className="flex items-center gap-2">
          <span className="tp-chapter__n">3</span>
          <span className="font-scrawl text-lg font-semibold text-[#8e3f15]">
            how they reach you
          </span>
        </div>

        <h2 className="font-plush mt-2 text-3xl font-extrabold text-[#2a170e] sm:text-4xl">
          {isImported ? "Coming home from abroad" : "Welcoming your local puppy"}
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {arrivalSteps.map((step) => (
            <div
              key={step.step}
              className="tp-board flex flex-col justify-between"
            >
              <div>
                <span className="tp-chapter__n">{step.step}</span>
                <h3 className="font-plush mt-4 text-xl font-bold text-[#2a170e]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5a3a28] sm:text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter 4: Enquiry Form */}
      <div className="mx-auto max-w-3xl">
        <PuppyInquiryForm
          puppyName={puppy.displayName}
          puppySlug={puppy.slug}
        />
      </div>

      {/* Browse other puppies link */}
      <div className="mt-16 text-center">
        <Link
          href="/puppies"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#a24a1a] transition-all hover:gap-3 hover:text-[#8e3f15]"
        >
          <span>← Back to all available puppies</span>
        </Link>
      </div>
    </div>
  );
}
