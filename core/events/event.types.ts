/**
 * ============================================================================
 * Project Atlas
 * Core Event Types
 * ============================================================================
 */

export type PlatformEvent =
  | "BOOKING_CREATED"
  | "BOOKING_CONFIRMED"
  | "GUEST_CHECKED_IN"
  | "GUEST_CHECKED_OUT"
  | "ROOM_MARKED_DIRTY"
  | "ROOM_CLEANING_STARTED"
  | "ROOM_CLEANED"
  | "RESTAURANT_ORDER_CREATED"
  | "RESTAURANT_ORDER_COMPLETED"
  | "CHARGE_POSTED"
  | "PAYMENT_RECORDED"
  | "INVOICE_GENERATED"
  | "EMPLOYEE_CREATED";