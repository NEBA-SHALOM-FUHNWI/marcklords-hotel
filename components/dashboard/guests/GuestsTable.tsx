/**
 * ============================================================================
 * File: GuestsTable.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Displays hotel guests using shared guest mock data.
 * ============================================================================
 */
import Link from "next/link";
import { guests } from "@/lib/mock-data/guests";

export function GuestsTable() {
  return (
    <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead>
            <tr className="border-b text-sm text-[#777]">
              <th className="pb-4 font-semibold">Guest Code</th>
              <th className="pb-4 font-semibold">Name</th>
              <th className="pb-4 font-semibold">Phone</th>
              <th className="pb-4 font-semibold">ID Type</th>
              <th className="pb-4 font-semibold">ID Number</th>
              <th className="pb-4 font-semibold">Nationality</th>
              <th className="pb-4 font-semibold">Status</th>
              <th className="pb-4 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {guests.map((guest) => (
              <tr key={guest.id} className="border-b last:border-b-0">
                <td className="py-4 font-semibold text-[#1F5E4B]">
                  {guest.code}
                </td>

                <td className="py-4 font-semibold text-[#333]">
                  {guest.name}
                </td>

                <td className="py-4 text-[#555]">{guest.phone}</td>
                <td className="py-4 text-[#555]">{guest.idType}</td>
                <td className="py-4 text-[#555]">{guest.idNumber}</td>
                <td className="py-4 text-[#555]">{guest.nationality}</td>

                <td className="py-4">
                  <span className="rounded-full bg-[#1F5E4B]/10 px-3 py-1 text-xs font-semibold text-[#1F5E4B]">
                    {guest.status}
                  </span>
                </td>
                <td className="py-4">
  <Link
    href={`/dashboard/guests/${guest.id}`}
    className="text-sm font-semibold text-[#1F5E4B] hover:underline"
  >
    View
  </Link>
</td>
              </tr>
              
            ))}
            
          </tbody>
          
        </table>
      </div>
    </div>
  );
}