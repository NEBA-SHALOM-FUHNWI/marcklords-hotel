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

/**
 * Displays the main navigation bar for the public website.
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <Container className="flex h-24 items-center justify-between">
        <Logo showTagline={false} />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-[#333333] transition hover:text-[#1F5E4B]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
         <Link href="/book">
  <Button className="rounded-full bg-[#1F5E4B] px-6 hover:bg-[#063D2E]">
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