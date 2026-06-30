import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { RestaurantOrdersTable } from "@/components/dashboard/restaurant/RestaurantOrdersTable";
import Link from "next/link";

export default function RestaurantOrdersPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Restaurant Orders
          </p>

          <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
            Orders
          </h1>

          <p className="mt-3 text-[#555]">
            Manage dine-in, takeaway, and room service orders.
          </p>
        </div>

        <Link
  href="/dashboard/restaurant/orders/new"
  className="rounded-full bg-[#1F5E4B] px-6 py-3 font-semibold text-white hover:bg-[#063D2E]"
>
  + New Order
</Link>
      </div>
      <RestaurantOrdersTable />
    </DashboardLayout>
  );
}