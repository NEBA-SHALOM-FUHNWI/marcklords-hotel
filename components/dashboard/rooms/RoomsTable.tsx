/**
 * ============================================================================
 * File: RoomsTable.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Displays hotel room inventory in the dashboard.
 * ============================================================================
 */

import { roomService } from "@/lib/services/room.service";
import { StatusBadge } from "@/components/dashboard/shared/StatusBadge";


export function RoomsTable() {
  const rooms = roomService.getAllRooms();

  return (
    <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead>
            <tr className="border-b text-sm text-[#777]">
              <th className="pb-4 font-semibold">Room</th>
              <th className="pb-4 font-semibold">Floor</th>
              <th className="pb-4 font-semibold">Type</th>
              <th className="pb-4 font-semibold">Price</th>
              <th className="pb-4 font-semibold">Capacity</th>
              <th className="pb-4 font-semibold">Room Status</th>
              <th className="pb-4 font-semibold">Housekeeping</th>
              <th className="pb-4 font-semibold">Active</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room) => (
              <tr key={room.id} className="border-b last:border-b-0">
                <td className="py-4 font-semibold text-[#1F5E4B]">
                  Room {room.number}
                </td>
                <td className="py-4 text-[#555]">Floor {room.floor}</td>
                <td className="py-4 text-[#555]">{room.type}</td>
                <td className="py-4 text-[#555]">
                  {room.price.toLocaleString()} FCFA
                </td>
                <td className="py-4 text-[#555]">{room.capacity} guests</td>
                <td className="py-4">
                    <StatusBadge status={room.status} />
                </td>
                <td className="py-4 text-[#555]">
                  {room.housekeepingStatus}
                </td>
                <td className="py-4 text-[#555]">
                  {room.active ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}