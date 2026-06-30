import { notFound } from "next/navigation";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { guests } from "@/lib/mock-data/guests";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GuestDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const guest = guests.find((item) => item.id === Number(id));

  if (!guest) {
    notFound();
  }

  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          Guest Profile
        </p>

        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          {guest.name}
        </h1>

        <p className="mt-3 text-[#555]">
          {guest.code} · {guest.status}
        </p>
      </div>
    </DashboardLayout>
  );
}