import { Card, CardBody } from "@heroui/card";

interface TimelineItem {
  title: string;
  period: string;
  description: string;
}

interface TimelineResumeProps {
  icon?: React.ReactNode;
  title: string;
  items: TimelineItem[];
}

export function TimelineResume({ icon, title, items }: TimelineResumeProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h2 className="text-2xl font-bold capitalize">{title}</h2>
      </div>
      <ol className="relative ml-5 border-l border-default-300 space-y-8">
        {items.map((item, index) => (
          <li key={index} className="relative pl-8">
            <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary border border-divider" />
            <Card shadow="none" className="border border-default-200">
              <CardBody className="space-y-2">
                <h4 className="font-semibold">{item.title}</h4>

                <span className="text-sm text-foreground/60">
                  {item.period}
                </span>

                <p className="text-sm text-foreground/80">{item.description}</p>
              </CardBody>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
