/**
 * ============================================================================
 * File: SectionTitle.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Reusable section heading component.
 * Provides a consistent title and optional subtitle for
 * every major section across the website.
 * ============================================================================
 */

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

/**
 * Displays a consistent heading and optional subtitle.
 */
export function SectionTitle({
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="font-heading text-4xl font-bold text-[#1F5E4B]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-[#555]">
          {subtitle}
        </p>
      )}
    </div>
  );
}