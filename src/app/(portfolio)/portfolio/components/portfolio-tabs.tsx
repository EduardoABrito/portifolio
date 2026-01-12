"use client";

import { Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import { PortfolioCard } from "./portfolio-card";

const categories = [
  { key: "all", label: "Geral", icon: "mdi:view-dashboard-outline" },
  { key: "web", label: "Web", icon: "mdi:web" },
  { key: "bot", label: "Bot", icon: "mdi:robot" },
  { key: "acadêmico", label: "Acadêmico", icon: "mdi:school" },
];

interface Project {
  name: string;
  description: string;
  image: string;
  demo?: string;
  category: string;
}

const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: "Site pessoal Next.js",
    image: "/portfolios/portfolio.png",
    demo: "#",
    category: "web",
  },
  {
    name: "Wolffox - Admin",
    description: "Sistema para gerenciar eventos",
    image: "/portfolios/wolffox-admin.png",
    demo: "#",
    category: "web",
  },
];

export function PortfolioTabs() {
  return (
    <Tabs
      aria-label="Categorias de Projetos"
      color="primary"
      variant="bordered"
      className="space-y-4"
    >
      {categories.map((cat) => (
        <Tab
          key={cat.key}
          title={
            <div className="flex items-center space-x-2">
              <Icon icon={cat.icon} className="w-5 h-5" />
              <span>{cat.label}</span>
            </div>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {projects
              .filter((p) => cat.key === "all" || p.category === cat.key)
              .map(PortfolioCard)}
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}
