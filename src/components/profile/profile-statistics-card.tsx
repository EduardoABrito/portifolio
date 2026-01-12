import { ProfileGithub } from "./profile-github";
import { ProfileMusic } from "./profile-music";

export const ProfileStatisticsCard = () => {
  return (
    <div className="rounded-2xl border border-divider bg-content1 p-6">
      <ProfileGithub />
      <div className="mt-6 border-t border-divider pt-6 space-y-4"></div>
      <ProfileMusic />
    </div>
  );
};
