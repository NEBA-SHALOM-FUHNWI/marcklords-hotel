/**
 * ============================================================================
 * File: BookingWidget.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Premium homepage booking request widget.
 * Gives visitors a clear first step toward checking availability.
 * ============================================================================
 */

import Link from "next/link";
import { BedDouble, CalendarDays, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingField } from "./BookingField";

export function BookingWidget() {
  return (
    <div className= "w-full">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/40 bg-white/95 p-5 shadow-2xl backdrop-blur md:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
          <BookingField
            icon={CalendarDays}
            label="Check In"
            value="Select arrival"
          />

          <BookingField
            icon={CalendarDays}
            label="Check Out"
            value="Select departure"
          />

          <BookingField icon={Users} label="Guests" value="2 guests" />

          <BookingField icon={BedDouble} label="Room Type" value="Any room" />

          <Link href="/book" className="lg:min-w-[210px]">
            <Button className="h-full min-h-[88px] w-full rounded-2xl bg-[#1F5E4B] text-base font-semibold hover:bg-[#063D2E]">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}