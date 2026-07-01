/**
 * ============================================================================
 * File: billing.ts
 * Project: Marcklords HMS
 *
 * Description:
 * Mock billing ledger data for guest account charges and payments.
 * ============================================================================
 */

export const guestLedgers = [
  {
    id: 1,
    ledgerCode: "LED-2026-000001",
    guest: "John M.",
    bookingCode: "BK-2026-000001",
    roomNumber: "203",
    charges: [
      {
        id: 1,
        type: "Accommodation",
        department: "Reception",
        description: "Deluxe Room, 3 nights",
        amount: 165000,
      },
      {
        id: 2,
        type: "Restaurant",
        department: "Restaurant",
        description: "Room service dinner",
        amount: 18500,
      },
    ],
    payments: [
      {
        id: 1,
        method: "Cash",
        amount: 100000,
      },
    ],
  },
  {
    id: 2,
    ledgerCode: "LED-2026-000002",
    guest: "Grace N.",
    bookingCode: "BK-2026-000002",
    roomNumber: "305",
    charges: [
      {
        id: 1,
        type: "Accommodation",
        department: "Reception",
        description: "Executive Suite, 2 nights",
        amount: 170000,
      },
    ],
    payments: [],
  },
];