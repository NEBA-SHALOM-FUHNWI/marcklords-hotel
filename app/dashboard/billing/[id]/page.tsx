import { notFound } from "next/navigation";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { guestLedgers } from "@/lib/mock-data/billing";
import { billingService } from "@/lib/services/billing.service";
import Link from "next/link";


type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BillingDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const ledger = guestLedgers.find((item) => item.id === Number(id));

  if (!ledger) {
    notFound();
  }

  const totalCharges = billingService.getTotalCharges(ledger.charges);
  const totalPaid = billingService.getTotalPayments(ledger.payments);
  const balance = billingService.getBalance(ledger.charges, ledger.payments);

  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          Billing Details
        </p>

        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          {ledger.ledgerCode}
        </h1>

        <p className="mt-3 text-[#555]">
          {ledger.guest} · Room {ledger.roomNumber} · {ledger.bookingCode}
        </p>

      <div className="mt-6 flex flex-wrap gap-3">
  <Link
  href={`/dashboard/billing/${ledger.id}/payment`}
  className="rounded-full bg-[#1F5E4B] px-6 py-3 font-semibold text-white hover:bg-[#063D2E]"
>
  Record Payment
</Link>

  <button className="rounded-full border border-[#1F5E4B] px-6 py-3 font-semibold text-[#1F5E4B] hover:bg-[#1F5E4B] hover:text-white">
    Print Invoice
  </button>
</div>  
      <div className="mt-6 flex flex-wrap gap-3">
  <button className="rounded-full bg-[#1F5E4B] px-6 py-3 font-semibold text-white hover:bg-[#063D2E]">
    Record Payment
  </button>

  <button className="rounded-full border border-[#1F5E4B] px-6 py-3 font-semibold text-[#1F5E4B] hover:bg-[#1F5E4B] hover:text-white">
    Print Invoice
  </button>
</div>  
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#777]">Total Charges</p>
            <p className="mt-2 font-heading text-3xl font-bold text-[#1F5E4B]">
              {totalCharges.toLocaleString()} FCFA
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <p className="text-sm text-[#777]">Total Paid</p>
            <p className="mt-2 font-heading text-3xl font-bold text-[#1F5E4B]">
              {totalPaid.toLocaleString()} FCFA
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#063D2E] p-6 text-white shadow-sm">
            <p className="text-sm text-white/70">Balance Due</p>
            <p className="mt-2 font-heading text-3xl font-bold text-[#C9A227]">
              {balance.toLocaleString()} FCFA
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
  <div className="rounded-[2rem] bg-white p-6 shadow-sm">
    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
      Charges
    </p>

    <h2 className="mt-2 font-heading text-2xl font-bold text-[#1F5E4B]">
      Charge Breakdown
    </h2>

    <div className="mt-6 space-y-4">
      {ledger.charges.map((charge) => (
        <div
          key={charge.id}
          className="flex items-center justify-between rounded-2xl bg-[#F8F7F3] p-4"
        >
          <div>
            <p className="font-semibold text-[#333]">{charge.type}</p>
            <p className="text-sm text-[#777]">
              {charge.department} · {charge.description}
            </p>
          </div>

          <p className="font-semibold text-[#1F5E4B]">
            {charge.amount.toLocaleString()} FCFA
          </p>
        </div>
      ))}
    </div>
  </div>

  <div className="rounded-[2rem] bg-white p-6 shadow-sm">
    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
      Payments
    </p>

    <h2 className="mt-2 font-heading text-2xl font-bold text-[#1F5E4B]">
      Payment History
    </h2>

    <div className="mt-6 space-y-4">
      {ledger.payments.length > 0 ? (
        ledger.payments.map((payment) => (
          <div
            key={payment.id}
            className="flex items-center justify-between rounded-2xl bg-[#F8F7F3] p-4"
          >
            <p className="font-semibold text-[#333]">{payment.method}</p>

            <p className="font-semibold text-[#1F5E4B]">
              {payment.amount.toLocaleString()} FCFA
            </p>
          </div>
        ))
      ) : (
        <p className="rounded-2xl bg-[#F8F7F3] p-4 text-sm text-[#666]">
          No payments recorded yet.
        </p>
      )}
    </div>
  </div>
</div>
    </DashboardLayout>
  );
}