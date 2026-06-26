/**
 * ============================================================================
 * File: FeaturedRooms.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Homepage section displaying proposed room categories for the prototype.
 * These room categories can be updated after hotel confirmation.
 * ============================================================================
 */

import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { RoomCard } from "./RoomCard";

/**
 * Displays featured accommodation options on the homepage.
 */
export function FeaturedRooms() {
  const rooms = [
    {
      name: "Standard Room",
      description:
        "A comfortable room designed for short stays, business visits, and guests who value simplicity and convenience.",
      price: "From 35,000 FCFA",
      guests: "Up to 2 guests",
    },
    {
      name: "Deluxe Room",
      description:
        "A spacious option with added comfort, ideal for guests looking for a more relaxing stay in Kumba.",
      price: "From 55,000 FCFA",
      guests: "Up to 2 guests",
    },
    {
      name: "Executive Suite",
      description:
        "A premium room experience designed for business travelers, couples, and guests who prefer extra space.",
      price: "From 85,000 FCFA",
      guests: "Up to 3 guests",
    },
  ];

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            title="Featured Rooms"
            subtitle="Explore comfortable accommodation options designed for different types of guests."
          />

          <Link href="/rooms">
            <Button
              variant="outline"
              className="rounded-full border-[#1F5E4B] px-8 text-[#1F5E4B] hover:bg-[#1F5E4B] hover:text-white"
            >
              View All Rooms
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.name} {...room} />
          ))}
        </div>
      </Container>
    </section>
  );
}