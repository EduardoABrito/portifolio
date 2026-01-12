import { Page, PageContent, PageHeader } from "@/components/page";
import { CardSkill } from "./components";
import {
  CloudIcon,
  DatabaseIcon,
  LayoutIcon,
  ServerIcon,
} from "@/components/icons";

const skils = [
  {
    title: "Front-end",
    description:
      "Interfaces reativas e de alta performance com Next.js, React e Tailwind CSS, focadas na melhor experiência de usuário.",
    icon: <LayoutIcon fontSize={50} />,
  },
  {
    title: "Back-end",
    description:
      "Desenvolvimento de APIs escaláveis e microsserviços robustos utilizando todo o poder do NestJS e TypeScript.",
    icon: <ServerIcon fontSize={50} />,
  },
  {
    title: "Database & ORMs",
    description:
      "Modelagem eficiente com PostgreSQL e SQL Server, utilizando Prisma e TypeORM para integridade dos dados.",
    icon: <DatabaseIcon fontSize={50} />,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Implantação em ambiente AWS, orquestração com Kubernetes/Docker e esteiras de CI/CD para entregas contínuas.",
    icon: <CloudIcon fontSize={50} />,
  },
];

export default function Home() {
  return (
    <Page>
      <PageHeader title="Sobre mim" />
      <PageContent>
        <div className="space-y-3 text-foreground-700 text-lg leading-relaxed">
          <p>
            Olá! Sou <strong>Eduardo Brito</strong>. Minha imersão na tecnologia
            começou cedo, no ensino médio técnico no <strong>COTEMIG</strong>, e
            hoje estou finalizando Engenharia de Software na{" "}
            <strong>PUC Minas</strong>. Essa trajetória moldou minha visão de
            como construir softwares que resolvem problemas reais.
          </p>

          <p>
            Atualmente, atuo como{" "}
            <strong>Full Stack Developer na Multilaser</strong>. Minha
            especialidade é a unificação da stack através do{" "}
            <strong>TypeScript</strong>: construo desde interfaces interativas
            com <strong>Next.js</strong> até arquiteturas complexas de
            microsserviços com <strong>NestJS</strong>. Esse domínio da
            linguagem em ambas as pontas me permite criar soluções coesas,
            tipadas e altamente manuteníveis.
          </p>

          <p>
            Um dos marcos da minha graduação foi liderar o desenvolvimento de um
            sistema de microchipagem para pets (saúde pública), projeto que
            conquistou o <strong>2º lugar</strong> de destaque no curso. Isso
            reflete meu compromisso não apenas com o código, mas com o impacto
            que ele gera.
          </p>

          <p>
            Com foco no futuro, sigo aprofundando meus estudos em arquitetura de
            software e <strong>Segurança da Informação</strong>, garantindo que
            minhas aplicações sejam tão seguras quanto performáticas.
          </p>
        </div>

        <h2 className="text-2xl font-bold capitalize mb-6 text-foreground-900">
          Minhas Competências
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skils.map((skill, index) => (
            <CardSkill key={index} {...skill} />
          ))}
        </div>
      </PageContent>
    </Page>
  );
}
