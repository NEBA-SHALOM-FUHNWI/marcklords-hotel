/**
 * ============================================================================
 * File: room.ts
 * Project: Marcklords HMS
 *
 * Description:
 * Shared room types used across public website, booking system,
 * dashboard, housekeeping, and future backend/database models.
 * ============================================================================
 */

export type RoomStatus =
  | "Available"
  | "Occupied"
  | "Cleaning"
  | "Reserved"
  | "Maintenance";

export type HousekeepingStatus =
  | "Clean"
  | "Dirty"
  | "In Progress"
  | "Out of Service";

export interface HotelRoom {
  id: number;
  number: string;
  floor: number;
  type: "Standard" | "Deluxe" | "Executive Suite";
  price: number;
  capacity: number;
  status: RoomStatus;
  housekeepingStatus: HousekeepingStatus;
  smoking: boolean;
  active: boolean;
}