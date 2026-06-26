/**
 * ============================================================================
 * File: PageHeader.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Reusable page header component used at the top of major website pages.
 * It provides consistent page titles, subtitles, and optional labels.
 * ============================================================================
 */

import { Container } from "./Container";

type PageHeaderProps = {
  label?: string;
  title: string;
  subtitle?: string;
};

/**
 * Displays a consistent hero-style header for internal pages.
 */
export function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-[#063D2E] py-20 text-white">
      <Container>
        {label && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            {label}
          </p>
        )}

        <h1 className="max-w-4xl font-heading text-5xl font-bold leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}