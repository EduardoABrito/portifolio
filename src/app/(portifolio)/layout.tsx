import { Navbar } from "@/components/navbar/navbar";
import { Sidebar } from "@/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row gap-6 p-6">
      <Sidebar />
      <section className="rounded-2xl border border-divider bg-content1 p-6 flex-1 relative">
        <Navbar />
        {children}
      </section>
    </main>
  );
}
