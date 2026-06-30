import {
  BedDouble,
  CalendarCheck,
  CircleDollarSign,
  Users,
} from "lucide-react";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardStatCard } from "@/components/dashboard/DashboardStatCard";
import { RecentBookings } from "@/components/dashboard/RecentBookings";
import { RoomStatusBoard } from "@/components/dashboard/RoomStatusBoard";
import {dashboardStats} from "@/lib/mock-data/dashboard";
import { RevenueSummary } from "@/components/dashboard/RevenueSummary";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Rooms",
      value: String(dashboardStats.totalRooms),
      description: "Rooms currently configured in the hotel system.",
      icon: BedDouble,
    },
    {
      title: "Pending Bookings",
      value: String(dashboardStats.pendingBookings),
      description: "Booking requests waiting for confirmation.",
      icon: CalendarCheck,
    },
    {
      title: "Active Guests",
      value: String(dashboardStats.activeGuests),
      description: "Guests currently checked in or arriving soon.",
      icon: Users,
    },
    {
      title: "Estimated Revenue",
      value: dashboardStats.monthlyRevenue,
      description: "Projected room revenue from recent bookings.",
      icon: CircleDollarSign,
    },
  ];

  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          Overview
        </p>

        <h2 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          Hotel Dashboard
        </h2>

        <p className="mt-3 text-[#555]">
          Monitor rooms, bookings, guests, revenue, and hotel operations from one place.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <DashboardStatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-[2fr_1fr]">
  <RecentBookings />
  <RoomStatusBoard />
  <div className="mt-8">
    <RevenueSummary />
    <RecentActivity />
  </div>
</div>
    </DashboardLayout>
  );
}