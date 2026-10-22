import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, TikTokIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="tp-footer relative border-t-4 border-[#3d1f11] bg-[#24130b] pb-[calc(var(--bar-h)+2.5rem)] pt-16 text-[#fffdf8] md:pb-12 md:pt-20">
      <div className="gutter mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand info */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative size-12 overflow-hidden rounded-full border-2 border-[#fffdf8]/20 bg-[#fff8ea]">
                <Image
                  src="/brand/logo.png"
                  alt="TeddyPups Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="font-plush text-2xl font-extrabold text-[#fffdf8]">
                  TeddyPups
                </span>
                <span className="block text-xs font-semibold uppercase tracking-widest text-[#f2be6b]">
                  U.A.E. · Downtown Dubai
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#fffdf8]/75">
              Teddy bear and teacup puppies raised with gentle hands and open hearts.
              Meet local puppies in our Downtown Dubai showroom or reserve a rare teacup breed imported for you.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/teddypups.worldwide/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-[#fffdf8]/15 bg-[#fffdf8]/5 text-[#fffdf8] transition-colors hover:bg-[#fffdf8]/15"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="https://www.tiktok.com/@teddypupsuae"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-[#fffdf8]/15 bg-[#fffdf8]/5 text-[#fffdf8] transition-colors hover:bg-[#fffdf8]/15"
                aria-label="TikTok"
              >
                <TikTokIcon className="size-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61567496944539"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-[#fffdf8]/15 bg-[#fffdf8]/5 text-[#fffdf8] transition-colors hover:bg-[#fffdf8]/15"
                aria-label="Facebook"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href="https://wa.me/919737372040?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-[#fffdf8]/15 bg-[#fffdf8]/5 text-[#fffdf8] transition-colors hover:bg-[#fffdf8]/15"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h2 className="font-plush text-lg font-bold text-[#f2be6b]">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold text-[#fffdf8]/80">
              <li>
                <Link href="/puppies" className="transition-colors hover:text-[#fffdf8]">
                  Available puppies
                </Link>
              </li>
              <li>
                <Link href="/happy-families" className="transition-colors hover:text-[#fffdf8]">
                  Happy families
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="transition-colors hover:text-[#fffdf8]">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-[#fffdf8]">
                  Questions & answers
                </Link>
              </li>
              <li>
                <Link href="/gone-home" className="transition-colors hover:text-[#fffdf8]">
                  Gone home
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Showroom */}
          <div className="lg:col-span-3">
            <h2 className="font-plush text-lg font-bold text-[#f2be6b]">
              Say hello
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#fffdf8]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#f2be6b]" />
                <span>Downtown Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-[#f2be6b]" />
                <a href="tel:+919737372040" className="hover:text-[#fffdf8]">
                  +91 9737372040
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="size-4 shrink-0 text-[#f2be6b]" />
                <a
                  href="https://wa.me/919737372040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#fffdf8]"
                >
                  WhatsApp: +91 9737372040
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-[#f2be6b]" />
                <a href="mailto:info@teddypups.ae" className="hover:text-[#fffdf8]">
                  info@teddypups.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 border-t border-[#fffdf8]/10 pt-8 text-center text-xs text-[#fffdf8]/50 sm:flex sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} TeddyPups U.A.E. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            All puppies are vaccinated, microchipped & accompanied by certified veterinary health records.
          </p>
        </div>
      </div>
    </footer>
  );
}
