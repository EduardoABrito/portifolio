import { Icon } from "@iconify/react";

const skills = [
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "NestJS", icon: "logos:nestjs" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "React", icon: "logos:react" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "Prisma ORM", icon: "simple-icons:prisma" },
  { name: "AWS", icon: "logos:aws" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Kubernetes", icon: "logos:kubernetes" },
  { name: "RabbitMQ", icon: "logos:rabbitmq-icon" },
];

export const HardSkills = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold capitalize">Stack Tecnológica</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-3 rounded-2xl border border-default bg-content2 p-4 hover:border-primary hover:scale-105 transition-transform cursor-default"
          >
            <Icon icon={skill.icon} fontSize={40} />
            <span className="text-sm font-semibold text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
