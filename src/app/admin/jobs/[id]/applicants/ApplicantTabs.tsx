"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { QueryParams, Tabs } from "./types";
import { cn } from "@/lib/utils";

const ApplicantTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsTab = searchParams.get("tab");
  const [queryParams, setQueryParams] = useState<QueryParams>({
    tab: Tabs.all,
  });

  useEffect(() => {
    const queryString = new URLSearchParams(queryParams).toString();
    // console.log(queryString);
    router.push(`${pathname}?${queryString}`);
  }, [queryParams]);

  return (
    <div className="my-3 flex items-center justify-between">
      <div className="w-fit space-x-2 rounded-full bg-muted p-1 text-xs font-medium">
        <button
          onClick={() => setQueryParams({ ...queryParams, tab: Tabs.all })}
          className={cn(
            "rounded-full px-2 py-1 shadow",
            searchParamsTab === Tabs.all ? "bg-primary text-white" : "",
          )}
        >
          All
        </button>
        <button
          onClick={() => setQueryParams({ ...queryParams, tab: Tabs.fit })}
          className={cn(
            "rounded-full px-2 py-1 shadow",
            searchParamsTab === Tabs.fit ? "bg-primary text-white" : "",
          )}
        >
          Good Fit
        </button>
        <button
          onClick={() => setQueryParams({ ...queryParams, tab: Tabs.mayBe })}
          className={cn(
            "rounded-full px-2 py-1 shadow",
            searchParamsTab === Tabs.mayBe ? "bg-primary text-white" : "",
          )}
        >
          MayBe
        </button>
        <button
          onClick={() => setQueryParams({ ...queryParams, tab: Tabs.rejected })}
          className={cn(
            "rounded-full px-2 py-1 shadow",
            searchParamsTab === Tabs.rejected ? "bg-primary text-white" : "",
          )}
        >
          Rejected
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 rounded-lg border border-gray-500 px-2 ring-gray-300">
        <input
          value={queryParams.q}
          onChange={(e) =>
            setQueryParams({ ...queryParams, q: e.target.value })
          }
          className="w-full bg-transparent py-1 outline-none focus:outline-none"
          placeholder="Search..."
        />
        <Search className="text-primary" />
      </div>
    </div>
  );
};

export default ApplicantTabs;
