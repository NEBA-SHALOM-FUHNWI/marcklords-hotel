import { Bell } from "lucide-react";

import { notificationService } from "@/core/notifications/notification.service";

export function NotificationsList() {
  const notifications = notificationService.getAll();

  return (
    <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm">
      {notifications.length === 0 ? (
        <p className="text-[#666]">
          No notifications yet. New operational alerts will appear here.
        </p>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex gap-4 rounded-2xl bg-[#F8F7F3] p-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F5E4B]/10 text-[#1F5E4B]">
                <Bell className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-[#1F5E4B]">
                  {notification.title}
                </h3>

                <p className="mt-1 text-sm text-[#666]">
                  {notification.message}
                </p>

                <p className="mt-2 text-xs text-[#999]">
                  {notification.createdAt.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}