import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { NewRestaurantOrderForm } from "@/components/dashboard/restaurant/NewRestaurantOrderForm";

export default function NewRestaurantOrderPage() {
  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          New Restaurant Order
        </p>

        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          Create Order
        </h1>

        <p className="mt-3 text-[#555]">
          Create dine-in, takeaway, or room service orders for guests.
        </p>
      </div>
        <NewRestaurantOrderForm />
    </DashboardLayout>
  );
}