/**
 * ============================================================================
 * File: guest.ts
 * Project: Marcklords HMS
 *
 * Description:
 * Shared guest type used throughout the Hotel Management System.
 * ============================================================================
 */

export type GuestStatus =
  | "Reserved"
  | "Checked In"
  | "Checked Out"
  | "Cancelled";

export type GuestIdType =
  | "National ID"
  | "Passport"
  | "Driver's License"
  | "Residence Permit"
  | "Other";

export interface Guest {
  code: string;
  
  name: string;
  phone: string;
  email?: string;
  nationality: string;
  idType: GuestIdType;
  idNumber: string;
  idIssuedBy?: string;
  idExpiryDate?: string;
  id: number;
  address?: string;
  vehiclePlate?: string;
  status: GuestStatus;
}