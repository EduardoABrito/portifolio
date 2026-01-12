interface PageHeaderProps {
  title: string;
}

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <header className="relative mb-10">
      <h1 className="text-2xl font-bold capitalize">{title}</h1>
      <span className="absolute bottom-0 top-12 left-0 block w-12 h-1 bg-primary/80 rounded-xl" />
    </header>
  );
};
