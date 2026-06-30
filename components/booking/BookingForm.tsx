"use client";
/**
 * ============================================================================
 * File: BookingForm.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Booking request form used by guests to request room availability.
 * This is currently frontend-only and will later connect to the backend.
 * ============================================================================
 */

import { useState } from "react";
import { CalendarDays, Mail, Phone, User, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { rooms } from "@/lib/rooms-data";

export function BookingForm() {
const [formData, setFormData] = useState({
  fullName: "",
  phone: "",
  email: "",
  guests: "1",
  checkIn: "",
  checkOut: "",
  roomType: "",
  specialRequest: "",
});
const [submitted, setSubmitted] = useState(false);

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  console.log("Booking Request:", formData);

  setSubmitted(true);
};
if (submitted) {
  return (
    <section className="bg-[#F8F7F3] py-24">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-white p-12 text-center shadow-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <span className="text-4xl">✅</span>
          </div>

          <h2 className="mt-8 font-heading text-4xl font-bold text-[#1F5E4B]">
            Booking Request Received
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#555]">
            Thank you for choosing Marcklords Hotel.
            Our reservations team will contact you shortly to confirm your booking.
          </p>

          <Button
            className="mt-10 rounded-full bg-[#1F5E4B] px-8"
            onClick={() => setSubmitted(false)}
          >
            Submit Another Request
          </Button>
        </div>
      </Container>
    </section>
  );
}
  return (
    <section className="bg-[#F8F7F3] py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <form
  onSubmit={handleSubmit}
  className="rounded-[2rem] bg-white p-8 shadow-sm"
>
            <h2 className="font-heading text-4xl font-bold text-[#1F5E4B]">
              Booking Information
            </h2>

            <p className="mt-3 text-[#555]">
              Fill in your details and our team will confirm your reservation.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-[#1F5E4B]">
                  Full Name
                </label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
                  <User className="h-5 w-5 text-[#C9A227]" />
                 <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full outline-none"
                    />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#1F5E4B]">
                  Phone Number
                </label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
                  <Phone className="h-5 w-5 text-[#C9A227]" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}  
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#1F5E4B]">
                  Email Address
                </label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
                  <Mail className="h-5 w-5 text-[#C9A227]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#1F5E4B]">
                  Number of Guests
                </label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
                  <Users className="h-5 w-5 text-[#C9A227]" />
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="2"
                    min="1"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#1F5E4B]">
                  Check-in Date
                </label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
                  <CalendarDays className="h-5 w-5 text-[#C9A227]" />
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#1F5E4B]">
                  Check-out Date
                </label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
                  <CalendarDays className="h-5 w-5 text-[#C9A227]" />
                  <input 
                  type="date" 
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full outline-none" />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-[#1F5E4B]">
                  Room Type
                </label>
                <select 
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border p-4 outline-none"
                >
                  <option>Select room type</option>
                  {rooms.map((room) => (
                    <option key={room.slug} value={room.slug}>
                      {room.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-[#1F5E4B]">
                  Special Request
                </label>
                <textarea
                    name="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleChange}
                  rows={5}
                  placeholder="Tell us anything we should know before your stay"
                  className="mt-2 w-full rounded-2xl border p-4 outline-none"
                />
              </div>
            </div>

            <Button type="submit" className="mt-8 h-12 rounded-full bg-[#1F5E4B] px-10 hover:bg-[#063D2E]">
              Submit Booking Request
            </Button>
          </form>

          <aside className="rounded-[2rem] bg-[#063D2E] p-8 text-white shadow-xl lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Booking Note
            </p>

            <h3 className="mt-4 font-heading text-3xl font-bold">
              We confirm availability before final booking.
            </h3>

            <p className="mt-5 leading-7 text-white/75">
              This form sends a booking request. The hotel team will contact the
              guest to confirm availability, pricing, and final reservation
              details.
            </p>

            <div className="mt-8 rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-white/70">Need help?</p>
              <p className="mt-2 font-semibold text-[#C9A227]">
                Contact the hotel directly.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}