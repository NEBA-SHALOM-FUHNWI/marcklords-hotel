import { notFound } from "next/navigation";

import { MainLayout } from "@/components/layout/MainLayout";
import { RoomHero } from "@/components/room-details/RoomHero";
import { Container } from "@/components/shared/Container";
import { rooms } from "@/lib/rooms-data";
import { RoomOverview } from "@/components/room-details/RoomOverview";
import { RoomAmenities } from "@/components/room-details/RoomAmenities";
import { RoomGallery } from "@/components/room-details/RoomGallery";
import { RoomBookingCard } from "@/components/room-details/RoomBookingCard";
import { RelatedRooms } from "@/components/room-details/RelatedRooms";
import { RoomReviews } from "@/components/room-details/RoomReviews";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RoomDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const room = rooms.find((item) => item.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <MainLayout>
      <RoomHero
        name={room.name}
        shortDescription={room.shortDescription}
        image={room.image}
        rating={room.rating}
        reviews={room.reviews}
      />
         <RoomOverview
        price={room.price}
        guests={room.guests}
        bed={room.bed}
        size={room.size}
      />

      <section className="bg-[#F8F7F3] py-24">
  <Container>
    <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
      <div>
        <h2 className="font-heading text-4xl font-bold text-[#1F5E4B]">
          About this room
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#555]">
          {room.fullDescription}
        </p>
      </div>

      <RoomBookingCard
        name={room.name}
        price={room.price}
        guests={room.guests}
        bed={room.bed}
        rating={room.rating}
        reviews={room.reviews}
      />
    </div>
  </Container>
</section>

      <RoomAmenities amenities={room.amenities} />
      <RoomGallery images={room.gallery} />
      <RoomReviews rating={room.rating} reviews={room.reviews} />
      <RelatedRooms currentRoomSlug={room.slug} />
      
    </MainLayout>
  );
}