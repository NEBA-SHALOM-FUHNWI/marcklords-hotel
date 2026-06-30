/**
 * ============================================================================
 * File: EmptyState.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Reusable empty state component displayed when no data matches filters.
 * ============================================================================
 */

import { SearchX } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[2rem] bg-white px-8 py-20 text-center shadow-sm">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F7F3]">
        <SearchX className="h-10 w-10 text-[#C9A227]" />
      </div>

      <h3 className="mt-6 font-heading text-2xl font-bold text-[#1F5E4B]">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-[#666]">
        {description}
      </p>
    </div>
  );
}