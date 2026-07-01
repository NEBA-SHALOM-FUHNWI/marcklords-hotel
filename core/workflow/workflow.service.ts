import { bookingWorkflow } from "./booking.workflow";
import { roomWorkflow } from "./room.workflow";
import { billingWorkflow } from "./billing.workflow";
import { restaurantWorkflow } from "./restaurant.workflow";
import { housekeepingWorkflow } from "./housekeeping.workflow";

const workflows = {
  booking: bookingWorkflow,
  room: roomWorkflow,
  billing: billingWorkflow,
  restaurant: restaurantWorkflow,
  housekeeping: housekeepingWorkflow,
};

export const workflowService = {
  canTransition(
    workflow: keyof typeof workflows,
    from: string,
    to: string
  ) {
    const transitions = workflows[workflow] as Record<string, readonly string[]>;

    return transitions[from]?.includes(to) ?? false;
  },

  getAllowedTransitions(
    workflow: keyof typeof workflows,
    state: string
  ) {
    const transitions = workflows[workflow] as Record<string, readonly string[]>;

    return transitions[state] ?? [];
  },
};