import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  BedDouble,
  Brush,
  CalendarCheck,
  CircleDollarSign,
  LogOut,
  Users,
} from "lucide-react";

import { DashboardStatCard } from "@/components/dashboard/DashboardStatCard";
import { guestLedgers } from "@/lib/mock-data/billing";
import { bookings } from "@/lib/mock-data/bookings";
import { roomService } from "@/lib/services/room.service";
import { billingService } from "@/lib/services/billing.service";
import { ManagementWidgets } from "@/components/dashboard/reports/ManagementWidgets";

export default function ReportsPage() {
    const rooms = roomService.getAllRooms();

const occupiedRooms = rooms.filter((room) => room.status === "Occupied");
const availableRooms = rooms.filter((room) => room.status === "Available");
const dirtyRooms = rooms.filter((room) => room.status === "Dirty");

const occupancyRate = Math.round((occupiedRooms.length / rooms.length) * 100);

const arrivalsToday = bookings.filter(
  (booking) => booking.checkIn === "2026-07-01"
);

const departuresToday = bookings.filter(
  (booking) => booking.checkOut === "2026-07-01"
);

const totalCharges = guestLedgers.reduce(
  (sum, ledger) => sum + billingService.getTotalCharges(ledger.charges),
  0
);

const totalPayments = guestLedgers.reduce(
  (sum, ledger) => sum + billingService.getTotalPayments(ledger.payments),
  0
);

const outstandingBalance = totalCharges - totalPayments;
  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          Management Reports
        </p>

        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          Reports
        </h1>

        <p className="mt-3 text-[#555]">
          View hotel performance across occupancy, revenue, bookings, housekeeping, and restaurant operations.
        </p>
      </div>
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  <DashboardStatCard
    title="Occupancy Rate"
    value={`${occupancyRate}%`}
    description="Current percentage of occupied rooms."
    icon={BedDouble}
  />

  <DashboardStatCard
    title="Guests In House"
    value={String(occupiedRooms.length)}
    description="Guests currently occupying rooms."
    icon={Users}
  />

  <DashboardStatCard
    title="Arrivals Today"
    value={String(arrivalsToday.length)}
    description="Guests expected to arrive today."
    icon={CalendarCheck}
  />

  <DashboardStatCard
    title="Departures Today"
    value={String(departuresToday.length)}
    description="Guests expected to check out today."
    icon={LogOut}
  />

  <DashboardStatCard
    title="Available Rooms"
    value={String(availableRooms.length)}
    description="Rooms ready for assignment."
    icon={BedDouble}
  />

  <DashboardStatCard
    title="Dirty Rooms"
    value={String(dirtyRooms.length)}
    description="Rooms waiting for housekeeping."
    icon={Brush}
  />

  <DashboardStatCard
    title="Total Charges"
    value={`${totalCharges.toLocaleString()} FCFA`}
    description="All charges posted to guest ledgers."
    icon={CircleDollarSign}
  />

  <DashboardStatCard
    title="Outstanding Balance"
    value={`${outstandingBalance.toLocaleString()} FCFA`}
    description="Amount still pending collection."
    icon={CircleDollarSign}
  />
</div>  
<ManagementWidgets />
    </DashboardLayout>
  );
}