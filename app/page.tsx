import { MainLayout } from "@/components/layout/MainLayout";
import { Hero } from "@/components/home/Hero/Hero";
import { AboutPreview } from "@/components/home/About/AboutPreview";
import { FeaturedRooms } from "@/components/home/Rooms/FeaturedRooms";
import { RestaurantPreview } from "@/components/home/Restaurant/RestaurantPreview";
import { ConferencePreview } from "@/components/home/Conference/ConferencePreview";
import {WhyChooseUs} from "@/components/home/Features/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials/Testimonials";
import { GalleryPreview } from "@/components/home/Gallery/GalleryPreview";
import { CallToAction } from "@/components/home/CTA/CallToAction";


export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <AboutPreview />
      <FeaturedRooms />
      <RestaurantPreview />
      <ConferencePreview />
      <WhyChooseUs />
      <Testimonials />
      <GalleryPreview />
      <CallToAction />
    </MainLayout>
  );
}