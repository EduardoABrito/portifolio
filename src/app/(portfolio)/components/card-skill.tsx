interface CardSkillProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const CardSkill = ({ title, description, icon }: CardSkillProps) => {
  return (
    <div
      className="bg-content2 h-full p-5 rounded-2xl border border-divider flex gap-4 hover:shadow-lg transition-shadow hover:border-primary/50 hover:bg-content2/70"
      key={title}
    >
      <div className="text-primary/70 items-end">{icon}</div>
      <div className="space-y-2">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm text-foreground-700">{description}</p>
      </div>
    </div>
  );
};
