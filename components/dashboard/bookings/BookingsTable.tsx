/**
 * ============================================================================
 * File: BookingsTable.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Displays all hotel bookings from shared booking data.
 * ============================================================================
 */

import Link from "next/link";
import { bookings } from "@/lib/mock-data/bookings";

export function BookingsTable() {
  return (
    <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead>
            <tr className="border-b text-sm text-[#777]">
              <th className="pb-4 font-semibold">Booking ID</th>
              <th className="pb-4 font-semibold">Guest</th>
              <th className="pb-4 font-semibold">Source</th>
              <th className="pb-4 font-semibold">Room</th>
              <th className="pb-4 font-semibold">Check-in</th>
              <th className="pb-4 font-semibold">Check-out</th>
              <th className="pb-4 font-semibold">Status</th>
              <th className="pb-4 font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b last:border-b-0">
                <td className="py-4 font-semibold text-[#333]">
                  #{booking.id}
                </td>
                <td className="py-4 text-[#333]">{booking.guest}</td>
                <td className="py-4 text-[#555]">{booking.source}</td>
                <td className="py-4 text-[#555]">
                  {booking.room} · {booking.roomNumber}
                </td>
                <td className="py-4 text-[#555]">{booking.checkIn}</td>
                <td className="py-4 text-[#555]">{booking.checkOut}</td>
                <td className="py-4">
                  <span className="rounded-full bg-[#1F5E4B]/10 px-3 py-1 text-xs font-semibold text-[#1F5E4B]">
                    {booking.status}
                  </span>
                </td>
                <td className="py-4">
                  <Link
                    href={`/dashboard/bookings/${booking.id}`}
                    className="text-sm font-semibold text-[#1F5E4B] hover:underline"
                  >
                    View
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