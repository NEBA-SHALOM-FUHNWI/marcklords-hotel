/**
 * ============================================================================
 * File: RestaurantPreview.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Homepage preview section for the hotel restaurant and dining experience.
 * ============================================================================
 */

import Link from "next/link";
import { Coffee, Utensils, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";

/**
 * Displays a short restaurant preview on the homepage.
 */
export function RestaurantPreview() {
  const diningHighlights = [
    {
      icon: Coffee,
      title: "Breakfast",
      description: "Start your day with simple, fresh, and satisfying breakfast options.",
    },
    {
      icon: Utensils,
      title: "Local & International Meals",
      description: "Enjoy a blend of Cameroonian favorites and familiar international dishes.",
    },
    {
      icon: Wine,
      title: "Drinks & Relaxation",
      description: "Relax with beverages in a welcoming hotel dining atmosphere.",
    },
  ];

  return (
    <section className="bg-[#F8F7F3] py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#063D2E] p-8 text-white">
            <div className="h-72 rounded-[1.5rem] bg-white/10" />

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Dining Experience
            </p>

            <h3 className="mt-3 font-heading text-3xl font-bold">
              A comfortable place to eat, meet, and relax.
            </h3>
          </div>

          <div>
            <SectionTitle
              title="Restaurant & Dining"
              subtitle="The hotel restaurant gives guests a convenient dining experience without leaving the comfort of the hotel."
            />

            <div className="mt-8 space-y-5">
              {diningHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1F5E4B]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-[#555]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/restaurant">
              <Button className="mt-8 rounded-full bg-[#1F5E4B] px-8 hover:bg-[#063D2E]">
                Explore Restaurant
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}