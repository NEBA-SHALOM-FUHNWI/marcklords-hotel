import { notificationConfig } from "@/config/notifications.config";
import { NotificationMessage, NotificationChannel } from "./notification.types";

const notifications: NotificationMessage[] = [];

export const notificationService = {
  send(
    channel: NotificationChannel,
    recipient: string,
    title: string,
    message: string,
    metadata?: Record<string, unknown>
  ) {
    if (!notificationConfig.enabled) return;

    if (!notificationConfig.channels[channel]) return;

    const notification: NotificationMessage = {
      id: crypto.randomUUID(),
      title,
      message,
      channel,
      recipient,
      createdAt: new Date(),
      read: false,
      metadata,
    };

    notifications.push(notification);

    console.log("[NOTIFICATION]", notification);
  },

  getAll() {
    return notifications;
  },

  getUnread() {
    return notifications.filter((item) => !item.read);
  },
};