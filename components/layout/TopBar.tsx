/**
 * ============================================================================
 * File: TopBar.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Reusable top contact bar displayed above the main navigation.
 * It gives visitors quick access to phone, email, location, and social links.
 * ============================================================================
 */

import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Container } from "@/components/shared/Container";

/**
 * Displays hotel contact information at the very top of the website.
 */
export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-[#063D2E] py-3 text-sm text-white/80 lg:block">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 transition hover:text-[#C9A227]"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 transition hover:text-[#C9A227]"
          >
            <Mail className="h-4 w-4" />
            {SITE.email}
          </a>

          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {SITE.address}
          </p>
        </div>

        <p className="font-medium text-[#C9A227]">
          {SITE.tagline}
        </p>
      </Container>
    </div>
  );
}