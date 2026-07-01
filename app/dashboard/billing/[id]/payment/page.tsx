import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { RecordPaymentForm } from "@/components/dashboard/billing/RecordPaymentForm";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RecordPaymentPage({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          Guest Payment
        </p>

        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          Record Payment
        </h1>

        <p className="mt-3 text-[#555]">
          Record a payment for Guest Ledger #{id}.
        </p>
      </div>
        <RecordPaymentForm ledgerId={id} />
    </DashboardLayout>
  );
}