/**
 * ============================================================================
 * File: features.config.ts
 * Platform: Project Atlas
 *
 * Description:
 * Controls which workstations and platform features are enabled.
 * When cloning the platform, this file can be customized for each hotel.
 * ============================================================================
 */

export const hotelFeatures = {
  // Core Workstations
  reception: true,
  bookings: true,
  guests: true,
  rooms: true,
  housekeeping: true,
  restaurant: true,
  billing: true,
  workforce: true,
  managementCenter: true,
  configurationCenter: true,

  // Hospitality Extensions
  laundry: false,
  transport: false,
  spa: false,
  gym: false,
  conference: false,
  miniBar: true,
  inventory: false,
  procurement: false,
  loyalty: false,

  // Platform Features
  multiBranch: false,
  auditLogs: true,
  notifications: true,
  notificationCenter: true,
  analytics: true,
  backups: true,
  auditCenter: true,
};