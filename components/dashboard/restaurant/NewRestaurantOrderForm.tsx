"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { foodOutlets, menuItems } from "@/lib/mock-data/restaurant";


export function NewRestaurantOrderForm() {
  const [orderType, setOrderType] = useState("Room Service");
  const [outletId, setOutletId] = useState("");
  const [selectedItemId, setSelectedItemId] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [submitted, setSubmitted] = useState(false);

const selectedItem = menuItems.find(
  (item) => item.id === Number(selectedItemId)
);

const orderTotal = selectedItem
  ? selectedItem.price * Number(quantity || 1)
  : 0;  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  console.log("Restaurant Order Created:", {
    outletId,
    orderType,
    selectedItem,
    quantity,
    orderTotal,
  });

  setSubmitted(true);
};
if (submitted) {
  return (
    <div className="mt-8 rounded-[2rem] bg-white p-10 text-center shadow-sm">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
        ✅
      </div>

      <h2 className="mt-6 font-heading text-3xl font-bold text-[#1F5E4B]">
        Order Created Successfully
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-[#555]">
        The restaurant order has been created and is ready for kitchen or service review.
      </p>

      <button
        type="button"
        onClick={() => setSubmitted(false)}
        className="mt-8 rounded-full bg-[#1F5E4B] px-8 py-3 font-semibold text-white hover:bg-[#063D2E]"
      >
        Create Another Order
      </button>
    </div>
  );
}
  return (
    <form className="mt-8 rounded-[2rem] bg-white p-8 shadow-sm" onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
  <label className="text-sm font-semibold text-[#1F5E4B]">
    F&B Outlet
  </label>

  <select
    value={outletId}
    onChange={(e) => setOutletId(e.target.value)}
    className="mt-2 w-full rounded-2xl border p-4"
  >
    <option value="">Select outlet</option>

    {foodOutlets.map((outlet) => (
      <option key={outlet.id} value={outlet.id}>
        {outlet.name}
      </option>
    ))}
  </select>
</div>
        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Order Type
          </label>

          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
            className="mt-2 w-full rounded-2xl border p-4"
          >
            <option>Room Service</option>
            <option>Dine-in</option>
            <option>Takeaway</option>
          </select>
        </div>

        {orderType === "Room Service" && (
          <div>
            <label className="text-sm font-semibold text-[#1F5E4B]">
              Room Number
            </label>

            <select className="mt-2 w-full rounded-2xl border p-4">
              <option>Select Room</option>
              <option>101</option>
              <option>102</option>
              <option>201</option>
              <option>203</option>
            </select>
          </div>
        )}

        {orderType === "Dine-in" && (
          <div>
            <label className="text-sm font-semibold text-[#1F5E4B]">
              Table Number
            </label>

            <input
              className="mt-2 w-full rounded-2xl border p-4"
              placeholder="Table Number"
            />
          </div>
        )}

        {orderType === "Takeaway" && (
          <div>
            <label className="text-sm font-semibold text-[#1F5E4B]">
              Customer Name
            </label>

            <input
              className="mt-2 w-full rounded-2xl border p-4"
              placeholder="Optional"
            />
          </div>
        )}
    <div className="mt-8 grid gap-6 md:grid-cols-2">
  <div>
    <label className="text-sm font-semibold text-[#1F5E4B]">
      Menu Item
    </label>

    <select
      value={selectedItemId}
      onChange={(e) => setSelectedItemId(e.target.value)}
      className="mt-2 w-full rounded-2xl border p-4"
    >
      <option value="">Select menu item</option>

      {menuItems
        .filter((item) => item.status === "Available")
        .map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}, {item.price.toLocaleString()} FCFA
          </option>
        ))}
    </select>
  </div>

  <div>
    <label className="text-sm font-semibold text-[#1F5E4B]">
      Quantity
    </label>

    <input
      type="number"
      min="1"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      className="mt-2 w-full rounded-2xl border p-4"
    />
  </div>
</div>    
      </div>
{selectedItem && (
  <div className="mt-8 rounded-2xl bg-[#F8F7F3] p-5">
    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
      Order Summary
    </p>

    <div className="mt-4 flex items-center justify-between">
      <span className="text-[#555]">
        {selectedItem.name} × {quantity}
      </span>

      <span className="font-heading text-2xl font-bold text-[#1F5E4B]">
        {orderTotal.toLocaleString()} FCFA
      </span>
    </div>
  </div>
)}
      <Button type="submit"
        className="mt-8 rounded-full bg-[#1F5E4B] px-8"
      >
        Create Order
      </Button>
    </form>
  );
}