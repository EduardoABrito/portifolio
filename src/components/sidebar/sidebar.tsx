import { ProfileDataCard, ProfileStatisticsCard } from "../profile";

export const Sidebar = () => {
  return (
    <aside className="w-full lg:max-w-sm h-full space-y-5">
      <ProfileDataCard />
      <ProfileStatisticsCard />
    </aside>
  );
};
