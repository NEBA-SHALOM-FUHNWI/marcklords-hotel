/**
 * ============================================================================
 * File: HeroStats.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Trust-building statistics displayed inside the homepage hero section.
 * These values are currently static but can later come from the database.
 * ============================================================================
 */

const stats = [
  {
    value: "24/7",
    label: "Guest Support",
  },
  {
    value: "3+",
    label: "Room Categories",
  },
  {
    value: "2+",
    label: "Event Spaces",
  },
  {
    value: "100%",
    label: "Hospitality Focus",
  },
];

/**
 * Displays key trust statistics in the hero section.
 */
export function HeroStats() {
  return (
    <div className="mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
        >
          <p className="font-heading text-3xl font-bold text-[#C9A227]">
            {stat.value}
          </p>
          <p className="mt-2 text-sm text-white/80">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}