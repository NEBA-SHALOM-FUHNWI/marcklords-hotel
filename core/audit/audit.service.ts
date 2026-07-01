import { AuditRecord } from "./audit.types";

const auditLog: AuditRecord[] = [];

export const auditService = {
  log(record: AuditRecord) {
    auditLog.push(record);

    console.log("[AUDIT]", record);
  },

  getAll() {
    return auditLog;
  },

  getByEntity(entity: string, entityId: string) {
    return auditLog.filter(
      (log) =>
        log.entity === entity &&
        log.entityId === entityId
    );
  },

  getByEmployee(employeeId: string) {
    return auditLog.filter(
      (log) => log.employeeId === employeeId
    );
  },
};