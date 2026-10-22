import React from "react";
import Link from "next/link";
import { Search, Camera, Truck, ArrowRight } from "lucide-react";

export function JourneySection() {
  const steps = [
    {
      num: 1,
      icon: Search,
      title: "Choose your breed",
      desc: "Browse authentic photos, videos, and temperament notes for every available puppy or discuss your lifestyle with our specialists.",
    },
    {
      num: 2,
      icon: Camera,
      title: "Get photos & details",
      desc: "Receive real-time video sessions, parental pedigree documentation, and complete veterinary health cards directly via WhatsApp.",
    },
    {
      num: 3,
      icon: Truck,
      title: "Secure & safe delivery",
      desc: "Pick up your new baby at our Downtown Dubai showroom or enjoy safe, temperature-controlled doorstep delivery across the UAE.",
    },
  ];

  return (
    <section
      data-pup-scene="true"
      data-tone="light"
      style={{
        ["--sky-top" as string]: "#f7d18d",
        ["--sky-bottom" as string]: "#f0b866",
      }}
      className="tp-scene border-t border-[#c2622b]/15 py-16 sm:py-24"
      aria-labelledby="journey-title"
    >
      <div className="gutter mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-scrawl text-lg font-semibold text-[#8e3f15]">
            from first glance to forever home
          </p>
          <h2
            id="journey-title"
            className="font-plush mt-2 text-3xl font-extrabold text-[#2a170e] sm:text-5xl"
          >
            Your puppy journey
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#5a3a28]">
            Three clear steps designed to make welcoming your puppy an exciting, stress-free experience.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="tp-paper flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="tp-chapter__n">{step.num}</span>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[#c2622b]/15 text-[#a24a1a]">
                      <Icon className="size-6" />
                    </div>
                  </div>

                  <h3 className="font-plush mt-5 text-xl font-bold text-[#2a170e] sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5a3a28]">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/how-it-works"
            className="btn btn-ghost inline-flex items-center gap-2 font-bold"
          >
            <span>Read full how it works guide</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
