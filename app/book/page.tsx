import { BookingForm } from "@/components/booking/BookingForm";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageHeader } from "@/components/shared/PageHeader";

export default function BookPage() {
  return (
    <MainLayout>
      <PageHeader
        label="Booking Request"
        title="Book Your Stay"
        subtitle="Send us your booking request and our team will contact you to confirm availability."
      />

      <BookingForm />
    </MainLayout>
  );
}