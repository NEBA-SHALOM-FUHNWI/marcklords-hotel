/**
 * ============================================================================
 * File: LoginForm.tsx
 * Project: Marcklords Hotel (Project Atlas)
 *
 * Description:
 * Staff login page for future hotel dashboard access.
 * Currently frontend-only and will later connect to authentication.
 * ============================================================================
 */

import Link from "next/link";
import { Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/hotel/Logo";
import { hotelConfig } from "@/config/hotel.config";

export function LoginForm() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F7F3] px-4 py-16">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl">
        <div className="mb-8 flex justify-center">
          <Logo showTagline />
        </div>

        <h1 className="text-center font-heading text-3xl font-bold text-[#1F5E4B]">
          Staff Login
        </h1>

        <p className="mt-3 text-center text-sm text-[#555]">
          Access the {hotelConfig.name} management dashboard.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="text-sm font-semibold text-[#1F5E4B]">
              Email Address
            </label>
            <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
              <Mail className="h-5 w-5 text-[#C9A227]" />
              <input
                type="email"
                placeholder="staff@marcklords.com"
                className="w-full outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-[#1F5E4B]">
              Password
            </label>
            <div className="mt-2 flex items-center gap-3 rounded-2xl border p-4">
              <Lock className="h-5 w-5 text-[#C9A227]" />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full outline-none"
              />
            </div>
          </div>

          <Link href="/dashboard">
            <Button className="h-12 w-full rounded-full bg-[#1F5E4B] hover:bg-[#063D2E]">
              Login to Dashboard
            </Button>
          </Link>
        </form>
      </div>
    </main>
  );
}