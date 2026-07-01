



import { notFound } from "next/navigation";
import { CheckOutSummary } from "@/components/dashboard/check-out/CheckOutSummary";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { bookings } from "@/lib/mock-data/bookings";


type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CheckOutDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const booking = bookings.find((item) => item.id === Number(id));

  if (!booking) {
    notFound();
  }

  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          Check-Out Workflow
        </p>

        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          Check Out {booking.guest}
        </h1>

        <p className="mt-3 text-[#555]">
          Booking #{booking.id} · Room {booking.roomNumber} · {booking.checkOut}
        </p>
      </div>
        <CheckOutSummary booking={booking} />
    </DashboardLayout>
  );
}