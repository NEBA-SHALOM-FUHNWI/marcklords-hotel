/**
 * ============================================================================
 * File: MainLayout.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Global layout for all public-facing pages.
 * Automatically renders the TopBar, Navbar and Footer
 * around each page's unique content.
 * ============================================================================
 */

import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { TopBar } from "./TopBar";

type MainLayoutProps = {
  children: ReactNode;
};

/**
 * Wraps every public page with the global website layout.
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}