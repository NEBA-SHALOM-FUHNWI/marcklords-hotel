/**
 * ============================================================================
 * File: RoomAmenities.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Room amenities section showing what is included with each room.
 * ============================================================================
 */

import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";

type RoomAmenitiesProps = {
  amenities: string[];
};

export function RoomAmenities({ amenities }: RoomAmenitiesProps) {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionTitle
          title="Room Amenities"
          subtitle="Everything included to make your stay more comfortable and convenient."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center gap-3 rounded-2xl bg-[#F8F7F3] p-5"
            >
              <CheckCircle2 className="h-5 w-5 text-[#C9A227]" />
              <span className="font-medium text-[#333333]">{amenity}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}