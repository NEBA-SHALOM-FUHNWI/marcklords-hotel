/**
 * ============================================================================
 * File: RevenueSummary.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Dashboard revenue summary using mock financial data.
 * ============================================================================
 */

import { CircleDollarSign } from "lucide-react";
import { dashboardStats } from "@/lib/mock-data/dashboard";

export function RevenueSummary() {
  return (
    <div className="rounded-[2rem] bg-[#063D2E] p-6 text-white shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Revenue
          </p>

          <h3 className="mt-2 font-heading text-2xl font-bold">
            Monthly Revenue
          </h3>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#C9A227]">
          <CircleDollarSign className="h-7 w-7" />
        </div>
      </div>

      <p className="mt-8 font-heading text-4xl font-bold text-[#C9A227]">
        {dashboardStats.monthlyRevenue}
      </p>

      <p className="mt-4 text-sm leading-6 text-white/70">
        Estimated revenue from recent room bookings, restaurant activity, and hotel services.
      </p>
    </div>
  );
}