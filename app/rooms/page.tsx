import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { RoomsCatalog } from "@/components/home/Rooms/RoomsCatalog";

export default function RoomsPage() {
  return (
    <MainLayout>
      <PageHeader
        label="Accommodation"
        title="Rooms & Suites"
        subtitle="Explore comfortable room options designed for business travelers, families, and guests visiting Kumba."
      />

      <RoomsCatalog />
    </MainLayout>
  );
}