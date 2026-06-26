/**
 * ============================================================================
 * File: GalleryPreview.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Homepage gallery preview.
 * Displays a selection of placeholder images that will later be replaced
 * with actual hotel photographs.
 * ============================================================================
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";

const galleryItems = [
  "Reception",
  "Executive Room",
  "Restaurant",
  "Conference Hall",
  "Swimming Area",
  "Hotel Exterior",
];

/**
 * Displays the homepage gallery preview.
 */
export function GalleryPreview() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          centered
          title="Discover Marcklords Hotel"
          subtitle="Take a glimpse at our rooms, dining spaces, conference facilities, and welcoming environment."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item}
              className="group overflow-hidden rounded-[2rem] shadow-sm"
            >
              <div className="flex h-72 items-end rounded-[2rem] bg-[#063D2E] p-6 transition duration-300 group-hover:scale-105">
                <h3 className="font-heading text-2xl font-bold text-white">
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/gallery">
            <Button className="rounded-full bg-[#1F5E4B] px-8 hover:bg-[#063D2E]">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}