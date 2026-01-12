import { PageHeader, PageContent, Page } from "@/components/page";
import { TimelineResume } from "./components";
import { BookOpenIcon, BriefcaseIcon } from "@/components/icons";

export default function ResumePage() {
  return (
    <Page>
      <PageHeader title="Currículo" />
      <PageContent>
        <TimelineResume
          title="Educação"
          icon={<BookOpenIcon fontSize={18} />}
          items={[
            {
              title: "Engenharia de Software | PUC Minas",
              period: "2022 — Presente",
              description:
                "Foco em Arquitetura de Software e Sistemas Distribuídos. Destaque para o projeto premiado de microchipagem utilizando tecnologias web modernas.",
            },
            {
              title: "Técnico em Informática | Colégio COTEMIG",
              period: "2018 — 2020",
              description:
                "Ensino médio integrado ao técnico. Base sólida em lógica de programação e primeiros passos no desenvolvimento de aplicações práticas.",
            },
          ]}
        />

        <TimelineResume
          title="Experiência Profissional"
          icon={<BriefcaseIcon fontSize={18} />}
          items={[
            {
              title: "Full Stack Developer | Multilaser",
              period: "2023 — Presente",
              description:
                "Desenvolvimento e manutenção de microsserviços críticos para o pós-venda. Utilizo NestJS e TypeScript no back-end para criar APIs escaláveis, e Next.js no front-end, garantindo uma stack unificada e tipada.",
            },
            {
              title: "Full Stack Trainee | Multilaser",
              period: "Mar 2023 — Set 2023",
              description:
                "Início da trajetória atuando na correção de bugs e implementação de novas features em sistemas internos, com foco em boas práticas e Clean Code.",
            },
            {
              title: "Estágio de Suporte & Monitoria | COTEMIG",
              period: "2019",
              description:
                "Atuação como monitor voluntário no Code Club, ensinando lógica de programação para crianças, e estágio em suporte técnico na instituição.",
            },
          ]}
        />
      </PageContent>
    </Page>
  );
}
