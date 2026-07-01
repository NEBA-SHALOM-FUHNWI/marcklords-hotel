"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type RecordPaymentFormProps = {
  ledgerId: string;
};

export function RecordPaymentForm({ ledgerId }: RecordPaymentFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const [payment, setPayment] = useState({
    amount: "",
    method: "Cash",
    reference: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Payment Recorded:", {
      ledgerId,
      ...payment,
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-8 rounded-[2rem] bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
          ✅
        </div>

        <h2 className="mt-6 font-heading text-3xl font-bold text-[#1F5E4B]">
          Payment Recorded Successfully
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-[#555]">
          The payment has been recorded for this guest ledger. The balance will update when connected to the database.
        </p>
        <Link
  href={`/dashboard/billing/${ledgerId}`}
  className="mt-8 inline-flex rounded-full bg-[#1F5E4B] px-8 py-3 font-semibold text-white hover:bg-[#063D2E]"
>
  Back to Ledger
</Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 max-w-3xl rounded-[2rem] bg-white p-8 shadow-sm"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Amount Paid
          </label>
          <input
            type="number"
            name="amount"
            value={payment.amount}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border p-4 outline-none"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Payment Method
          </label>
          <select
            name="method"
            value={payment.method}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border p-4 outline-none"
          >
            <option>Cash</option>
            <option>Mobile Money</option>
            <option>Orange Money</option>
            <option>Bank Transfer</option>
            <option>Card</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Reference Number
          </label>
          <input
            name="reference"
            value={payment.reference}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border p-4 outline-none"
            placeholder="Optional transaction reference"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-semibold text-[#1F5E4B]">
            Payment Note
          </label>
          <textarea
            name="note"
            value={payment.note}
            onChange={handleChange}
            rows={4}
            className="mt-2 w-full rounded-2xl border p-4 outline-none"
            placeholder="Optional note"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="mt-8 rounded-full bg-[#1F5E4B] px-10 hover:bg-[#063D2E]"
      >
        Record Payment
      </Button>
    </form>
  );
}