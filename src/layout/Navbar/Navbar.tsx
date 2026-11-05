"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf2eb] sm:h-12 sm:w-12">
            <img
              src="/images/image1.png"
              alt="Lanka Stayz Logo"
              width={40}
              height={40}
              className="h-9 w-9 cursor-pointer object-contain mix-blend-multiply sm:h-11 sm:w-11"
            />
          </span>

          <span className="text-base font-medium tracking-wide text-[#173f32] sm:text-xl">
            <b>LANKA STAYZ</b>
            <small className="mt-1 block text-[7px] font-semibold tracking-[1.5px] text-gray-500 sm:text-[9px] sm:tracking-[2px]">
              DISCOVER • STAY • EXPLORE
            </small>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          <Link
            href="/"
            className="text-sm font-bold text-[#1d563e] transition hover:text-[#c69b50]"
          >
            Home
          </Link>

          <Link
            href="/explore"
            className="text-sm font-bold text-gray-600 transition hover:text-[#1d563e]"
          >
            Explore Stays
          </Link>

          <Link
            href="/about"
            className="text-sm font-bold text-gray-600 transition hover:text-[#1d563e]"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="text-sm font-bold text-gray-600 transition hover:text-[#1d563e]"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/explore"
          className="hidden items-center gap-2 rounded-lg bg-[#1d563e] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#c69b50] lg:flex"
        >
          Find a stay
          <ArrowUpRight size={18} />
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-[#1d563e] transition hover:bg-gray-100 lg:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "h-screen opacity-100" : "h-screen opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="rounded-lg bg-[#eaf2eb] px-4 py-3 text-sm font-bold text-[#1d563e]"
          >
            Home
          </Link>

          <Link
            href="/explore"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-600 transition hover:bg-[#eaf2eb] hover:text-[#1d563e]"
          >
            Explore Stays
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-600 transition hover:bg-[#eaf2eb] hover:text-[#1d563e]"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-600 transition hover:bg-[#eaf2eb] hover:text-[#1d563e]"
          >
            Contact
          </Link>

          <Link
            href="/explore"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#1d563e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c69b50]"
          >
            Find a stay
            <ArrowUpRight size={18} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
