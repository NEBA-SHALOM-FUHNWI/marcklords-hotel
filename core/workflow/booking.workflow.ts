/**
 * ============================================================================
 * Booking Workflow
 * Project Atlas Core
 * ============================================================================
 */

export const bookingWorkflow = {
  Pending: ["Confirmed", "Cancelled"],

  Confirmed: [
    "Checked In",
    "Cancelled",
    "No Show",
  ],

  "Checked In": [
    "Checked Out",
  ],

  "Checked Out": [
    "Archived",
  ],

  Cancelled: [],

  "No Show": [],

  Archived: [],
} as const;