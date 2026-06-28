"use client";
/**
 * ============================================================================
 * File: Navbar.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Main website navigation component.
 * Displays the hotel logo, desktop navigation links, and booking call-to-action.
 * Mobile navigation will be improved later when we build responsive behavior.
 * ============================================================================
 */

import Link from "next/link";
import { Menu } from "lucide-react";
import { NAVIGATION } from "@/lib/constants";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/hotel/Logo";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

/**
 * Displays the main navigation bar for the public website.
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
<header
  className={`sticky top-0 z-50 border-b transition-all duration-300 ${
    isScrolled
      ? "border-black/5 bg-white/95 shadow-lg backdrop-blur-xl"
      : "border-white/10 bg-white/80 backdrop-blur-xl"
  }`}
>
<Container
  className={`flex items-center justify-between transition-all duration-300 ${
    isScrolled ? "h-16" : "h-20"
  }`}
>        <Logo showTagline={false} />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
className="relative text-sm font-semibold text-[#333333] transition-all duration-300 hover:text-[#1F5E4B] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full"            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
         <Link href="/book">
  <Button className="rounded-full bg-[#1F5E4B] px-8 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#063D2E] hover:shadow-xl">
    Book Now
  </Button>
</Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-[#1F5E4B] lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>
    </header>
  );
}