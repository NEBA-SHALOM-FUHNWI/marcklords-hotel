/**
 * ============================================================================
 * File: billing.service.ts
 * Project: Marcklords HMS
 *
 * Description:
 * Billing service for calculating charges, payments, and balances.
 * ============================================================================
 */

export const billingService = {
  getTotalCharges(charges: { amount: number }[]): number {
    return charges.reduce((sum, charge) => sum + charge.amount, 0);
  },

  getTotalPayments(payments: { amount: number }[]): number {
    return payments.reduce((sum, payment) => sum + payment.amount, 0);
  },

  getBalance(
    charges: { amount: number }[],
    payments: { amount: number }[]
  ): number {
    return this.getTotalCharges(charges) - this.getTotalPayments(payments);
  },
};