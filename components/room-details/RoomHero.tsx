/**
 * ============================================================================
 * File: RoomHero.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Hero section for individual room details pages.
 * Displays the room image, name, rating, and short description.
 * ============================================================================
 */

import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/shared/Container";

type RoomHeroProps = {
  name: string;
  shortDescription: string;
  image: string;
  rating: string;
  reviews: string;
};

export function RoomHero({
  name,
  shortDescription,
  image,
  rating,
  reviews,
}: RoomHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[560px] overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#063D2E]/90 via-[#063D2E]/65 to-black/30" />

      <Container className="relative z-10 flex h-full items-center">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            Room Details
          </p>

          <h1 className="font-heading text-5xl font-bold md:text-7xl">
            {name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            {shortDescription}
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur">
            <Star className="h-5 w-5 fill-[#C9A227] text-[#C9A227]" />
            <span className="font-semibold">{rating}</span>
            <span className="text-white/70">({reviews})</span>
          </div>
        </div>
      </Container>
    </section>
  );
}