/**
 * ============================================================================
 * File: room.service.ts
 * Project: Marcklords HMS
 *
 * Description:
 * Room service containing business logic for hotel room inventory.
 * ============================================================================
 */

import { hotelRooms } from "@/lib/mock-data/rooms";
import { HotelRoom } from "@/types";

export const roomService = {
  getAllRooms(): HotelRoom[] {
    return hotelRooms;
  },

  getAvailableRooms(): HotelRoom[] {
    return hotelRooms.filter(
      (room) => room.status === "Available" && room.active
    );
  },

  getAvailableRoomsByType(type: HotelRoom["type"]): HotelRoom[] {
    return hotelRooms.filter(
      (room) =>
        room.type === type &&
        room.status === "Available" &&
        room.active
    );
  },

  getOccupiedRooms(): HotelRoom[] {
    return hotelRooms.filter((room) => room.status === "Occupied");
  },

  getRoomsByFloor(floor: number): HotelRoom[] {
    return hotelRooms.filter((room) => room.floor === floor);
  },

  getRoomByNumber(number: string): HotelRoom | undefined {
    return hotelRooms.find((room) => room.number === number);
  },
};