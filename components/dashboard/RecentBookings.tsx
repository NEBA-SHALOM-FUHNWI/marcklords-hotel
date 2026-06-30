/**
 * ============================================================================
 * File: RecentBookings.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Displays recent booking requests on the dashboard overview.
 * This uses mock data for now and will later connect to the database.
 * ============================================================================
 */

import { bookings } from "@/lib/mock-data/bookings";
export function RecentBookings() {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Bookings
          </p>
          <h3 className="mt-2 font-heading text-2xl font-bold text-[#1F5E4B]">
            Recent Booking Requests
          </h3>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="border-b text-sm text-[#777]">
              <th className="pb-4 font-semibold">Guest</th>
              <th className="pb-4 font-semibold">Room</th>
              <th className="pb-4 font-semibold">Check-in</th>
              <th className="pb-4 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b last:border-b-0">
                <td className="py-4 font-semibold text-[#333]">
                  {booking.guest}
                </td>
                <td className="py-4 text-[#555]">{booking.room}</td>
                <td className="py-4 text-[#555]">{booking.checkIn}</td>
                <td className="py-4">
                  <span className="rounded-full bg-[#1F5E4B]/10 px-3 py-1 text-xs font-semibold text-[#1F5E4B]">
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}