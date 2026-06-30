"use client";



import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { RoomsTable } from "@/components/dashboard/rooms/RoomsTable";
import { BedDouble, Brush, CheckCircle2, Wrench } from "lucide-react";
import { DashboardStatCard } from "@/components/dashboard/DashboardStatCard";
import { roomService } from "@/lib/services/room.service";
import { SearchInput } from "@/components/dashboard/shared/SearchInput";
import { FilterSelect } from "@/components/dashboard/shared/FilterSelect";
import { useState } from "react";

export default function RoomsManagementPage() {
const rooms = roomService.getAllRooms();

const availableRooms = rooms.filter((room) => room.status === "Available");
const occupiedRooms = rooms.filter((room) => room.status === "Occupied");
const cleaningRooms = rooms.filter((room) => room.status === "Cleaning");
const maintenanceRooms = rooms.filter((room) => room.status === "Maintenance");


const [search, setSearch] = useState("");
const [floor, setFloor] = useState("");
const [type, setType] = useState("");
const [status, setStatus] = useState("");


const filteredRooms = rooms.filter((room) => {
  const matchesSearch = room.number
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesFloor = floor
    ? `Floor ${room.floor}` === floor
    : true;

  const matchesType = type ? room.type === type : true;

  const matchesStatus = status ? room.status === status : true;

  return matchesSearch && matchesFloor && matchesType && matchesStatus;
});
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Room Management
          </p>

          <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
            Rooms
          </h1>

          <p className="mt-3 text-[#555]">
            Manage room inventory, room status, prices, capacity, and housekeeping state.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
  <SearchInput placeholder="Search room number..." 
    value={search}
    onChange={setSearch}
  />

  <div className="flex flex-wrap gap-3">
    <FilterSelect
      label="All Floors"
      options={["Floor 1", "Floor 2", "Floor 3"]}
        value={floor}
        onChange={setFloor}
    />

    <FilterSelect
      label="All Types"
      options={["Standard", "Deluxe", "Executive Suite"]}
      value={type}
      onChange={setType}
    />
   

    <FilterSelect
      label="All Status"
      options={["Available", "Occupied", "Cleaning", "Reserved", "Maintenance", "Dirty"]}
      value={status}
      onChange={setStatus}
    />
  </div>
</div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  <DashboardStatCard
    title="Available Rooms"
    value={String(availableRooms.length)}
    description="Rooms ready for guest assignment."
    icon={CheckCircle2}
  />

  <DashboardStatCard
    title="Occupied Rooms"
    value={String(occupiedRooms.length)}
    description="Rooms currently occupied by guests."
    icon={BedDouble}
  />

  <DashboardStatCard
    title="Cleaning"
    value={String(cleaningRooms.length)}
    description="Rooms currently being cleaned."
    icon={Brush}
  />

  <DashboardStatCard
    title="Maintenance"
    value={String(maintenanceRooms.length)}
    description="Rooms unavailable due to maintenance."
    icon={Wrench}
  />
</div>
      <RoomsTable rooms={filteredRooms} />
    </DashboardLayout>
  );
}