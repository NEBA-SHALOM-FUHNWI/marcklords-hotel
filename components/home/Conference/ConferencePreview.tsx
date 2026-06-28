/**
 * ============================================================================
 * File: ConferencePreview.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Homepage preview section for conference, meeting, and event services.
 * ============================================================================
 */

import Link from "next/link";
import { BriefcaseBusiness, CalendarCheck, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import Image from "next/image";

/**
 * Displays conference and events preview content on the homepage.
 */
export function ConferencePreview() {
  const eventTypes = [
    {
      icon: BriefcaseBusiness,
      title: "Business Meetings",
      description: "A suitable setting for professional meetings and corporate discussions.",
    },
    {
      icon: UsersRound,
      title: "Workshops & Seminars",
      description: "Support for trainings, seminars, and organized group sessions.",
    },
    {
      icon: CalendarCheck,
      title: "Private Events",
      description: "A welcoming space for celebrations, receptions, and special gatherings.",
    },
  ];

  return (
    <section className="bg-[#063D2E] py-24 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              title="Conference & Events"
              subtitle="Host meetings, workshops, seminars, and celebrations in a professional hotel environment."
            />

            <div className="mt-8 grid gap-5">
              {eventTypes.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl bg-white/10 p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9A227] text-[#063D2E]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/conference-events">
              <Button className="mt-8 rounded-full bg-[#C9A227] px-8 text-[#063D2E] hover:bg-[#b8921f]">
                Explore Event Spaces
              </Button>
            </Link>
          </div>

          <div className="rounded-[2rem] bg-white p-6 text-[#333333] shadow-xl">
            <div className="relative h-80 overflow-hidden rounded-[1.5rem]">
  <Image
    src="/images/conference/conference-hall.jpg"
    alt="Marcklords Hotel conference hall"
    fill
    className="object-cover"
  />
</div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#F8F7F3] p-5">
                <p className="text-sm font-semibold text-[#C9A227]">
                  Meetings
                </p>
                <h4 className="mt-2 font-heading text-2xl font-bold text-[#1F5E4B]">
                  Corporate Ready
                </h4>
              </div>

              <div className="rounded-2xl bg-[#F8F7F3] p-5">
                <p className="text-sm font-semibold text-[#C9A227]">
                  Events
                </p>
                <h4 className="mt-2 font-heading text-2xl font-bold text-[#1F5E4B]">
                  Guest Friendly
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}