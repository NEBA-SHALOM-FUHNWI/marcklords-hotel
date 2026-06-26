import { Navbar } from "@/components/layout/Navbar";
import { TopBar } from "@/components/layout/TopBar";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F3]">
      <TopBar />
      <Navbar />

      <PageHeader
        label="Project Atlas"
        title="Welcome to Marcklords Hotel"
        subtitle="A modern hospitality experience built with comfort, professionalism, and digital convenience in mind."
      />

      <section className="py-20">
        <Container>
          <SectionTitle
            title="Navbar Component"
            subtitle="The main hotel navigation is now reusable and ready for all public pages."
          />
        </Container>
      </section>
    </main>
  );
}