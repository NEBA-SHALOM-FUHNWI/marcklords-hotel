/**
 * ============================================================================
 * File: Testimonials.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Premium homepage testimonials section.
 * Uses richer testimonial data to build trust and social proof.
 * ============================================================================
 */

import { CheckCircle2, Quote, Star } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";

const testimonials = [
  {
    name: "John M.",
    role: "Business Traveller",
    location: "Douala, Cameroon",
    comment:
      "The rooms were comfortable, the staff were welcoming, and the hotel gave me exactly what I needed during my business trip.",
    verified: true,
  },
  {
    name: "Grace N.",
    role: "Family Guest",
    location: "Buea, Cameroon",
    comment:
      "Our family enjoyed the stay. The restaurant was convenient, the environment was calm, and the service felt warm.",
    verified: true,
  },
  {
    name: "Peter E.",
    role: "Conference Guest",
    location: "Limbe, Cameroon",
    comment:
      "The hotel provided a professional setting for our meeting. It was easy to access, comfortable, and well organized.",
    verified: true,
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#F8F7F3] py-24">
      <Container>
        <SectionTitle
          centered
          title="Guest Experiences"
          subtitle="Stories that reflect comfort, service, and hospitality."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="relative rounded-[2rem] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Quote className="h-10 w-10 text-[#C9A227]" />

              <div className="mt-5 flex gap-1 text-[#C9A227]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-6 leading-7 text-[#555]">{item.comment}</p>

              <div className="mt-8 border-t pt-5">
                <h4 className="font-semibold text-[#1F5E4B]">{item.name}</h4>

                <p className="mt-1 text-sm text-[#777]">
                  {item.role} · {item.location}
                </p>

                {item.verified && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1F5E4B]/10 px-3 py-1 text-xs font-semibold text-[#1F5E4B]">
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