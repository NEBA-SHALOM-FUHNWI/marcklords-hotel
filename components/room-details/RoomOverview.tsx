/**
 * ============================================================================
 * File: RoomOverview.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Room overview section showing key booking information.
 * ============================================================================
 */

import Link from "next/link";
import { BedDouble, Maximize, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";

type RoomOverviewProps = {
  price: string;
  guests: string;
  bed: string;
  size: string;
};

export function RoomOverview({ price, guests, bed, size }: RoomOverviewProps) {
  const details = [
    { icon: Users, label: "Capacity", value: guests },
    { icon: BedDouble, label: "Bed Type", value: bed },
    { icon: Maximize, label: "Room Size", value: size },
  ];

  return (
    <section className="bg-[#F8F7F3] py-16">
      <Container>
        <div className="grid gap-8 rounded-[2rem] bg-white p-8 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="grid gap-6 md:grid-cols-3">
            {details.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#C9A227]">
                      {item.label}
                    </p>
                    <p className="mt-1 font-semibold text-[#333333]">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-3xl bg-[#063D2E] p-6 text-white lg:min-w-[280px]">
            <p className="text-sm text-white/70">Starting from</p>
            <p className="mt-2 font-heading text-3xl font-bold text-[#C9A227]">
              {price}
            </p>

            <Link href="/book">
              <Button className="mt-5 w-full rounded-full bg-[#C9A227] text-[#063D2E] hover:bg-[#b8921f]">
                Book This Room
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}