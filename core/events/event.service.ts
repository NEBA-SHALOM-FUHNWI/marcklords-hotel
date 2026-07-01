import { eventBus } from "./event-bus";
import { PlatformEvent } from "./event.types";
import { auditService } from "../audit/audit.service";
import { notificationService } from "../notifications/notification.service";

export const eventService = {
  emit(event: PlatformEvent, payload?: unknown) {

  console.log(`[EVENT]: ${event}`, payload);

  auditService.log({
    id: crypto.randomUUID(),
    timestamp: new Date(),

    employeeId: "SYSTEM",
    employeeName: "System",

    department: "Platform",

    workstation: "Event Engine",

    action: event,

    entity: "Platform",

    entityId: "SYSTEM",

    metadata: {
      payload,
    },
  });
  if (event === "GUEST_CHECKED_OUT") {
  notificationService.send(
    "inApp",
    "housekeeping",
    "Guest Checked Out",
    "A guest has checked out. Please review the room for housekeeping.",
    { event, payload }
  );
}

if (event === "PAYMENT_RECORDED") {
  notificationService.send(
    "inApp",
    "finance",
    "Payment Recorded",
    "A guest payment has been recorded.",
    { event, payload }
  );
}

if (event === "RESTAURANT_ORDER_CREATED") {
  notificationService.send(
    "inApp",
    "restaurant",
    "New Restaurant Order",
    "A new restaurant order has been created.",
    { event, payload }
  );
}

  eventBus.publish(event, payload);
},

  on(event: PlatformEvent, handler: (payload: unknown) => void) {
    eventBus.subscribe(event, handler);
  },
};