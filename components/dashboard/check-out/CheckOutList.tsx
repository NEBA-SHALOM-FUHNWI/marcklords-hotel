import Link from "next/link";

import { bookings } from "@/lib/mock-data/bookings";
import { StatusBadge } from "@/components/dashboard/shared/StatusBadge";

export function CheckOutList() {
  const checkedInBookings = bookings.filter(
    (booking) => booking.status === "Checked In"
  );

  return (
    <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] text-left">
          <thead>
            <tr className="border-b text-sm text-[#777]">
              <th className="pb-4 font-semibold">Booking</th>
              <th className="pb-4 font-semibold">Guest</th>
              <th className="pb-4 font-semibold">Room</th>
              <th className="pb-4 font-semibold">Check-out</th>
              <th className="pb-4 font-semibold">Status</th>
              <th className="pb-4 font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {checkedInBookings.map((booking) => (
              <tr key={booking.id} className="border-b last:border-b-0">
                <td className="py-4 font-semibold text-[#1F5E4B]">
                  #{booking.id}
                </td>

                <td className="py-4 font-semibold text-[#333]">
                  {booking.guest}
                </td>

                <td className="py-4 text-[#555]">
                  {booking.room} · Room {booking.roomNumber}
                </td>

                <td className="py-4 text-[#555]">{booking.checkOut}</td>

                <td className="py-4">
                  <StatusBadge status={booking.status} />
                </td>

                <td className="py-4">
                  <Link
                    href={`/dashboard/check-out/${booking.id}`}
                    className="text-sm font-semibold text-[#1F5E4B] hover:underline"
                  >
                    Start Check-Out
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}