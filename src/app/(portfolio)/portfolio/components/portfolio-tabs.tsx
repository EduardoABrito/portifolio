"use client";

import { Tabs, Tab } from "@heroui/tabs";
import { Icon } from "@iconify/react";
import { PortfolioCard } from "./portfolio-card";

const categories = [
  { key: "all", label: "Geral", icon: "mdi:view-dashboard-outline" },
  { key: "personal", label: "Pessoal", icon: "mdi:web" },
  {
    key: "prof",
    label: "Profissional",
    icon: "streamline-cyber:business-network",
  },
  { key: "bot", label: "Bot", icon: "mdi:robot" },
  { key: "scholl", label: "Acadêmico", icon: "mdi:school" },
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
    name: "Wolffox",
    description:
      "Plataforma web para gerenciamento e organização de eventos em tempo real.",
    image: "/portfolios/wolffox-public.png",
    demo: "https://wolffox.com.br",
    category: "prof",
  },
  {
    name: "Wolffox - Admin",
    description:
      "Painel administrativo do Wolffox para controlar eventos, usuários e relatórios.",
    image: "/portfolios/wolffox-admin.png",
    demo: "https://admin.wolffox.com.br",
    category: "prof",
  },
  {
    name: "Bem Estar Animal",
    description:
      "Sistema de microchipagem e gerenciamento de dados para clínicas veterinárias.",
    image: "/portfolios/bem-estar-animal.png",
    demo: "https://github.com/EduardoABrito/plf-es-2024-1-ti4-0658100-clinica-veterinaria",
    category: "scholl",
  },
  {
    name: "Loja DJI - Multilaser",
    description:
      "E-commerce de produtos DJI, focado em experiência de compra e catálogo online.",
    image: "/portfolios/loja-dji.png",
    category: "prof",
  },
  {
    name: "Portfolio Website",
    description:
      "Meu site pessoal desenvolvido com Next.js, mostrando meus projetos e skills.",
    image: "/portfolios/portfolio.png",
    demo: "#",
    category: "personal",
  },
  {
    name: "SyncWave",
    description:
      "Aplicação web para sincronização e gerenciamento de fluxos de trabalho.",
    image: "/portfolios/syncwave.png",
    demo: "https://dj.eduardoabrito.com.br/",
    category: "personal",
  },
  {
    name: "Lykos",
    description:
      "Assistente virtual com inteligência artificial para automatizar tarefas e interações.",
    image: "/portfolios/lykos.png",
    category: "bot",
  },
  {
    name: "PhotoMemory",
    description:
      "Galeria de fotos interativa, desenvolvida como projeto pessoal para exibição de imagens.",
    image: "/portfolios/photomemory.png",
    demo: "https://github.com/EduardoABrito/Projeto-Album-de-fotos",
    category: "scholl",
  },
  {
    name: "Di-Lanches",
    description:
      "Sistema de gestão completo para lanchonetes, incluindo pedidos e controle de estoque.",
    image: "/portfolios/dilanches.png",
    demo: "https://github.com/EduardoABrito/Di-lanches_TIS2_Engenharia_Software",
    category: "scholl",
  },
  {
    name: "Grafos em Cidades",
    description:
      "Trabalho acadêmico sobre grafos aplicado a cidades, com documentação detalhada.",
    image: "/portfolios/grafos.png",
    demo: "https://github.com/EduardoABrito/Grafos-Trabalho-Pratico/blob/master/Documenta%C3%A7%C3%A3o/Documentacao-Trabalho-Grafos.pdf",
    category: "scholl",
  },
  {
    name: "Todo List App",
    description:
      "Aplicativo simples para gerenciamento de tarefas diárias, com funcionalidades básicas.",
    image: "/portfolios/todo-list.png",
    demo: "https://github.com/EduardoABrito/Lab_Projeto_Software_ToDo_List",
    category: "scholl",
  },
  {
    name: "Portal Filmes",
    description:
      "Website de reviews e recomendações de filmes, com interface amigável.",
    image: "/portfolios/portal-filmes.png",
    demo: "https://github.com/EduardoABrito/Projeto_Site_filmes",
    category: "scholl",
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
