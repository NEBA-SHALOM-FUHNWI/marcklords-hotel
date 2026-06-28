/**
 * ============================================================================
 * File: RoomGallery.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Displays a gallery of images for an individual room.
 * ============================================================================
 */

import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";

type RoomGalleryProps = {
  images: string[];
};

export function RoomGallery({ images }: RoomGalleryProps) {
  return (
    <section className="bg-[#F8F7F3] py-20">
      <Container>
        <SectionTitle
          title="Room Gallery"
          subtitle="Explore the room from different perspectives before making your reservation."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-72 overflow-hidden rounded-[2rem] shadow-sm"
            >
              <Image
                src={image}
                alt={`Room image ${index + 1}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}