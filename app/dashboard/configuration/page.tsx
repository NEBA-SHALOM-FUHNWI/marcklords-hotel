import {
  Building2,
  BedDouble,
  Users,
  UtensilsCrossed,
  CreditCard,
  ShieldCheck,
  Bell,
  Palette,
} from "lucide-react";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const configurationModules = [
  {
    title: "Hotel Information",
    description: "Hotel profile, logo, contact information and branding.",
    icon: Building2,
  },
  {
    title: "Departments",
    description: "Manage operational departments across the hotel.",
    icon: Users,
  },
  {
    title: "Room Management",
    description: "Room types, statuses and housekeeping configuration.",
    icon: BedDouble,
  },
  {
    title: "Food & Beverage",
    description: "Outlets, menu categories and dining configuration.",
    icon: UtensilsCrossed,
  },
  {
    title: "Billing",
    description: "Payment methods, taxes, currencies and charge types.",
    icon: CreditCard,
  },
  {
    title: "Roles & Permissions",
    description: "Control employee access throughout the system.",
    icon: ShieldCheck,
  },
  {
    title: "Notifications",
    description: "Email, SMS and WhatsApp notification templates.",
    icon: Bell,
  },
  {
    title: "Branding",
    description: "Colors, typography and overall application appearance.",
    icon: Palette,
  },
];

export default function ConfigurationPage() {
  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          Configuration Center
        </p>

        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          System Configuration
        </h1>

        <p className="mt-3 text-[#555]">
          Configure every aspect of your hotel without modifying the application code.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {configurationModules.map((module) => {
            const Icon = module.icon;

            return (
              <div
                key={module.title}
                className="rounded-[2rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold text-[#1F5E4B]">
                  {module.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#666]">
                  {module.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}