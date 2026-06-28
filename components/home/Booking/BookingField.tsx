/**
 * ============================================================================
 * File: BookingField.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Reusable booking field used inside the homepage booking widget.
 * This component keeps booking inputs visually consistent.
 * ============================================================================
 */

import { LucideIcon } from "lucide-react";

type BookingFieldProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

/**
 * Displays one booking option such as check-in, check-out, guests, or room type.
 */
export function BookingField({ icon: Icon, label, value }: BookingFieldProps) {
  return (
    <button
      type="button"
      className="group flex w-full items-center gap-4 rounded-2xl border border-gray-100 bg-[#F8F7F3] p-5 text-left transition hover:-translate-y-0.5 hover:border-[#C9A227]/60 hover:bg-white hover:shadow-md"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#1F5E4B] shadow-sm transition group-hover:bg-[#1F5E4B] group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
          {label}
        </p>

        <p className="mt-1 font-semibold text-[#333333]">{value}</p>
      </div>
    </button>
  );
}