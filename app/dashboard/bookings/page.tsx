import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import Link from "next/link";
import { BookingsTable } from "@/components/dashboard/bookings/BookingsTable";

export default function BookingsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Booking Management
          </p>

          <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
            Bookings
          </h1>

          <p className="mt-3 text-[#555]">
            Manage online, walk-in, phone, and corporate reservations.
          </p>
        </div>

        <Link
  href="/dashboard/bookings/new"
  className="rounded-full bg-[#1F5E4B] px-6 py-3 font-semibold text-white transition hover:bg-[#063D2E]"
>
  + New Booking
</Link>
      </div>
      <BookingsTable />
    </DashboardLayout>
  );
}