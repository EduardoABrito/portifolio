import { Page, PageContent, PageHeader } from "@/components/page";
import { PortfolioTabs } from "./components/portfolio-tabs";

export default function PortfolioPage() {
  return (
    <Page>
      <PageHeader title="Portfólio" />
      <PageContent>
        <PortfolioTabs />
      </PageContent>
    </Page>
  );
}
