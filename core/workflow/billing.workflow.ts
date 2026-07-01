export const billingWorkflow = {
  Open: [
    "Partially Paid",
    "Paid",
  ],

  "Partially Paid": [
    "Paid",
  ],

  Paid: [
    "Closed",
  ],

  Closed: [],
} as const;