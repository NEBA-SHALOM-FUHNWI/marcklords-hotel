/**
 * ============================================================================
 * File: Container.tsx
 * Project: Marcklords Hotel, Project Atlas
 *
 * Description:
 * Reusable layout container used to keep page content aligned
 * with consistent width and horizontal spacing across the website.
 * ============================================================================
 */

import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Wraps content inside a consistent max-width layout.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}