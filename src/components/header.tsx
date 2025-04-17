"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/usrad-logo-trans-yell-blue.png"
              alt="USRadiology Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-[#0E1B2A] font-bold text-lg">USRadiology</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-[#0E1B2A]">
          <Link href="#how-it-works" className="hover:text-[#E6C378] transition">How It Works</Link>
          <Link href="#pricing" className="hover:text-[#E6C378] transition">Pricing</Link>
          <Link href="#faq" className="hover:text-[#E6C378] transition">FAQ</Link>
          <Link href="#contact" className="hover:text-[#E6C378] transition">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#0E1B2A]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 text-sm font-medium text-[#0E1B2A] bg-white border-t border-gray-100">
          <Link href="#how-it-works" onClick={() => setOpen(false)}>How It Works</Link>
          <Link href="#pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="#faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
