import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { CheckOutList } from "@/components/dashboard/check-out/CheckOutList";

export default function CheckOutPage() {
  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          Reception
        </p>

        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          Guest Check-Out
        </h1>

        <p className="mt-3 text-[#555]">
          Complete guest departures after verifying all charges and payments.
        </p>
      </div>
        <CheckOutList />
    </DashboardLayout>
  );
}