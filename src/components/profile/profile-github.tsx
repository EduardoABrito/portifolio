"use client";

import { getUserGithub } from "@/data/github.data";
import { environment } from "@/lib/environment";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Skeleton } from "@heroui/skeleton";

export const ProfileGithub = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["github-profile", environment.SOCIAL.GITHUB_USERNAME],
    queryFn: () =>
      getUserGithub({ username: environment.SOCIAL.GITHUB_USERNAME }),
  });

  if (isLoading) return <ProfileGithubSkeleton />;

  return (
    <div>
      <div className="flex items-center gap-4">
        <figure className="relative w-2/3 h-24">
          <Image
            src={data?.avatarUrl ?? ""}
            alt={environment.PERSONAL_ENVIRONMENT.NAME}
            fill
            className="object-cover rounded-2xl"
          />
        </figure>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <Icon icon="mdi:github" className="text-xl" />
            <h1 className="text-xl font-semibold text-foreground">
              {data?.name}
            </h1>
          </div>
          <p className="text-sm text-foreground-500 line-clamp-3">
            {data?.bio}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <ProfileGithubItem
          icon="mdi:source-repository"
          label="Repositórios"
          value={data?.publicRepos ?? 0}
          key="git-repository"
        />
        <ProfileGithubItem
          icon="mdi:account-group"
          label="Seguidores"
          value={data?.followers ?? 0}
          key="git-followers"
        />
        <ProfileGithubItem
          icon="mdi:account-arrow-right"
          label="Seguindo"
          value={data?.following ?? 0}
          key="git-following"
        />
      </div>
    </div>
  );
};

interface ProfileGithubItemProps {
  label: string;
  value: number;
  icon: string;
}

const ProfileGithubItem = ({ label, value, icon }: ProfileGithubItemProps) => {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-content2 px-2 py-3">
      <Icon icon={icon} className="text-xl text-primary/80" />
      <p className="text-lg font-semibold text-foreground">{value}</p>
      <span className="text-xs text-foreground-500">{label}</span>
    </div>
  );
};

export const ProfileGithubSkeleton = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4">
        <Skeleton className="w-1/3 h-24 rounded-2xl" />

        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-5 w-40 rounded-lg" />
          <Skeleton className="h-3 w-full rounded-lg" />
          <Skeleton className="h-3 w-2/3 rounded-lg" />
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 rounded-xl bg-content2 px-2 py-3"
          >
            <Skeleton className="h-6 w-6 rounded-md" />
            <Skeleton className="h-4 w-10 rounded-md" />
            <Skeleton className="h-3 w-16 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};
