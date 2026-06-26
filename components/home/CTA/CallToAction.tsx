/**
 * ============================================================================
 * File: CallToAction.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Final homepage call-to-action section encouraging visitors
 * to request a booking or contact the hotel.
 * ============================================================================
 */

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { SITE } from "@/lib/constants";

/**
 * Displays the final homepage booking call-to-action.
 */
export function CallToAction() {
  return (
    <section className="bg-[#F8F7F3] py-24">
      <Container>
        <div className="rounded-[2rem] bg-[#063D2E] p-10 text-center text-white md:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C9A227]">
            Ready for your next stay?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight md:text-5xl">
            Experience comfort, hospitality, and convenience at Marcklords Hotel.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/75">
            Whether you are visiting Kumba for business, family, dining, or an
            event, our team is ready to welcome you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/book">
              <Button className="h-12 rounded-full bg-[#C9A227] px-8 text-[#063D2E] hover:bg-[#b8921f]">
                Request Booking
              </Button>
            </Link>

            <a href={`tel:${SITE.phone}`}>
              <Button
                variant="outline"
                className="h-12 rounded-full border-white bg-transparent px-8 text-white hover:bg-white hover:text-[#063D2E]"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Hotel
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}