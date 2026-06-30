/**
 * ============================================================================
 * File: RoomAssignment.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Allows staff to view available rooms for a booking and prepare room assignment.
 * Later, this will update the booking and room status in the database.
 * ============================================================================
 */

import { DoorOpen } from "lucide-react";

import { roomService } from "@/lib/services/room.service";
import { Booking } from "@/types";

type RoomAssignmentProps = {
  booking: Booking;
};

export function RoomAssignment({ booking }: RoomAssignmentProps) {
  const availableRooms = roomService.getAvailableRoomsByType(
    booking.room as "Standard" | "Deluxe" | "Executive Suite"
  );

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Room Assignment
      </p>

      <h2 className="mt-2 font-heading text-2xl font-bold text-[#1F5E4B]">
        Assign Room
      </h2>

      <p className="mt-3 text-sm text-[#666]">
        Available rooms for {booking.room}.
      </p>

      <div className="mt-6 space-y-3">
        {availableRooms.length > 0 ? (
          availableRooms.map((room) => (
            <div
              key={room.id}
              className="flex items-center justify-between rounded-2xl bg-[#F8F7F3] p-4"
            >
              <div className="flex items-center gap-3">
                <DoorOpen className="h-5 w-5 text-[#C9A227]" />

                <div>
                  <p className="font-semibold text-[#333]">
                    Room {room.number}
                  </p>
                  <p className="text-sm text-[#777]">
                    Floor {room.floor} · {room.capacity} guests ·{" "}
                    {room.price.toLocaleString()} FCFA
                  </p>
                </div>
              </div>

              <button className="rounded-full bg-[#1F5E4B] px-4 py-2 text-sm font-semibold text-white hover:bg-[#063D2E]">
                Assign
              </button>
            </div>
          ))
        ) : (
          <p className="rounded-2xl bg-[#F8F7F3] p-4 text-sm text-[#666]">
            No available rooms for this room type.
          </p>
        )}
      </div>
    </div>
  );
}