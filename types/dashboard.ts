/**
 * ============================================================================
 * Dashboard statistics type.
 * ============================================================================
 */

export interface DashboardStats {
  totalRooms: number;
  occupiedRooms: number;
  availableRooms: number;
  pendingBookings: number;
  activeGuests: number;
  restaurantOrders: number;
  monthlyRevenue: string;
}