import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { HousekeepingBoard } from "@/components/dashboard/housekeeping/HousekeepingBoard";
import { Brush, CheckCircle2, CircleAlert, Wrench } from "lucide-react";
import { DashboardStatCard } from "@/components/dashboard/DashboardStatCard";
import { roomService } from "@/lib/services/room.service";

export default function HousekeepingPage() {
const rooms = roomService.getAllRooms();

const cleanRooms = rooms.filter(
  (room) => room.housekeepingStatus === "Clean"
);

const dirtyRooms = rooms.filter(
  (room) => room.housekeepingStatus === "Dirty"
);

const inProgressRooms = rooms.filter(
  (room) => room.housekeepingStatus === "In Progress"
);

const outOfServiceRooms = rooms.filter(
  (room) => room.housekeepingStatus === "Out of Service"
);
  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          Housekeeping
        </p>


        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          Housekeeping Board
        </h1>

        <p className="mt-3 text-[#555]">
          Track dirty rooms, cleaning progress, maintenance rooms, and rooms ready for guests.
        </p>
      </div>
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  <DashboardStatCard
    title="Clean Rooms"
    value={String(cleanRooms.length)}
    description="Rooms ready for guests."
    icon={CheckCircle2}
  />

  <DashboardStatCard
    title="Dirty Rooms"
    value={String(dirtyRooms.length)}
    description="Rooms waiting for cleaning."
    icon={CircleAlert}
  />

  <DashboardStatCard
    title="In Progress"
    value={String(inProgressRooms.length)}
    description="Rooms currently being cleaned."
    icon={Brush}
  />

  <DashboardStatCard
    title="Out of Service"
    value={String(outOfServiceRooms.length)}
    description="Rooms unavailable for use."
    icon={Wrench}
  />
</div>  
      <HousekeepingBoard />
    </DashboardLayout>
  );
}