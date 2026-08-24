"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "../data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <nav className={`cozy-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="mx-auto flex items-center justify-between px-8 md:px-12 lg:px-20 py-4">
        <Link
  href="/"
  className="flex items-center gap-2"
>
  <img
    src="/images/logo.png"
    alt="Logo"
    className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
  />

  <span className="display text-lg sm:text-xl font-semibold text-[var(--ink)]">
    {PROFILE.name}
    
  </span>
</Link>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.path}
              href={l.path}
              className={`cozy-navlink ${isActive(l.path) ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-[var(--ink)]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className="md:hidden mobile-panel overflow-hidden border-t border-[var(--paper-line)]"
        style={{
          maxHeight: menuOpen ? "360px" : "0px",
          opacity: menuOpen ? 1 : 0,
          backgroundColor: "rgba(234,244,251,0.98)",
        }}
      >
        <div className="flex flex-col px-5 py-3">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.path}
              href={l.path}
              onClick={() => setMenuOpen(false)}
              className={`text-left py-3 border-b border-[var(--paper-line)] font-medium ${
                isActive(l.path) ? "text-[var(--ink)]" : "text-[var(--ink-soft)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
