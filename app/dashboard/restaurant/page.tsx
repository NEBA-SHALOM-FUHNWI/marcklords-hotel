import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { MenuTable } from "@/components/dashboard/restaurant/MenuTable";
import Link from "next/link";

export default function RestaurantPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Restaurant Management
          </p>

          <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
            Restaurant
          </h1>

          <p className="mt-3 text-[#555]">
            Manage menu items, food categories, pricing, and restaurant orders.
          </p>
        </div>

        <button className="rounded-full bg-[#1F5E4B] px-6 py-3 font-semibold text-white hover:bg-[#063D2E]">
          + Add Menu Item
        </button>
      </div>
      <MenuTable />
      <div className="mt-8">
  <Link
    href="/dashboard/restaurant/orders"
    className="inline-flex rounded-full bg-[#1F5E4B] px-6 py-3 font-semibold text-white hover:bg-[#063D2E]"
  >
    View Restaurant Orders
  </Link>
</div>
    </DashboardLayout>
  );
}