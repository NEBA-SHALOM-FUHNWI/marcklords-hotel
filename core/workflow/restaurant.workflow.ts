export const restaurantWorkflow = {
  Pending: [
    "Preparing",
    "Cancelled",
  ],

  Preparing: [
    "Ready",
  ],

  Ready: [
    "Served",
  ],

  Served: [
    "Closed",
  ],

  Cancelled: [],

  Closed: [],
} as const;