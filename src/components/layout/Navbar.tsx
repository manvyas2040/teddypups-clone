"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, MessageCircle } from "lucide-react";
import { ScallopedHem } from "./ScallopedHem";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/puppies", label: "Available puppies" },
    { href: "/happy-families", label: "Happy families" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Visit & contact" },
  ];

  return (
    <>
      <header
        id="site-header"
        data-scrolled={isScrolled ? "true" : "false"}
        className="tp-header fixed inset-x-0 top-0 z-50 transition-all duration-300"
      >
        <div className="gutter mx-auto flex h-[var(--header-h)] max-w-7xl items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-transform hover:scale-[1.02]"
            aria-label="TeddyPups U.A.E. Home"
          >
            <div className="relative size-10 overflow-hidden rounded-full border-2 border-[#2a170e]/20 bg-[#fff8ea] shadow-sm sm:size-11">
              <Image
                src="/brand/logo.png"
                alt="TeddyPups Logo"
                fill
                sizes="48px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-plush text-xl font-extrabold tracking-tight text-[#2a170e] sm:text-2xl">
                TeddyPups
              </span>
              <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#a24a1a]">
                Downtown Dubai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="tp-nav-link text-[0.95rem]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action / Mobile Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919737372040?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp hidden !min-h-[2.6rem] !px-4 !py-1.5 text-sm font-bold shadow-sm sm:inline-flex"
            >
              <MessageCircle className="size-4" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex size-10 items-center justify-center rounded-full border border-[#2a170e]/15 bg-[#fff8ea] text-[#2a170e] transition-all hover:bg-[#2a170e]/5 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>

        {/* Stitched hem under navbar */}
        <ScallopedHem />
      </header>

      {/* Slide-out mobile menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
