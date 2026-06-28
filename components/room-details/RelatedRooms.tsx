/**
 * ============================================================================
 * File: RelatedRooms.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Shows other room options below an individual room details page.
 * ============================================================================
 */

import { RoomCard } from "@/components/home/Rooms/RoomCard";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { rooms } from "@/lib/rooms-data";

type RelatedRoomsProps = {
  currentSlug: string;
};

export function RelatedRooms({ currentSlug }: RelatedRoomsProps) {
  const relatedRooms = rooms.filter((room) => room.slug !== currentSlug);

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          title="You May Also Like"
          subtitle="Explore other room options that may also suit your stay."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {relatedRooms.map((room) => (
            <RoomCard key={room.slug} {...room} />
          ))}
        </div>
      </Container>
    </section>
  );
}