import { ScrollShadow } from "@heroui/scroll-shadow";

export const PageContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="space-y-4">
      <ScrollShadow className="xl:max-h-[84vh]">{children}</ScrollShadow>
    </main>
  );
};
