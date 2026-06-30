export const foodOutlets = [
  {
    id: 1,
    name: "Main Restaurant",
    type: "Restaurant",
    active: true,
  },
  {
    id: 2,
    name: "Room Service",
    type: "Room Service",
    active: true,
  },
];

export const menuItems = [
  {
    id: 1,
    name: "Grilled Chicken",
    category: "Main Dish",
    price: 8500,
    status: "Available",
  },
  {
    id: 2,
    name: "Fried Rice",
    category: "Main Dish",
    price: 6000,
    status: "Available",
  },
  {
    id: 3,
    name: "Ndole and Plantain",
    category: "Local Dish",
    price: 7000,
    status: "Available",
  },
  {
    id: 4,
    name: "Fresh Juice",
    category: "Drinks",
    price: 2500,
    status: "Available",
  },
  {
    id: 5,
    name: "Breakfast Plate",
    category: "Breakfast",
    price: 5000,
    status: "Unavailable",
  },
];

export const restaurantOrders = [
  {
    id: 1,
    orderCode: "ORD-2026-000001",
    customer: "Room 203",
    type: "Room Service",
    items: 3,
    total: 18500,
    status: "Pending",
  },
  {
    id: 2,
    orderCode: "ORD-2026-000002",
    customer: "Table 7",
    type: "Dine-in",
    items: 2,
    total: 12500,
    status: "Preparing",
  },
  {
    id: 3,
    orderCode: "ORD-2026-000003",
    customer: "Walk-in Guest",
    type: "Takeaway",
    items: 1,
    total: 7000,
    status: "Completed",
  },
];