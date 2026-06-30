import { notFound } from "next/navigation";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { bookings } from "@/lib/mock-data/bookings";
import { BookingInformation } from "@/components/dashboard/bookings/BookingInformation";
import { GuestInformation } from "@/components/dashboard/bookings/GuestInformation";
import { BookingActions } from "@/components/dashboard/bookings/BookingActions";
import { RoomAssignment } from "@/components/dashboard/bookings/RoomAssignment";


type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BookingDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const booking = bookings.find(
    (item) => item.id === Number(id)
  );

  if (!booking) {
    notFound();
  }

  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          Booking Details
        </p>

        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          Booking #{booking.id}
        </h1>

        <p className="mt-3 text-[#555]">
          Review and manage this reservation.
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
  <BookingInformation booking={booking} />
  <GuestInformation booking={booking} />
</div>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
  <BookingActions booking={booking} />
</div>
<div className="mt-8 grid gap-8 lg:grid-cols-2">
  <RoomAssignment booking={booking} />
</div>
    </DashboardLayout>
  );
}