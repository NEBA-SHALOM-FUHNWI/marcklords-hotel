import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { BillingLedgerTable } from "@/components/dashboard/billing/BillingLedgerTable";
import { CircleDollarSign, CreditCard, ReceiptText } from "lucide-react";
import { DashboardStatCard } from "@/components/dashboard/DashboardStatCard";
import { guestLedgers } from "@/lib/mock-data/billing";
import { billingService } from "@/lib/services/billing.service";

export default function BillingPage() {

 const totalCharges = guestLedgers.reduce(
  (sum, ledger) => sum + billingService.getTotalCharges(ledger.charges),
  0
);

const totalPayments = guestLedgers.reduce(
  (sum, ledger) => sum + billingService.getTotalPayments(ledger.payments),
  0
);

const totalBalance = totalCharges - totalPayments; 
  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          Billing & Invoicing
        </p>

        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          Guest Account Ledger
        </h1>

        <p className="mt-3 text-[#555]">
          Track guest charges, invoices, payments, balances, and department-posted services.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
  <DashboardStatCard
    title="Total Charges"
    value={`${totalCharges.toLocaleString()} FCFA`}
    description="All posted guest charges."
    icon={ReceiptText}
  />

  <DashboardStatCard
    title="Total Payments"
    value={`${totalPayments.toLocaleString()} FCFA`}
    description="Payments received from guests."
    icon={CreditCard}
  />

  <DashboardStatCard
    title="Outstanding Balance"
    value={`${totalBalance.toLocaleString()} FCFA`}
    description="Amount still pending collection."
    icon={CircleDollarSign}
  />
</div>
      <BillingLedgerTable />
    </DashboardLayout>
  );
}