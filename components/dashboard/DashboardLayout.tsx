/**
 * ============================================================================
 * File: DashboardLayout.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Shared layout for all dashboard pages.
 * Combines the sidebar, header, and page content.
 * ============================================================================
 */

import { ReactNode } from "react";

import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8F7F3]">
      <DashboardHeader />

      <div className="flex">
        <DashboardSidebar />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}