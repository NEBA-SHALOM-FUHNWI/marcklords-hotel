import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { NewBookingForm } from "@/components/dashboard/bookings/NewBookingForm";

export default function NewBookingPage() {
  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          New Booking
        </p>

        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          Create Walk-in Booking
        </h1>

        <p className="mt-3 text-[#555]">
          Register a guest who arrives physically at the hotel without booking online.
        </p>
      </div>
      <NewBookingForm />
    </DashboardLayout>
  );
}