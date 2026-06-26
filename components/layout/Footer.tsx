/**
 * ============================================================================
 * File: Footer.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Reusable website footer containing brand information,
 * navigation links, services, and contact details.
 * ============================================================================
 */

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE, NAVIGATION } from "@/lib/constants";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/hotel/Logo";

/**
 * Displays the global website footer.
 */
export function Footer() {
  const services = [
    "Accommodation",
    "Dining",
    "Conference Facilities",
    "Events & Celebrations",
    "Room Service",
  ];

  return (
    <footer className="bg-[#063D2E] py-14 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Experience warm hospitality, modern comfort, and memorable moments
              in the heart of Kumba.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-white/70">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition hover:text-[#C9A227]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Our Services
            </h3>

            <ul className="space-y-3 text-sm text-white/70">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[#C9A227]" />
                <span>{SITE.phone}</span>
              </li>

              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[#C9A227]" />
                <span>{SITE.email}</span>
              </li>

              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[#C9A227]" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © 2024 {SITE.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}