/**
 * ============================================================================
 * File: DashboardStatCard.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Reusable statistic card for the dashboard overview.
 * Displays important hotel metrics such as bookings, guests, rooms, and revenue.
 * ============================================================================
 */

import { LucideIcon } from "lucide-react";

type DashboardStatCardProps = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

export function DashboardStatCard({
  title,
  value,
  description,
  icon: Icon,
}: DashboardStatCardProps) {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#777]">{title}</p>
          <h3 className="mt-3 font-heading text-4xl font-bold text-[#1F5E4B]">
            {value}
          </h3>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
          <Icon className="h-7 w-7" />
        </div>
      </div>

      <p className="mt-5 text-sm text-[#777]">{description}</p>
    </div>
  );
}