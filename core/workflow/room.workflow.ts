export const roomWorkflow = {
  Available: [
    "Reserved",
    "Maintenance",
  ],

  Reserved: [
    "Occupied",
    "Available",
  ],

  Occupied: [
    "Dirty",
  ],

  Dirty: [
    "Cleaning",
  ],

  Cleaning: [
    "Available",
    "Maintenance",
  ],

  Maintenance: [
    "Available",
  ],
} as const;