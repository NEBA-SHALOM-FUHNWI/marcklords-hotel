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
import { CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "John M.",
    role: "Business Traveller",
    location: "Douala, Cameroon",
    comment:
      "The rooms were spotless, the staff were incredibly welcoming, and the conference facilities were perfect for our meeting. I'll definitely stay here again.",
    verified: true,
  },
  {
    name: "Grace N.",
    role: "Family Guest",
    location: "Buea, Cameroon",
    comment:
      "Our family had a wonderful experience. The restaurant served excellent meals, and the atmosphere made us feel at home.",
    verified: true,
  },
  {
    name: "Peter E.",
    role: "Conference Attendee",
    location: "Limbe, Cameroon",
    comment:
      "Everything was well organized, from check-in to the event facilities. Marcklords Hotel is one of the best places to stay in Kumba.",
    verified: true,
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
                {item.verified && (
  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
    <CheckCircle2 className="h-4 w-4" />
    Verified Guest
  </div>
)}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}