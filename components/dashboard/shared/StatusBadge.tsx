/**
 * ============================================================================
 * File: StatusBadge.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Reusable status badge for dashboard tables.
 * ============================================================================
 */

type StatusBadgeProps = {
  status: string;
};

const statusStyles: Record<string, string> = {
  Available: "bg-green-100 text-green-700",
  Unavailable: "bg-red-100 text-red-700",
  Occupied: "bg-red-100 text-red-700",
  Cleaning: "bg-yellow-100 text-yellow-700",
  Reserved: "bg-blue-100 text-blue-700",
  Maintenance: "bg-gray-100 text-gray-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Confirmed: "bg-green-100 text-green-700",
  Dirty: "bg-orange-100 text-orange-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  "Out of Service": "bg-gray-100 text-gray-700",
  "Checked In": "bg-blue-100 text-blue-700",
  "Checked Out": "bg-gray-100 text-gray-700",
  Cancelled: "bg-red-100 text-red-700",
  Inactive: "bg-gray-100 text-gray-700",
  Preparing: "bg-yellow-100 text-yellow-700",
  Completed: "bg-green-100 text-green-700",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        statusStyles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}