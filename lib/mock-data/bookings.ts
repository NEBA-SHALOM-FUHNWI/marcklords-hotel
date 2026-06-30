/**
 * ============================================================================
 * File: bookings.ts
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Mock booking records for dashboard development.
 * ============================================================================
 */
import { Booking } from "@/types/booking";

export const bookings: Booking[] = [
  {
    id: 1001,
    guest: "John M.",
    room: "Deluxe Room",
    roomNumber: "203",
    checkIn: "2026-06-29",
    checkOut: "2026-07-02",
    status: "Confirmed",
    source: "Online Website",
  },
  {
    id: 1002,
    guest: "Grace N.",
    room: "Executive Suite",
    roomNumber: "305",
    checkIn: "2026-06-30",
    checkOut: "2026-07-03",
    status: "Pending",
    source: "Walk-in",
  },
  {
    id: 1003,
    guest: "Peter E.",
    room: "Standard Room",
    roomNumber: "108",
    checkIn: "2026-07-01",
    checkOut: "2026-07-05",
    status: "Confirmed",
    source: "Phone",
  },
  {
    id: 1004,
    guest: "Sarah K.",
    room: "Deluxe Room",
    roomNumber: "204",
    checkIn: "2026-07-02",
    checkOut: "2026-07-04",
    status: "Checked In",
    source: "WhatsApp",
  },
];