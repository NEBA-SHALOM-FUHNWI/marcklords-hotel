/**
 * ============================================================================
 * File: RoomsCatalog.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Rooms page catalog section.
 * Displays all available room categories using shared room data.
 * ============================================================================
 */

import { RoomCard } from "@/components/home/Rooms/RoomCard";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { rooms } from "@/lib/rooms-data";

export function RoomsCatalog() {
  return (
    <section className="bg-[#F8F7F3] py-24">
      <Container>
        <SectionTitle
          title="Choose Your Stay"
          subtitle="Select from our proposed room categories. Final room names, pricing, and details can be updated after hotel confirmation."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.name} {...room} />
          ))}
        </div>
      </Container>
    </section>
  );
}