/**
 * ============================================================================
 * File: RoomBookingCard.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Sticky booking card displayed on room details pages.
 * Keeps the booking action visible while guests review room information.
 * ============================================================================
 */

import Link from "next/link";
import { BedDouble, Phone, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

type RoomBookingCardProps = {
  name: string;
  price: string;
  guests: string;
  bed: string;
  rating: string;
  reviews: string;
};

export function RoomBookingCard({
  name,
  price,
  guests,
  bed,
  rating,
  reviews,
}: RoomBookingCardProps) {
  return (
    <aside className="sticky top-28 rounded-[2rem] bg-white p-6 shadow-xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Reserve this room
      </p>

      <h3 className="mt-3 font-heading text-3xl font-bold text-[#1F5E4B]">
        {name}
      </h3>

      <div className="mt-4 flex items-center gap-2 text-sm text-[#555]">
        <Star className="h-4 w-4 fill-[#C9A227] text-[#C9A227]" />
        <span className="font-semibold text-[#333]">{rating}</span>
        <span>({reviews})</span>
      </div>

      <div className="mt-6 rounded-2xl bg-[#F8F7F3] p-5">
        <p className="text-sm text-[#555]">Starting from</p>
        <p className="mt-1 font-heading text-3xl font-bold text-[#1F5E4B]">
          {price}
        </p>
      </div>

      <div className="mt-6 space-y-4 text-sm text-[#333]">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-[#C9A227]" />
          <span>{guests}</span>
        </div>

        <div className="flex items-center gap-3">
          <BedDouble className="h-5 w-5 text-[#C9A227]" />
          <span>{bed}</span>
        </div>
      </div>

      <Link href="/book">
        <Button className="mt-8 h-12 w-full rounded-full bg-[#1F5E4B] hover:bg-[#063D2E]">
          Book This Room
        </Button>
      </Link>

      <a href={`tel:${SITE.phone}`}>
        <Button
          variant="outline"
          className="mt-3 h-12 w-full rounded-full border-[#1F5E4B] text-[#1F5E4B] hover:bg-[#1F5E4B] hover:text-white"
        >
          <Phone className="mr-2 h-4 w-4" />
          Call Hotel
        </Button>
      </a>
    </aside>
  );
}