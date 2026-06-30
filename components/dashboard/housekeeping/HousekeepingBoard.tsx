"use client";
/**
 * ============================================================================
 * File: HousekeepingBoard.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Displays room housekeeping status for hotel staff.
 * ============================================================================
 */

import { roomService } from "@/lib/services/room.service";
import { StatusBadge } from "@/components/dashboard/shared/StatusBadge";
import { useState } from "react";
import { EmptyState } from "@/components/dashboard/shared/EmptyState";

export function HousekeepingBoard() {
 const [rooms, setRooms] = useState(roomService.getHousekeepingRooms());

const handleStartCleaning = (roomId: number) => {
  setRooms((currentRooms) =>
    currentRooms.map((room) =>
      room.id === roomId
        ? { ...room, status: "Cleaning", housekeepingStatus: "In Progress" }
        : room
    )
  );
};

const handleMarkAsClean = (roomId: number) => {
  setRooms((currentRooms) =>
    currentRooms.map((room) =>
      room.id === roomId
        ? { ...room, status: "Available", housekeepingStatus: "Clean" }
        : room
    )
  );
};


if (rooms.length === 0) {
  return (
    <div className="mt-8">
      <EmptyState
        title="No housekeeping tasks"
        description="All rooms are currently clean or do not require housekeeping attention."
      />
    </div>
  );
}
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {rooms.map((room) => (
        <div key={room.id} className="rounded-[2rem] bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Room {room.number}
              </p>

              <h3 className="mt-2 font-heading text-2xl font-bold text-[#1F5E4B]">
                {room.type}
              </h3>

              <p className="mt-2 text-sm text-[#666]">
                Floor {room.floor} · Capacity {room.capacity}
              </p>
            </div>

            <StatusBadge status={room.housekeepingStatus} />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <StatusBadge status={room.status} />

            {!room.active && <StatusBadge status="Inactive" />}
          </div>

          <div className="mt-6 grid gap-3">
            <button onClick={() => handleStartCleaning(room.id)} className="rounded-full bg-[#1F5E4B] px-4 py-2 text-sm font-semibold text-white hover:bg-[#063D2E]">
              Start Cleaning
            </button>

            <button onClick={() => handleMarkAsClean(room.id)} className="rounded-full border border-[#1F5E4B] px-4 py-2 text-sm font-semibold text-[#1F5E4B] hover:bg-[#1F5E4B] hover:text-white">
              Mark as Clean
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}