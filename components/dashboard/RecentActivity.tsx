import { Clock3 } from "lucide-react";

import { recentActivity } from "@/lib/mock-data/activity";

export function RecentActivity() {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
        Activity
      </p>

      <h3 className="mt-2 font-heading text-2xl font-bold text-[#1F5E4B]">
        Recent Activity
      </h3>

      <div className="mt-6 space-y-6">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#1F5E4B]/10">
              <Clock3 className="h-5 w-5 text-[#1F5E4B]" />
            </div>

            <div>
              <h4 className="font-semibold text-[#333]">
                {activity.title}
              </h4>

              <p className="mt-1 text-sm text-[#666]">
                {activity.description}
              </p>

              <p className="mt-2 text-xs text-[#999]">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}