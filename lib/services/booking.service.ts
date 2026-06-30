/**
 * ============================================================================
 * File: booking.service.ts
 * Project: Marcklords HMS
 *
 * Description:
 * Booking service containing workflow logic for reservations.
 * Components should ask this service which booking actions are allowed.
 * ============================================================================
 */

import { Booking } from "@/types";

export const bookingService = {
  canConfirm(booking: Booking): boolean {
    return booking.status === "Pending";
  },

  canCheckIn(booking: Booking): boolean {
    return booking.status === "Confirmed";
  },

  canCheckOut(booking: Booking): boolean {
    return booking.status === "Checked In";
  },

  canCancel(booking: Booking): boolean {
    return booking.status === "Pending" || booking.status === "Confirmed";
  },

  canPrint(): boolean {
    return true;
  },
};