export const ProfileContactItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-content2 text-foreground-500">
      {icon}
    </div>

    <div className="text-sm">
      <p className="text-foreground-500">{label}</p>
      <div className="text-foreground">{value}</div>
    </div>
  </div>
);
