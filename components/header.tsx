"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 bg-gray-300 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        {/* Mobile: Burger left */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          <span
            className={`block w-6 h-px bg-foreground transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>

        {/* Desktop: Title left */}
        <Link
          href="/"
          className="hidden md:block font-serif text-3xl tracking-wide text-foreground"
        >
          Dr. Maya Reynolds, PsyD

        </Link>

        {/* Mobile: Title right */}
        <Link
          href="/"
          className="md:hidden font-serif text-xl tracking-wide text-foreground"
        >
          Dr. Maya Reynolds, PsyD

        </Link>

        {/* Desktop nav right */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] bg-background z-40">
          <nav className="flex flex-col items-start px-6 pt-10 gap-6">
            <Link
              href="#about"
              className="text-2xl font-serif text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-2xl font-serif text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
