import { HeroSection } from "@/components/home/HeroSection";
import { MeetSection } from "@/components/home/MeetSection";
import { PathsSection } from "@/components/home/PathsSection";
import { JourneySection } from "@/components/home/JourneySection";
import { TrustSection } from "@/components/home/TrustSection";
import { DuskTestimonials } from "@/components/home/DuskTestimonials";
import { NightFAQ } from "@/components/home/NightFAQ";
import { HearthCTA } from "@/components/home/HearthCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MeetSection />
      <PathsSection />
      <JourneySection />
      <TrustSection />
      <DuskTestimonials />
      <NightFAQ />
      <HearthCTA />
    </>
  );
}
