/**
 * ============================================================================
 * File: RoomCard.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Reusable room card used to display room information on the homepage
 * and future rooms page.
 * ============================================================================
 */

import Link from "next/link";
import { BedDouble, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

type RoomCardProps = {
  name: string;
  description: string;
  price: string;
  guests: string;
};

/**
 * Displays a single room preview card.
 */
export function RoomCard({ name, description, price, guests }: RoomCardProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="h-56 bg-[#063D2E]" />

      <div className="p-6">
        <h3 className="font-heading text-2xl font-bold text-[#1F5E4B]">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#555]">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm text-[#333333]">
          <span className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#C9A227]" />
            {guests}
          </span>

          <span className="flex items-center gap-2 font-semibold text-[#1F5E4B]">
            <BedDouble className="h-4 w-4 text-[#C9A227]" />
            {price}
          </span>
        </div>

        <Link href="/rooms">
          <Button className="mt-6 w-full rounded-full bg-[#1F5E4B] hover:bg-[#063D2E]">
            View Room
          </Button>
        </Link>
      </div>
    </div>
  );
}