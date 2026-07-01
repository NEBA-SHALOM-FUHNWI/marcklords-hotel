import Link from "next/link";
import { Brush, CalendarCheck, ReceiptText, UtensilsCrossed } from "lucide-react";

const widgets = [
  {
    title: "Bookings Needing Review",
    description: "Review pending reservations and booking requests.",
    href: "/dashboard/bookings",
    icon: CalendarCheck,
  },
  {
    title: "Rooms Needing Cleaning",
    description: "View dirty rooms and housekeeping tasks.",
    href: "/dashboard/housekeeping",
    icon: Brush,
  },
  {
    title: "Outstanding Guest Balances",
    description: "Open guest ledgers with unpaid balances.",
    href: "/dashboard/billing",
    icon: ReceiptText,
  },
  {
    title: "Restaurant Orders",
    description: "Monitor room service, dine-in, and takeaway orders.",
    href: "/dashboard/restaurant/orders",
    icon: UtensilsCrossed,
  },
];

export function ManagementWidgets() {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {widgets.map((widget) => {
        const Icon = widget.icon;

        return (
          <Link
            key={widget.title}
            href={widget.href}
            className="rounded-[2rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
              <Icon className="h-7 w-7" />
            </div>

            <h3 className="mt-5 font-heading text-xl font-bold text-[#1F5E4B]">
              {widget.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#666]">
              {widget.description}
            </p>
          </Link>
        );
      })}
    </div>
  );
}