/**
 * ============================================================================
 * File: AboutPreview.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Homepage preview section introducing the hotel and linking visitors
 * to the full About page.
 * ============================================================================
 */

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";

/**
 * Displays a short introduction to Marcklords Hotel on the homepage.
 */
export function AboutPreview() {
  const highlights = [
    "Comfortable accommodation in Kumba",
    "Restaurant and dining services",
    "Conference and event facilities",
    "Warm and professional hospitality",
  ];

  return (
    <section className="bg-[#F8F7F3] py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              title="A Welcoming Stay in the Heart of Kumba"
              subtitle="Marcklords Hotel offers a comfortable and professional hospitality experience for travelers, families, business guests, and event visitors."
            />

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#333333]">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#C9A227]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/about">
              <Button className="mt-8 rounded-full bg-[#1F5E4B] px-8 hover:bg-[#063D2E]">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <div className="rounded-[1.5rem] bg-[#063D2E] p-10 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
                Hospitality Promise
              </p>

              <h3 className="mt-4 font-heading text-4xl font-bold">
                Your Comfort, Our Commitment.
              </h3>

              <p className="mt-5 leading-8 text-white/75">
                Our digital experience is designed to help guests discover the
                hotel, explore services, and request bookings with confidence.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}