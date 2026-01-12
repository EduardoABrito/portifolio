import { Page, PageContent, PageHeader } from "@/components/page";
import { HardSkills, SoftSkills } from "./components";

export default function SoftSkilsPage() {
  return (
    <Page>
      <PageHeader title="Skills" />
      <PageContent>
        <HardSkills />
        <SoftSkills />
      </PageContent>
    </Page>
  );
}
