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
import Image from "next/image";

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

          <div className="grid gap-5">
  <div className="relative h-80 overflow-hidden rounded-[2rem] shadow-xl">
    <Image
      src="/images/about/hotel-exterior.jpg"
      alt="Marcklords Hotel exterior"
      fill
      className="object-cover"
    />
  </div>

  <div className="relative -mt-20 ml-auto h-56 w-4/5 overflow-hidden rounded-[2rem] border-8 border-[#F8F7F3] shadow-xl">
    <Image
      src="/images/about/reception.jpg"
      alt="Marcklords Hotel reception"
      fill
      className="object-cover"
    />
  </div>
</div>
        </div>
      </Container>
    </section>
  );
}