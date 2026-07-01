import { PlatformEvent } from "./event.types";

type EventHandler = (payload: unknown) => void;

class EventBus {
  private handlers: Record<string, EventHandler[]> = {};

  subscribe(event: PlatformEvent, handler: EventHandler) {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }

    this.handlers[event].push(handler);
  }

  publish(event: PlatformEvent, payload?: unknown) {
    const listeners = this.handlers[event];

    if (!listeners) return;

    listeners.forEach((handler) => handler(payload));
  }
}

export const eventBus = new EventBus();