"use client";

import Skeleton from "@/components/skeleton";
import { useSearchParams } from "next/navigation";

export default function SearchLoading() {
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("q");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Results for: <span className="font-semibold">{searchQuery}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
      </div>
    </div>
  );
}
