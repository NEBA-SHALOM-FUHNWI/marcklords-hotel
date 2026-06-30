/**
 * ============================================================================
 * File: SearchInput.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Reusable search input for dashboard pages.
 * ============================================================================
 */

import { Search } from "lucide-react";

type SearchInputProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;    
};

export function SearchInput({
  placeholder = "Search...",
  value,
  onChange
}: SearchInputProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#999]" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-[#E5E5E5] bg-white py-3 pl-12 pr-4 outline-none transition focus:border-[#1F5E4B]"
      />
    </div>
  );
}