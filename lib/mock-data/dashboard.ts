/**
 * ============================================================================
 * File: dashboard.ts
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Dashboard statistics used throughout the Hotel Management System.
 * Temporary mock data until PostgreSQL integration.
 * ============================================================================
 */
import { DashboardStats } from "@/types";


export const dashboardStats: DashboardStats = {
  totalRooms: 36,
  occupiedRooms: 24,
  availableRooms: 12,
  pendingBookings: 8,
  activeGuests: 31,
  restaurantOrders: 17,
  monthlyRevenue: "2.8M FCFA",
};