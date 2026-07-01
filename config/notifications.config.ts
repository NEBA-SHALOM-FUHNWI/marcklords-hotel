/**
 * ============================================================================
 * File: notifications.config.ts
 * Platform: Project Atlas
 *
 * Description:
 * Controls notification channels for cloned hotel deployments.
 * ============================================================================
 */

export const notificationConfig = {
  enabled: true,

  channels: {
    inApp: true,
    email: true,
    sms: false,
    whatsapp: false,
  },

  events: {
    guestCheckedIn: true,
    guestCheckedOut: true,
    bookingCreated: true,
    paymentRecorded: true,
    roomCleaningCompleted: true,
  },
};