"use client";

/**
 * ============================================================================
 * File: CheckOutSummary.tsx
 * Project: Marcklords HMS
 *
 * Description:
 * Shows check-out verification details before completing guest departure.
 * ============================================================================
 */

import Link from "next/link";

import { billingService } from "@/lib/services/billing.service";
import { guestLedgers } from "@/lib/mock-data/billing";
import { Booking } from "@/types";
import { useState } from "react";

type CheckOutSummaryProps = {
  booking: Booking;
};

export function CheckOutSummary({ booking }: CheckOutSummaryProps) {
  const [completed, setCompleted] = useState(false);
  const ledger = guestLedgers.find(
    (item) => item.roomNumber === booking.roomNumber
  );

  const balance = ledger
    ? billingService.getBalance(ledger.charges, ledger.payments)
    : 0;

  const canCheckOut = balance <= 0;
  if (completed) {
  return (
    <div className="mt-8 rounded-[2rem] bg-white p-10 text-center shadow-sm">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
        ✅
      </div>

      <h2 className="mt-6 font-heading text-3xl font-bold text-[#1F5E4B]">
        Check-Out Completed
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-[#555]">
        The guest has been checked out successfully. The room should now be marked for housekeeping.
      </p>
    </div>
  );
}

  return (
    <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Verification
      </p>

      <h2 className="mt-2 font-heading text-2xl font-bold text-[#1F5E4B]">
        Check-Out Summary
      </h2>

      <div className="mt-6 rounded-2xl bg-[#F8F7F3] p-5">
        <p className="text-sm text-[#777]">Outstanding Balance</p>
        <p className="mt-2 font-heading text-3xl font-bold text-[#1F5E4B]">
          {balance.toLocaleString()} FCFA
        </p>
      </div>

      {canCheckOut ? (
        <button
  onClick={() => setCompleted(true)}
  className="mt-6 rounded-full bg-[#1F5E4B] px-6 py-3 font-semibold text-white hover:bg-[#063D2E]"
>
  Complete Check-Out
</button>
      ) : (
        <div className="mt-6">
          <p className="text-sm text-red-600">
            This guest has an outstanding balance. Payment must be completed before check-out.
          </p>

          {ledger && (
            <Link
              href={`/dashboard/billing/${ledger.id}/payment`}
              className="mt-4 inline-flex rounded-full bg-[#1F5E4B] px-6 py-3 font-semibold text-white hover:bg-[#063D2E]"
            >
              Record Payment
            </Link>
          )}
        </div>
      )}
    </div>
  );
}