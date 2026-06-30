/**
 * ============================================================================
 * File: GuestInformation.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Displays guest information for a selected booking.
 * ============================================================================
 */

import { Mail, Phone, User } from "lucide-react";
import { Booking } from "@/types";

type GuestInformationProps = {
  booking: Booking;
};

export function GuestInformation({
  booking,
}: GuestInformationProps) {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Guest
      </p>

      <h2 className="mt-2 font-heading text-2xl font-bold text-[#1F5E4B]">
        Guest Information
      </h2>

      <div className="mt-6 space-y-5">
        <div className="flex items-center gap-4">
          <User className="h-5 w-5 text-[#C9A227]" />

          <div>
            <p className="text-sm text-[#777]">
              Guest Name
            </p>

            <p className="font-semibold text-[#333]">
              {booking.guest}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="h-5 w-5 text-[#C9A227]" />

          <div>
            <p className="text-sm text-[#777]">
              Phone
            </p>

            <p className="font-semibold text-[#333]">
              +237 6XX XXX XXX
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="h-5 w-5 text-[#C9A227]" />

          <div>
            <p className="text-sm text-[#777]">
              Email
            </p>

            <p className="font-semibold text-[#333]">
              guest@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}