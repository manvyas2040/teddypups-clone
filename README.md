# TeddyPups U.A.E. — Frontend Clone

A high-fidelity, responsive frontend clone of the boutique puppy nursery website [TeddyPups U.A.E.](https://puppy.instabizweb.com/). Built for technical evaluation using **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🌟 Overview & Design Philosophy

The reference website is an atmospheric, story-driven digital experience crafted with an editorial story structure that mirrors a gentle dawn-to-dusk progression:

- **Dawn / Morning** (`#fffdf8` → `#fff1d8`): Warm sunrise hero with boutique nursery branding, chapter markers, and interactive puppet lineup.
- **Midday / Afternoon** (`#fff1d8` → `#f7d18d`): Showcase of available puppies and the two adoption pathways (In Dubai vs. Imported).
- **Golden Hour / Sunset** (`#f7d18d` → `#a65a30`): Step-by-step adoption journey and veterinary trust passport pillars.
- **Dusk / Night** (`#a65a30` → `#2f1a10`): Warm polaroid memories of happy families and interactive FAQ accordion.
- **Hearth & Home** (`#2f1a10` → `#24130b`): Rich espresso footer with showroom location, hours, and legal credentials.

### Typography
- **Display Serif**: `Fraunces` (soft, plush high-contrast display serif with optical sizing).
- **Body Sans**: `Figtree` (clean, modern geometric sans).
- **Handwritten Script**: `Shantell Sans` (playful handwritten notes and chapter tags).

---

## 🚀 Key Features Recreated

1. **Complete 8-Route Architecture**:
   - `/` — Full 9-scene dawn-to-dusk narrative homepage.
   - `/puppies` — Filterable puppy catalog with origin tabs (*All*, *In Dubai*, *Imported*) and breed tags (*Maltipoo*, *Pomeranian*, *Poodle*, *Cavapoo*, *Shih Tzu*).
   - `/puppies/[slug]` — Dynamic profile routes for all 15 puppies with multi-media gallery (photo + video player), medical checklist, international arrival steps, and WhatsApp inquiry buttons.
   - `/happy-families` — Memory polaroid wall with realistic tilt angles and accessible lightbox modal viewer.
   - `/how-it-works` — Interactive two-way adoption guide (*"In Dubai — meet in person"* vs. *"Imported — order upon request"*), 4-stage process breakdown, premium promise paper card, and delivery matrix.
   - `/faq` — 9-category expandable accordion covering vaccinations, showroom visits, flights, and 24/7 post-home support.
   - `/contact` — Downtown Dubai showroom information, visiting hours, direct contact cards, and interactive *"Post my letter"* lead form.
   - `/gone-home` — Stamped polaroid gallery celebrating adopted puppies who have found their forever families.

2. **UI & Design Motifs**:
   - **Stitched Hem Header**: Custom SVG pattern (`tp-hem`) creating a scalloped stitched fabric border with scroll-driven opacity transitions.
   - **Paper Card Effect**: Textured paper cards (`tp-paper`) with authentic radial dots, borders, and subtle rotations (`-rotate-1`).
   - **Board Cards**: Outlined cards with offset shadow elevations (`tp-board`).
   - **Wax Stamp Badges**: Stamped badges (`tp-gone-stamp`) for adopted and special listings.
   - **Local Asset Hosting**: All 122 puppy photos, covers, family memories, and brand logos are hosted locally in `public/media/` to guarantee zero broken links.

3. **Interactive Functionality**:
   - Slide-over mobile drawer navigation with smooth spring animations.
   - Interactive media switcher supporting photos and embedded video playback.
   - Client-side filtering across origin and breed with zero layout shift.
   - Contact form with celebratory confetti feedback (`canvas-confetti`).
   - Context-aware WhatsApp deep links pre-populated with individual puppy details and URLs.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, SSG static pre-rendering)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type safety)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom vector brand icons
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📁 Project Structure

```
teddypups-clone/
├── public/
│   ├── brand/
│   │   └── logo.png              # TeddyPups bear logo mark
│   └── media/                   # 122 locally downloaded images & videos
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with fonts, header & footer
│   │   ├── page.tsx             # 9-scene narrative Home page
│   │   ├── globals.css          # Theme tokens, custom classes & utilities
│   │   ├── puppies/
│   │   │   ├── page.tsx         # Catalog with filter engine
│   │   │   └── [slug]/page.tsx  # Dynamic SSG puppy profile routes
│   │   ├── happy-families/page.tsx # Polaroid gallery & lightbox modal
│   │   ├── how-it-works/page.tsx   # Two-way adoption workflow guide
│   │   ├── faq/page.tsx            # Full 9-question accordion
│   │   ├── contact/page.tsx        # Showroom details & contact form
│   │   └── gone-home/page.tsx      # Adopted puppies archive
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky navigation & scroll observer
│   │   │   ├── MobileMenu.tsx   # Slide-over mobile navigation drawer
│   │   │   ├── Footer.tsx       # Multi-column espresso footer
│   │   │   └── ScallopedHem.tsx # SVG scalloped fabric hem pattern
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PuppetLineup.tsx # Hero puppy carousel
│   │   │   ├── MeetSection.tsx
│   │   │   ├── PathsSection.tsx
│   │   │   ├── JourneySection.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── DuskTestimonials.tsx
│   │   │   ├── NightFAQ.tsx
│   │   │   └── HearthCTA.tsx
│   │   ├── puppies/
│   │   │   ├── PuppyCard.tsx    # Reusable listing card
│   │   │   ├── PuppyMediaGallery.tsx # Photo & video viewer
│   │   │   └── PuppyInquiryForm.tsx   # Lead inquiry form with confetti
│   │   ├── families/
│   │   │   ├── PolaroidCard.tsx # Tilted photo card with caption
│   │   │   └── LightboxModal.tsx# Accessible photo preview dialog
│   │   └── ui/
│   │       ├── Accordion.tsx    # Expandable FAQ component
│   │       └── SocialIcons.tsx  # Brand vector icons
│   │
│   ├── data/
│   │   ├── puppies.ts           # 15 detailed puppy records
│   │   ├── happyFamilies.ts     # 8 polaroid memory items
│   │   ├── faqs.ts              # 9 verified FAQs
│   │   └── adoptionSteps.ts     # Step definitions for adoption modes
│   │
│   ├── types/
│   │   └── index.ts             # Strongly typed TypeScript interfaces
│   └── lib/
│       └── utils.ts             # Tailwind class merging utility
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 💻 Getting Started

### Prerequisites
- Node.js `18.18+` or `20+`
- npm `9+`

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd teddypups-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build

To test the optimized static build:

```bash
npm run build
```

Expected output:
```
✓ Compiled successfully
✓ Generating static pages (26/26)
```

To run the production server locally:
```bash
npm run start
```

---

## 🚀 Vercel Deployment Instructions

This project is optimized for deployment on [Vercel](https://vercel.com):

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete high-fidelity TeddyPups frontend clone"
   git push origin main
   ```
2. **Import into Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your GitHub repository.
   - Framework Preset: **Next.js** (detected automatically).
   - Build Command: `next build` (default).
   - Output Directory: `.next` (default).
   - No special environment variables are required for basic deployment.
3. **Click Deploy**:
   - Vercel will automatically build all 26 static pages and serve the media assets via its global edge network.

---

## 📋 Evaluation Checklist

- [x] **Overall visual design**: Matched day-to-night gradient atmosphere, borders, and shadows.
- [x] **Typography**: Paired Fraunces, Figtree, and Shantell Sans with exact optical weight variations.
- [x] **Section order & structure**: Exact 9-section homepage story.
- [x] **All 8 routes implemented**: `/`, `/puppies`, `/puppies/[slug]`, `/happy-families`, `/how-it-works`, `/faq`, `/contact`, `/gone-home`.
- [x] **Zero broken links/images**: All 122 media assets bundled locally.
- [x] **Interactive functionality**: Accordion, mobile drawer, media gallery, origin/breed filters, lightbox modal, and WhatsApp deep links.
- [x] **Type safety**: 100% TypeScript with zero lint or build errors.
- [x] **Production build**: Passed `npm run build` (26/26 pages statically pre-rendered).
