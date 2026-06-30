import { StatusBadge } from "@/components/dashboard/shared/StatusBadge";
import { menuItems } from "@/lib/mock-data/restaurant";

export function MenuTable() {
  return (
    <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-left">
          <thead>
            <tr className="border-b text-sm text-[#777]">
              <th className="pb-4 font-semibold">Item</th>
              <th className="pb-4 font-semibold">Category</th>
              <th className="pb-4 font-semibold">Price</th>
              <th className="pb-4 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id} className="border-b last:border-b-0">
                <td className="py-4 font-semibold text-[#333]">
                  {item.name}
                </td>
                <td className="py-4 text-[#555]">{item.category}</td>
                <td className="py-4 text-[#555]">
                  {item.price.toLocaleString()} FCFA
                </td>
                <td className="py-4">
                  <StatusBadge status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}