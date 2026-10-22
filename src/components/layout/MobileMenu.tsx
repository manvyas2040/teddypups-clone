"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navLinks = [
    { href: "/puppies", label: "Available puppies" },
    { href: "/happy-families", label: "Happy families" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Visit & contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#2a170e]/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-[#fffdf8] p-6 shadow-2xl sm:max-w-md"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between border-b border-[#2a170e]/10 pb-4">
              <span className="font-plush text-xl font-bold tracking-tight text-[#2a170e]">
                TeddyPups <span className="text-sm font-normal text-[#a24a1a]">U.A.E.</span>
              </span>
              <button
                type="button"
                onClick={onClose}
                className="flex size-10 items-center justify-center rounded-full bg-[#2a170e]/5 text-[#2a170e] transition-colors hover:bg-[#2a170e]/10"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Nav list */}
            <nav className="mt-8 flex-1 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-bold text-[#2a170e] transition-all hover:bg-[#c2622b]/10 hover:text-[#a24a1a]"
                >
                  <span>{link.label}</span>
                  <span className="text-xl">🐾</span>
                </Link>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="border-t border-[#2a170e]/10 pt-6">
              <a
                href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full justify-center text-center font-bold"
              >
                <MessageCircle className="size-5" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="mt-4 flex items-center justify-between px-2 text-sm text-[#5a3a28]">
                <a
                  href="tel:+971541676733"
                  className="flex items-center gap-1.5 font-semibold transition-colors hover:text-[#a24a1a]"
                >
                  <Phone className="size-4" />
                  <span>+971 54 167 6733</span>
                </a>
                <a
                  href="https://www.instagram.com/teddypups.worldwide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-semibold transition-colors hover:text-[#a24a1a]"
                >
                  <InstagramIcon className="size-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
