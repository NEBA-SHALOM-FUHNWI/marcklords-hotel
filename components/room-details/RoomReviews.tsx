/**
 * ============================================================================
 * File: RoomReviews.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Guest review section for individual room details pages.
 * Uses placeholder review content until real hotel reviews are approved.
 * ============================================================================
 */

import { Star } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";

type RoomReviewsProps = {
  rating: string;
  reviews: string;
};

const reviewItems = [
  {
    name: "Business Guest",
    comment:
      "The room was comfortable, quiet, and suitable for a productive stay.",
  },
  {
    name: "Family Visitor",
    comment:
      "The environment felt welcoming and the room had everything we needed.",
  },
];

export function RoomReviews({ rating, reviews }: RoomReviewsProps) {
  return (
    <section className="bg-[#F8F7F3] py-24">
      <Container>
        <SectionTitle
          title="Guest Reviews"
          subtitle="Feedback that reflects comfort, service, and guest satisfaction."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="rounded-[2rem] bg-[#063D2E] p-8 text-white">
            <p className="font-heading text-5xl font-bold text-[#C9A227]">
              {rating}
            </p>

            <div className="mt-4 flex gap-1 text-[#C9A227]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>

            <p className="mt-4 text-white/70">{reviews}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {reviewItems.map((item) => (
              <div key={item.name} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <p className="leading-7 text-[#555]">{item.comment}</p>
                <p className="mt-6 font-semibold text-[#1F5E4B]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}