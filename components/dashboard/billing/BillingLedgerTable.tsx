/**
 * ============================================================================
 * File: BillingLedgerTable.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Displays guest billing ledgers with charges, payments, and balances.
 * ============================================================================
 */

import { guestLedgers } from "@/lib/mock-data/billing";
import { billingService } from "@/lib/services/billing.service";
import Link from "next/link";

export function BillingLedgerTable() {
  return (
    <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead>
            <tr className="border-b text-sm text-[#777]">
              <th className="pb-4 font-semibold">Ledger</th>
              <th className="pb-4 font-semibold">Guest</th>
              <th className="pb-4 font-semibold">Booking</th>
              <th className="pb-4 font-semibold">Room</th>
              <th className="pb-4 font-semibold">Charges</th>
              <th className="pb-4 font-semibold">Paid</th>
              <th className="pb-4 font-semibold">Balance</th>
              <th className="pb-4 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {guestLedgers.map((ledger) => {
              const totalCharges = billingService.getTotalCharges(ledger.charges);
              const totalPaid = billingService.getTotalPayments(ledger.payments);
              const balance = billingService.getBalance(ledger.charges, ledger.payments);

              return (
                <tr key={ledger.id} className="border-b last:border-b-0">
                  <td className="py-4 font-semibold text-[#1F5E4B]">
                    {ledger.ledgerCode}
                  </td>

                  <td className="py-4 font-semibold text-[#333]">
                    {ledger.guest}
                  </td>

                  <td className="py-4 text-[#555]">
                    {ledger.bookingCode}
                  </td>

                  <td className="py-4 text-[#555]">
                    Room {ledger.roomNumber}
                  </td>

                  <td className="py-4 text-[#555]">
                    {totalCharges.toLocaleString()} FCFA
                  </td>

                  <td className="py-4 text-[#555]">
                    {totalPaid.toLocaleString()} FCFA
                  </td>

                  <td className="py-4 font-semibold text-[#1F5E4B]">
                    {balance.toLocaleString()} FCFA
                  </td>
                  <td className="py-4">
                    <Link href={`/dashboard/billing/${ledger.id}`} className="text-[#1F5E4B] hover:underline">
                      View Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}