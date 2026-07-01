import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { NotificationsList } from "@/components/dashboard/notifications/NotificationsList";

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
          Notification Center
        </p>

        <h1 className="mt-2 font-heading text-4xl font-bold text-[#1F5E4B]">
          Notifications
        </h1>

        <p className="mt-3 text-[#555]">
          View system alerts, department updates, and operational notifications.
        </p>
      </div>

      <NotificationsList />
    </DashboardLayout>
  );
}