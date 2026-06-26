/**
 * ============================================================================
 * File: Hero.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Homepage hero section. This is the first major visual section visitors see.
 * It introduces the hotel and directs users toward booking or room discovery.
 * ============================================================================
 */

import { Container } from "@/components/shared/Container";
import { HeroContent } from "./HeroContent";

/**
 * Displays the homepage hero section.
 */
export function Hero() {
  return (
    <section className="relative bg-[#063D2E] py-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,61,46,0.95),rgba(6,61,46,0.75))]" />

      <Container className="relative z-10">
        <HeroContent />
      </Container>
    </section>
  );
}