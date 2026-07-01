export const housekeepingWorkflow = {
  Dirty: [
    "In Progress",
  ],

  "In Progress": [
    "Clean",
  ],

  Clean: [],
} as const;