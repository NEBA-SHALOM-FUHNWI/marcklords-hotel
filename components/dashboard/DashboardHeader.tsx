/**
 * ============================================================================
 * File: DashboardHeader.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Top header for the hotel management dashboard.
 * Displays dashboard title, search field, staff profile, and logout action.
 * ============================================================================
 */

import { Bell, LogOut, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white px-8 py-4 shadow-sm">
      <div className="flex items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Hotel Management
          </p>
          <h1 className="font-heading text-2xl font-bold text-[#1F5E4B]">
            Marcklords Dashboard
          </h1>
        </div>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex w-full max-w-md items-center gap-3 rounded-full bg-[#F8F7F3] px-5 py-3">
            <Search className="h-5 w-5 text-[#C9A227]" />
            <input
              type="text"
              placeholder="Search bookings, guests, rooms..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F7F3] text-[#1F5E4B]">
            <Bell className="h-5 w-5" />
          </button>

          <div className="hidden text-right md:block">
            <p className="text-sm font-semibold text-[#1F5E4B]">
              Hotel Staff
            </p>
            <p className="text-xs text-[#777]">Administrator</p>
          </div>

          <Button
            variant="outline"
            className="rounded-full border-[#1F5E4B] text-[#1F5E4B] hover:bg-[#1F5E4B] hover:text-white"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}