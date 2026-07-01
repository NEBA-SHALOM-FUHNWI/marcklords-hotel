import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { AuditLogList } from "@/components/dashboard/audit/AuditLogList";

export default function AuditPage() {
  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          Audit Engine
        </p>

        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          Audit Logs
        </h1>

        <p className="mt-3 text-[#555]">
          Track important system actions, events, and operational changes.
        </p>
      </div>
        <AuditLogList />
    </DashboardLayout>
  );
}