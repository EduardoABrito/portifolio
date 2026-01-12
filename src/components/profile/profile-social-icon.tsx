interface ProfileSocialIconProps {
  icon: React.ReactNode;
  href: string;
}

export const ProfileSocialIcon = ({ icon, href }: ProfileSocialIconProps) => (
  <li>
    <a
      href={href}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-content2 text-foreground-500 hover:bg-primary hover:text-primary-foreground transition"
      target={"_blank"}
    >
      {icon}
    </a>
  </li>
);
