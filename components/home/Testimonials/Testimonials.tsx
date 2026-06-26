/**
 * ============================================================================
 * File: Testimonials.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Homepage testimonials section.
 * Displays guest feedback placeholders that can later be replaced
 * with real approved reviews from the hotel.
 * ============================================================================
 */

import { Quote, Star } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";

const testimonials = [
  {
    name: "Business Guest",
    role: "Frequent Traveler",
    comment:
      "A comfortable and convenient place to stay while visiting Kumba for work.",
  },
  {
    name: "Event Guest",
    role: "Conference Attendee",
    comment:
      "The hotel provides a professional setting for meetings and organized events.",
  },
  {
    name: "Family Visitor",
    role: "Weekend Guest",
    comment:
      "A welcoming environment with helpful staff and easy access to the city.",
  },
];

/**
 * Displays guest testimonial cards on the homepage.
 */
export function Testimonials() {
  return (
    <section className="bg-[#F8F7F3] py-24">
      <Container>
        <SectionTitle
          centered
          title="Guest Experiences"
          subtitle="What guests may appreciate most: comfort, location, service, and hospitality."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[2rem] bg-white p-8 shadow-sm"
            >
              <Quote className="h-10 w-10 text-[#C9A227]" />

              <div className="mt-5 flex gap-1 text-[#C9A227]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-6 leading-7 text-[#555]">
                {item.comment}
              </p>

              <div className="mt-8 border-t pt-5">
                <h4 className="font-semibold text-[#1F5E4B]">{item.name}</h4>
                <p className="mt-1 text-sm text-[#777]">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}