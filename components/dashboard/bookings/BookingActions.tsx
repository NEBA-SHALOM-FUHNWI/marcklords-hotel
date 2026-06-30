/**
 * ============================================================================
 * File: BookingActions.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Displays available booking workflow actions for staff.
 * Later, these buttons will connect to backend booking actions.
 * ============================================================================
 */

import {
  CheckCircle2,
  DoorOpen,
  Printer,
  RefreshCcw,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Booking } from "@/types";
import { bookingService } from "@/lib/services/booking.service";

type BookingActionsProps = {
  booking: Booking;
};

export function BookingActions({ booking }: BookingActionsProps) {
const canConfirm = bookingService.canConfirm(booking);
const canCheckIn = bookingService.canCheckIn(booking);
const canCheckOut = bookingService.canCheckOut(booking);
const canCancel = bookingService.canCancel(booking);
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Workflow
      </p>

      <h2 className="mt-2 font-heading text-2xl font-bold text-[#1F5E4B]">
        Booking Actions
      </h2>

      <p className="mt-3 text-sm text-[#666]">
        Current status:{" "}
        <span className="font-semibold text-[#1F5E4B]">
          {booking.status}
        </span>
      </p>

      <div className="mt-6 grid gap-3">
        {canConfirm && (
          <Button className="justify-start rounded-full bg-[#1F5E4B] hover:bg-[#063D2E]">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Confirm Booking
          </Button>
        )}
        {canCheckIn && (
          <Button className="justify-start rounded-full bg-[#1F5E4B] hover:bg-[#063D2E]">
            <DoorOpen className="mr-2 h-4 w-4" />
            Check In Guest
          </Button>
        )}
        {canCheckOut && (
          <Button className="justify-start rounded-full bg-[#1F5E4B] hover:bg-[#063D2E]">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Check Out Guest
          </Button>
        )}

      
        <Button
          variant="outline"
          className="justify-start rounded-full border-[#1F5E4B] text-[#1F5E4B] hover:bg-[#1F5E4B] hover:text-white"
        >
          <Printer className="mr-2 h-4 w-4" />
          Print Booking
        </Button>
    
        {canCancel && (
        <Button
          variant="outline"
          className="justify-start rounded-full border-red-500 text-red-600 hover:bg-red-600 hover:text-white"
        >
          <XCircle className="mr-2 h-4 w-4" />
          Cancel Booking
        </Button>
        )}
      </div>
    </div>
  );
}