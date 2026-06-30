/**
 * ============================================================================
 * Booking shared type.
 * ============================================================================
 */

export type BookingStatus =
  | "Pending"
  | "Confirmed"
  | "Checked In"
  | "Checked Out"
  | "Cancelled";

export type BookingSource =
  | "Online Website"
  | "Walk-in"
  | "Phone"
  | "WhatsApp"
  | "Corporate";

export interface Booking {
  id: number;
  guest: string;
  room: string;
  roomNumber: string;
  checkIn: string;
  checkOut: string;
  status: BookingStatus;
  source: BookingSource;
}