/**
 * ============================================================================
 * File: BookingWidget.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Homepage booking request widget.
 * Allows visitors to quickly begin a booking request from the homepage.
 * ============================================================================
 */

import Link from "next/link";
import { CalendarDays, Users, BedDouble } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Displays a simple booking form preview on the homepage.
 */
export function BookingWidget() {
  return (
    <div className="relative z-20 -mt-12">
      <div className="mx-auto grid max-w-6xl gap-4 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-4">
        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Check-in
          </label>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4 text-[#333333]">
            <CalendarDays className="h-5 w-5 text-[#C9A227]" />
            <span>Select date</span>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Check-out
          </label>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4 text-[#333333]">
            <CalendarDays className="h-5 w-5 text-[#C9A227]" />
            <span>Select date</span>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Guests
          </label>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4 text-[#333333]">
            <Users className="h-5 w-5 text-[#C9A227]" />
            <span>2 guests</span>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Room
          </label>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4 text-[#333333]">
            <BedDouble className="h-5 w-5 text-[#C9A227]" />
            <span>Any room</span>
          </div>

          <Link href="/book">
            <Button className="mt-4 h-12 w-full rounded-2xl bg-[#1F5E4B] hover:bg-[#063D2E]">
              Request Booking
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}