/**
 * ============================================================================
 * File: RoomStatusBoard.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Displays the current status of hotel rooms using shared mock room data.
 * ============================================================================
 */

import { hotelRooms } from "@/lib/mock-data/rooms";

const statusColors = {
  Available: "bg-green-500",
  Occupied: "bg-red-500",
  Cleaning: "bg-yellow-500",
  Reserved: "bg-blue-500",
  Maintenance: "bg-gray-500",
};

export function RoomStatusBoard() {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Rooms
      </p>

      <h3 className="mt-2 font-heading text-2xl font-bold text-[#1F5E4B]">
        Current Room Status
      </h3>

      <div className="mt-6 space-y-4">
        {hotelRooms.map((room) => (
          <div
            key={room.number}
            className="flex items-center justify-between rounded-xl bg-[#F8F7F3] p-4"
          >
            <span className="font-semibold text-[#333]">
              Room {room.number}
            </span>

            <div className="flex items-center gap-3">
              <span
                className={`h-3 w-3 rounded-full ${
                  statusColors[room.status as keyof typeof statusColors]
                }`}
              />
              <span className="text-sm font-medium text-[#333]">
                {room.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}