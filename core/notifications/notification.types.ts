export type NotificationChannel =
  | "inApp"
  | "email"
  | "sms"
  | "whatsapp";

export interface NotificationMessage {
  id: string;
  title: string;
  message: string;
  channel: NotificationChannel;
  recipient: string;
  createdAt: Date;
  read: boolean;
  metadata?: Record<string, unknown>;
}