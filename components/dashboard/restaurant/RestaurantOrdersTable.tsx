import { StatusBadge } from "@/components/dashboard/shared/StatusBadge";
import { restaurantOrders } from "@/lib/mock-data/restaurant";

export function RestaurantOrdersTable() {
  return (
    <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] text-left">
          <thead>
            <tr className="border-b text-sm text-[#777]">
              <th className="pb-4 font-semibold">Order Code</th>
              <th className="pb-4 font-semibold">Customer</th>
              <th className="pb-4 font-semibold">Type</th>
              <th className="pb-4 font-semibold">Items</th>
              <th className="pb-4 font-semibold">Total</th>
              <th className="pb-4 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody>
            {restaurantOrders.map((order) => (
              <tr key={order.id} className="border-b last:border-b-0">
                <td className="py-4 font-semibold text-[#1F5E4B]">
                  {order.orderCode}
                </td>
                <td className="py-4 font-semibold text-[#333]">
                  {order.customer}
                </td>
                <td className="py-4 text-[#555]">{order.type}</td>
                <td className="py-4 text-[#555]">{order.items}</td>
                <td className="py-4 text-[#555]">
                  {order.total.toLocaleString()} FCFA
                </td>
                <td className="py-4">
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}