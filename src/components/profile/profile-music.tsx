"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { getNowPlaying } from "@/data/lastfm.data";
import { Skeleton } from "@heroui/skeleton";

export const ProfileMusic = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["music-now-playing"],
    queryFn: getNowPlaying,
    refetchInterval: 5_000,
  });

  if (isLoading) return <NowPlayingSkeleton />;

  if (!data) {
    return (
      <div className="flex items-center gap-3 rounded-2xl p-4">
        <Icon icon="logos:spotify" className="text-2xl " />
        <p className="text-sm text-foreground-500">Nada tocando agora</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src={data.albumImageUrl}
          alt={data.title}
          width={100}
          height={100}
          className="object-cover rounded-2xl border border-divider"
        />

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <div>
              <Icon icon="logos:spotify-icon" fontSize={17} />
            </div>
            <h1 className="text-lg font-semibold text-foreground line-clamp-1">
              {data.title}
            </h1>
          </div>

          <p className="text-sm text-foreground-500 line-clamp-1">
            {data.artist}
          </p>

          <span className="text-xs text-foreground-400">
            {data.isPlaying ? "🎧 Ouvindo agora" : "🕒 Última música"}
          </span>
        </div>
      </div>
    </div>
  );
};

export const NowPlayingSkeleton = () => {
  return (
    <div className="flex items-center gap-4 rounded-2xl">
      <Skeleton className="w-1/3 h-24 rounded-xl" />

      <div className="flex flex-col gap-2 flex-1">
        <Skeleton className="h-3 w-2/3 rounded-lg" />
        <Skeleton className="h-2 w-1/2 rounded-lg" />
        <Skeleton className="h-2 w-1/3 rounded-lg" />
      </div>
    </div>
  );
};
