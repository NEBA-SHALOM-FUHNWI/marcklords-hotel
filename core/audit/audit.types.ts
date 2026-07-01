/**
 * ============================================================================
 * Project Atlas
 * Audit Record Type
 * ============================================================================
 */

export interface AuditRecord {
  id: string;

  timestamp: Date;

  employeeId: string;

  employeeName: string;

  department: string;

  workstation: string;

  action: string;

  entity: string;

  entityId: string;

  oldValue?: unknown;

  newValue?: unknown;

  metadata?: Record<string, unknown>;
}