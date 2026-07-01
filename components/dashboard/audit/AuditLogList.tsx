import { FileClock } from "lucide-react";

import { auditService } from "@/core/audit/audit.service";

export function AuditLogList() {
  const logs = auditService.getAll();

  return (
    <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm">
      {logs.length === 0 ? (
        <p className="text-[#666]">
          No audit records yet. System actions will appear here.
        </p>
      ) : (
        <div className="space-y-4">
          {logs.map((log) => (
            <div
              key={log.id}
              className="rounded-2xl bg-[#F8F7F3] p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                  <FileClock className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-[#1F5E4B]">
                    {log.action}
                  </h3>

                  <p className="mt-1 text-sm text-[#666]">
                    {log.employeeName} · {log.department} · {log.workstation}
                  </p>

                  <p className="mt-2 text-xs text-[#999]">
                    {log.timestamp.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}