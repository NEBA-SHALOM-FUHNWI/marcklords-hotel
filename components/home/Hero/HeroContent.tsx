/**
 * ============================================================================
 * File: HeroContent.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Premium text and call-to-action content displayed inside the homepage hero.
 * ============================================================================
 */

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  const trustPoints = [
    "Comfortable rooms",
    "Restaurant service",
    "Conference facilities",
  ];

  return (
    <div className="max-w-3xl">
      <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227] backdrop-blur">
        {SITE.tagline}
      </p>

      <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-7xl">
        Comfort, dining, and hospitality in the heart of Kumba.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
        Discover Marcklords Hotel, a welcoming destination for business travelers,
        families, event guests, and visitors seeking a comfortable stay.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link href="/book">
          <Button className="h-12 rounded-full bg-[#C9A227] px-8 text-[#063D2E] hover:bg-[#b8921f]">
            Book Your Stay
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        <Link href="/rooms">
          <Button
            variant="outline"
            className="h-12 rounded-full border-white bg-white/10 px-8 text-white backdrop-blur hover:bg-white hover:text-[#063D2E]"
          >
            Explore Rooms
          </Button>
        </Link>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        {trustPoints.map((point) => (
          <div
            key={point}
            className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur"
          >
            <CheckCircle2 className="h-4 w-4 text-[#C9A227]" />
            {point}
          </div>
        ))}
      </div>
      <HeroStats />
    </div>
  );
}