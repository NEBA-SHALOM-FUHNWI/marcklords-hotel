/**
 * ============================================================================
 * File: HeroContent.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Text and call-to-action content displayed inside the homepage hero section.
 * ============================================================================
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

/**
 * Displays the main homepage hero headline, supporting text, and actions.
 */
export function HeroContent() {
  return (
    <div className="max-w-2xl">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#C9A227]">
        {SITE.tagline}
      </p>

      <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-6xl">
        Welcome to Marcklords Hotel, Comfort in the Heart of Kumba
      </h1>

      <p className="mt-6 text-lg leading-8 text-white/80">
        Experience comfortable accommodation, quality dining, and welcoming
        hospitality designed for business travelers, families, and event guests.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link href="/book">
          <Button className="h-12 rounded-full bg-[#C9A227] px-8 text-[#063D2E] hover:bg-[#b8921f]">
            Book Your Stay
          </Button>
        </Link>

        <Link href="/rooms">
          <Button
            variant="outline"
            className="h-12 rounded-full border-white bg-transparent px-8 text-white hover:bg-white hover:text-[#063D2E]"
          >
            Explore Rooms
          </Button>
        </Link>
      </div>
    </div>
  );
}