/**
 * ============================================================================
 * File: GalleryPreview.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Premium homepage gallery preview using real hotel-style images.
 * ============================================================================
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";

const galleryItems = [
  {
    title: "Hotel Exterior",
    image: "/images/about/hotel-exterior.jpg",
    className: "lg:col-span-2",
  },
  {
    title: "Reception",
    image: "/images/about/reception.jpg",
    className: "",
  },
  {
    title: "Restaurant",
    image: "/images/restaurant/restaurant-main.jpg",
    className: "",
  },
  {
    title: "Conference Hall",
    image: "/images/conference/conference-hall.jpg",
    className: "",
  },
  {
    title: "Deluxe Room",
    image: "/images/rooms/deluxe-room.jpg",
    className: "lg:col-span-2",
  },
];

export function GalleryPreview() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            title="Discover Marcklords Hotel"
            subtitle="Take a glimpse at our rooms, dining spaces, conference facilities, and welcoming environment."
          />

          <Link href="/gallery">
            <Button
              variant="outline"
              className="rounded-full border-[#1F5E4B] px-8 text-[#1F5E4B] hover:bg-[#1F5E4B] hover:text-white"
            >
              View Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-14 grid auto-rows-[280px] gap-6 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-[2rem] shadow-sm ${item.className}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                  Gallery
                </p>
                <h3 className="mt-2 font-heading text-3xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}