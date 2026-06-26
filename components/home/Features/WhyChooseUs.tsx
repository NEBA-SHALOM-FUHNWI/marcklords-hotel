/**
 * ============================================================================
 * File: WhyChooseUs.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Homepage feature section highlighting the hotel's key strengths.
 * ============================================================================
 */

import {
  Wifi,
  ShieldCheck,
  Car,
  UtensilsCrossed,
  Building2,
  Clock3,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";

const features = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Reliable internet access throughout the hotel.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Environment",
    description: "A safe and comfortable stay for every guest.",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Convenient on-site parking for hotel visitors.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description: "Fresh meals prepared throughout the day.",
  },
  {
    icon: Building2,
    title: "Conference Facilities",
    description: "Suitable spaces for meetings and events.",
  },
  {
    icon: Clock3,
    title: "24/7 Reception",
    description: "Friendly staff available whenever you need assistance.",
  },
];

/**
 * Displays the hotel's main advantages.
 */
export function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          centered
          title="Why Choose Marcklords Hotel?"
          subtitle="Everything we provide is designed to make every guest feel comfortable, welcome, and well taken care of."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-gray-100 bg-[#F8F7F3] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1F5E4B]/10">
                  <Icon className="h-8 w-8 text-[#1F5E4B]" />
                </div>

                <h3 className="mt-6 font-heading text-2xl font-bold text-[#1F5E4B]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-[#555]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}