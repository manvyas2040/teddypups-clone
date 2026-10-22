export interface MediaItem {
  id: string;
  url: string;
  kind: 'image' | 'video';
  width: number;
  height: number;
  alt: string;
  caption?: string | null;
  focalX?: number;
  focalY?: number;
  color?: string;
  blurDataUrl?: string | null;
  durationS?: number | null;
  poster?: unknown;
}

export interface Puppy {
  id: string;
  slug: string;
  name: string;
  displayName: string;
  breed: string;
  breedSlug: string;
  gender: string;
  genderLabel: string;
  age: string;
  origin: {
    slug: 'local' | 'imported';
    name: string;
  };
  status: 'available' | 'reserved' | 'gone_home';
  featured?: boolean;
  cover: MediaItem;
  media: MediaItem[];
  checklist: string[];
  description: string;
}

export interface FamilyStory {
  id: string;
  caption: string;
  rotation: number;
  image: MediaItem;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AdoptionStep {
  step: number;
  title: string;
  desc: string;
  tag: string;
}
