/**
 * ============================================================================
 * File: BookingInformation.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Displays reservation details for a selected booking.
 * ============================================================================
 */

import { CalendarDays, Hotel, Tag } from "lucide-react";
import { Booking } from "@/types";

type BookingInformationProps = {
  booking: Booking;
};

export function BookingInformation({ booking }: BookingInformationProps) {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Reservation
      </p>

      <h2 className="mt-2 font-heading text-2xl font-bold text-[#1F5E4B]">
        Booking Information
      </h2>

      <div className="mt-6 space-y-5">
        <div className="flex items-center gap-4">
          <Hotel className="h-5 w-5 text-[#C9A227]" />
          <div>
            <p className="text-sm text-[#777]">Room</p>
            <p className="font-semibold text-[#333]">
              {booking.room} · Room {booking.roomNumber}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <CalendarDays className="h-5 w-5 text-[#C9A227]" />
          <div>
            <p className="text-sm text-[#777]">Stay Dates</p>
            <p className="font-semibold text-[#333]">
              {booking.checkIn} to {booking.checkOut}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Tag className="h-5 w-5 text-[#C9A227]" />
          <div>
            <p className="text-sm text-[#777]">Source</p>
            <p className="font-semibold text-[#333]">{booking.source}</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-[#777]">Status</p>
          <span className="mt-2 inline-flex rounded-full bg-[#1F5E4B]/10 px-4 py-2 text-sm font-semibold text-[#1F5E4B]">
            {booking.status}
          </span>
        </div>
      </div>
    </div>
  );
}