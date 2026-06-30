import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { GuestsTable } from "@/components/dashboard/guests/GuestsTable";

export default function GuestsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Guest Management
          </p>

          <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
            Guests
          </h1>

          <p className="mt-3 text-[#555]">
            View guest profiles, contact information, booking history, and preferences.
          </p>
        </div>

        <button className="rounded-full bg-[#1F5E4B] px-6 py-3 font-semibold text-white hover:bg-[#063D2E]">
          + New Guest
        </button>
      </div>
      <GuestsTable />
    </DashboardLayout>
  );
}