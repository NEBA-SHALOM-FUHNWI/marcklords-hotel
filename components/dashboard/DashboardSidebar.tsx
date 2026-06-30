/**
 * ============================================================================
 * File: DashboardSidebar.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Sidebar navigation for hotel staff dashboard modules.
 * ============================================================================
 */

import Link from "next/link";
import {
  BedDouble,
  CalendarCheck,
  GalleryHorizontalEnd,
  Home,
  LayoutDashboard,
  Settings,
  Users,
  UtensilsCrossed,
  ClipboardCheck
} from "lucide-react";

import { Logo } from "@/components/hotel/Logo";

const sidebarItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Bookings", href: "/dashboard/bookings", icon: CalendarCheck },
  { name: "Rooms", href: "/dashboard/rooms", icon: BedDouble },
  { name: "Housekeeping", href: "/dashboard/housekeeping", icon: ClipboardCheck },
  { name: "Guests", href: "/dashboard/guests", icon: Users },
  { name: "Restaurant", href: "/dashboard/restaurant", icon: UtensilsCrossed },
  { name: "Gallery", href: "/dashboard/gallery", icon: GalleryHorizontalEnd },
  { name: "Website", href: "/", icon: Home },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  return (
    <aside className="hidden min-h-[calc(100vh-89px)] w-72 border-r bg-white p-6 lg:block">
      <div className="mb-8">
        <Logo showTagline={false} />
      </div>

      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#555] transition hover:bg-[#F8F7F3] hover:text-[#1F5E4B]"
            >
              <Icon className="h-5 w-5 text-[#C9A227]" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}