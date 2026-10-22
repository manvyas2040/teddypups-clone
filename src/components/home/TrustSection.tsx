import React from "react";
import { ShieldCheck, HeartPulse, FileText, Headphones } from "lucide-react";

export function TrustSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Health Guarantee",
      desc: "Every puppy comes with a solid written health guarantee protecting against congenital and genetic conditions.",
    },
    {
      icon: HeartPulse,
      title: "Vaccinated & Microchipped",
      desc: "All puppies receive complete age-appropriate core vaccinations, deworming, and international ISO microchip registration.",
    },
    {
      icon: FileText,
      title: "Official Passport",
      desc: "Complete veterinary passports, government health inspection certificates, and clear parentage documentation.",
    },
    {
      icon: Headphones,
      title: "24/7 Aftercare Support",
      desc: "Our dedicated puppy nursery team is always on call via WhatsApp to assist with feeding, crate training, and settling in.",
    },
  ];

  return (
    <section
      data-pup-scene="true"
      data-tone="light"
      style={{
        ["--sky-top" as string]: "#f0b866",
        ["--sky-bottom" as string]: "#a65a30",
      }}
      className="tp-scene border-t border-[#c2622b]/15 py-16 sm:py-24"
      aria-labelledby="trust-title"
    >
      <div className="gutter mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-scrawl text-lg font-semibold text-[#fffdf8]">
            uncompromised quality and care
          </p>
          <h2
            id="trust-title"
            className="font-plush mt-2 text-3xl font-extrabold text-[#fffdf8] sm:text-5xl"
          >
            Why families trust TeddyPups
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#fffdf8]/90">
            Our highest priority is raising healthy, confident puppies and pairing them with loving families.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col rounded-2xl border border-[#fffdf8]/20 bg-[#fffdf8]/10 p-6 backdrop-blur-md transition-all duration-300 hover:bg-[#fffdf8]/20"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fffdf8] text-[#a24a1a] shadow-sm">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-plush mt-4 text-xl font-bold text-[#fffdf8]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#fffdf8]/80 sm:text-sm">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
