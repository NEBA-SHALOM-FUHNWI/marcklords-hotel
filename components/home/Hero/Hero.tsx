/**
 * ============================================================================
 * File: Hero.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Premium homepage hero section featuring the main hotel image,
 * gradient overlay, hero content, and integrated booking widget.
 * ============================================================================
 */

import Image from "next/image";

import { BookingWidget } from "@/components/home/Booking/BookingWidget";
import { Container } from "@/components/shared/Container";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#063D2E]">
      <div className="relative min-h-[760px]">
        <Image
          src="/images/hero/hero-main.jpeg"
          alt="Marcklords Hotel"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#063D2E]/95 via-[#063D2E]/75 to-black/40" />
        <div className="absolute inset-0 bg-black/20" />

        <Container className="relative z-10 flex min-h-[760px] items-center pb-32 pt-24">
          <HeroContent />
        </Container>
      </div>

      <Container className="relative z-20 -mt-28 pb-16">
        <BookingWidget />
      </Container>
    </section>
  );
}