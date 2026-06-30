"use client";

/**
 * ============================================================================
 * File: NewBookingForm.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Dashboard form used by hotel staff to create walk-in, phone,
 * WhatsApp, or corporate bookings.
 * ============================================================================
 */

import { useState } from "react";
import { CalendarDays, Mail, Phone, User, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { roomService } from "@/lib/services/room.service";

export function NewBookingForm() {
  const [booking, setBooking] = useState({
    guestName: "",
    phone: "",
    email: "",
    guests: "1",
    source: "Walk-in",
    roomType: "",
    roomNumber: "",
    checkIn: "",
    checkOut: "",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const availableRooms = booking.roomType
    ? roomService.getAvailableRoomsByType(
        booking.roomType as "Standard" | "Deluxe" | "Executive Suite"
      )
    : [];

  const selectedRoom = booking.roomNumber
    ? roomService.getRoomByNumber(booking.roomNumber)
    : undefined;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Staff Booking Created:", booking);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-8 rounded-[2rem] bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
          ✅
        </div>

        <h2 className="mt-6 font-heading text-3xl font-bold text-[#1F5E4B]">
          Booking Created Successfully
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-[#555]">
          The guest booking has been created. The assigned room and reservation
          details are now ready for front desk review.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-full bg-[#1F5E4B] px-8 py-3 font-semibold text-white hover:bg-[#063D2E]"
        >
          Create Another Booking
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-[2rem] bg-white p-8 shadow-sm"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Guest Name
          </label>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
            <User className="h-5 w-5 text-[#C9A227]" />
            <input
              name="guestName"
              value={booking.guestName}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter guest name"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">Phone</label>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
            <Phone className="h-5 w-5 text-[#C9A227]" />
            <input
              name="phone"
              value={booking.phone}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter phone number"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">Email</label>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
            <Mail className="h-5 w-5 text-[#C9A227]" />
            <input
              name="email"
              value={booking.email}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter email address"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">Guests</label>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
            <Users className="h-5 w-5 text-[#C9A227]" />
            <input
              type="number"
              min="1"
              name="guests"
              value={booking.guests}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Booking Source
          </label>
          <select
            name="source"
            value={booking.source}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border p-4 outline-none"
          >
            <option>Walk-in</option>
            <option>Phone</option>
            <option>WhatsApp</option>
            <option>Corporate</option>
            <option>Online Website</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Room Type
          </label>
          <select
            name="roomType"
            value={booking.roomType}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border p-4 outline-none"
          >
            <option value="">Select room type</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Executive Suite">Executive Suite</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Available Room Number
          </label>

          <select
            name="roomNumber"
            value={booking.roomNumber}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border p-4 outline-none"
            disabled={!booking.roomType}
          >
            <option value="">
              {booking.roomType
                ? "Select room number"
                : "Select room type first"}
            </option>

            {availableRooms.map((room) => (
              <option key={room.id} value={room.number}>
                Room {room.number}, Floor {room.floor},{" "}
                {room.price.toLocaleString()} FCFA
              </option>
            ))}
          </select>
        </div>

        {selectedRoom && (
          <div className="rounded-2xl bg-[#F8F7F3] p-5 md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Selected Room Summary
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-4">
              <div>
                <p className="text-xs text-[#777]">Room</p>
                <p className="font-semibold text-[#1F5E4B]">
                  {selectedRoom.number}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#777]">Floor</p>
                <p className="font-semibold text-[#1F5E4B]">
                  Floor {selectedRoom.floor}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#777]">Capacity</p>
                <p className="font-semibold text-[#1F5E4B]">
                  {selectedRoom.capacity} Guests
                </p>
              </div>

              <div>
                <p className="text-xs text-[#777]">Rate</p>
                <p className="font-semibold text-[#1F5E4B]">
                  {selectedRoom.price.toLocaleString()} FCFA
                </p>
              </div>
            </div>
          </div>
        )}

        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Check-in
          </label>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
            <CalendarDays className="h-5 w-5 text-[#C9A227]" />
            <input
              type="date"
              name="checkIn"
              value={booking.checkIn}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Check-out
          </label>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
            <CalendarDays className="h-5 w-5 text-[#C9A227]" />
            <input
              type="date"
              name="checkOut"
              value={booking.checkOut}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Staff Note
          </label>
          <textarea
            name="note"
            value={booking.note}
            onChange={handleChange}
            rows={4}
            className="mt-2 w-full rounded-2xl border p-4 outline-none"
            placeholder="Add any note about the booking"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="mt-8 rounded-full bg-[#1F5E4B] px-10 hover:bg-[#063D2E]"
      >
        Create Booking
      </Button>
    </form>
  );
}