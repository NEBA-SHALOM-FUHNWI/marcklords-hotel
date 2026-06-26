/**
 * ============================================================================
 * File: Logo.tsx
 * Project: Marcklords Hotel
 *
 * Description:
 * Reusable hotel logo component used across the website.
 * It keeps the hotel brand consistent in the navbar, footer,
 * dashboard, and future authentication pages.
 * ============================================================================
 */

import Link from "next/link";
import { Crown } from "lucide-react";
import { SITE } from "@/lib/constants";

type LogoProps = {
  variant?: "light" | "dark";
  showTagline?: boolean;
};

/**
 * Displays the Marcklords Hotel brand mark, name, and optional tagline.
 */
export function Logo({ variant = "dark", showTagline = true }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[#1F5E4B]";
  const mutedTextColor =
    variant === "light" ? "text-white/80" : "text-[#C9A227]";

  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A227] text-[#C9A227]">
        <Crown className="h-7 w-7" />
      </div>

      <div className="leading-none">
        <p
          className={`font-heading text-2xl font-bold tracking-wide ${textColor}`}
        >
          MARCKLORDS
        </p>
        <p className={`text-sm font-semibold tracking-[0.35em] ${textColor}`}>
          HOTEL
        </p>

        {showTagline && (
          <p className={`mt-1 text-xs italic ${mutedTextColor}`}>
            {SITE.tagline}
          </p>
        )}
      </div>
    </Link>
  );
}