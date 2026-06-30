/**
 * ============================================================================
 * File: FilterSelect.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Reusable select filter for dashboard pages.
 * ============================================================================
 */

type FilterSelectProps = {
  label?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export function FilterSelect({ label, options, value, onChange }: FilterSelectProps) {
  return (
    <select
      className="rounded-full border border-[#E5E5E5] bg-white px-5 py-3 text-sm font-medium text-[#555] outline-none transition focus:border-[#1F5E4B]"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {label && <option value="">{label}</option>}

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}