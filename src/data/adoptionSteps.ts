export interface AdoptionStep {
  step: number;
  title: string;
  desc: string;
  tag: string;
}

export const IN_DUBAI_STEPS: AdoptionStep[] = [
  {
    step: 1,
    title: "Explore our puppies",
    desc: "Browse our locally available teacup and teddy bear puppies online, featuring real photos and high-definition video clips.",
    tag: "Browse"
  },
  {
    step: 2,
    title: "Choose your puppy",
    desc: "Reach out on WhatsApp to speak with our specialists, ask any questions about breed, personality, and care requirements.",
    tag: "Consult"
  },
  {
    step: 3,
    title: "Meet before you choose",
    desc: "Visit our welcoming Downtown Dubai showroom for an intimate bonding session with your puppy before taking them home.",
    tag: "Visit"
  },
  {
    step: 4,
    title: "Pick-up or delivery",
    desc: "Take your puppy home immediately, or schedule a gentle white-glove chauffeur delivery right to your doorstep across the UAE.",
    tag: "Home"
  }
];

export const IMPORTED_STEPS: AdoptionStep[] = [
  {
    step: 1,
    title: "Reserve your puppy",
    desc: "Select your desired rare breed or teacup line from our verified overseas certified ethical breeders.",
    tag: "Select"
  },
  {
    step: 2,
    title: "Personalized consultation",
    desc: "Receive pre-travel video sessions, complete health records, vaccination logs, and parentage documentation.",
    tag: "Verify"
  },
  {
    step: 3,
    title: "Import and arrival",
    desc: "We manage all official paperwork, Ministry approvals, temperature-controlled cargo, and veterinarian customs clearance.",
    tag: "Travel"
  },
  {
    step: 4,
    title: "Welcome home",
    desc: "Meet your puppy at our Downtown Dubai showroom or receive personal VIP home delivery with their complete travel passport.",
    tag: "Welcome"
  }
];
