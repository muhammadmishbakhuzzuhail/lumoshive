import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/common/reveal";
import { ProjectsGrid } from "@/components/marketing/sections/projects-grid";
import { clients, analysisTools } from "@/data/marketing/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work & Clients"
        title="Projects we are proud of"
        description="A selection of mobile apps, dashboards, and websites we have delivered for clients across industries."
      />

      {/* Clients marquee */}
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="container-px mx-auto max-w-7xl py-12">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Trusted by leading organizations
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center grayscale transition-all hover:grayscale-0"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={130}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <SectionHeading
          eyebrow="Our Projects"
          title="Explore our portfolio"
          className="mb-12"
        />
        <ProjectsGrid />
      </section>

      {/* Analysis tools */}
      <section className="bg-secondary/60">
        <div className="container-px mx-auto max-w-7xl py-20 lg:py-28">
          <SectionHeading
            eyebrow="Quality & Security"
            title="Tools we use for analysis & testing"
            description="We rely on industry-standard tooling to keep every delivery secure and high quality."
          />
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
            {analysisTools.map((tool) => (
              <StaggerItem key={tool.name} className="h-full">
                <Card className="flex h-full flex-col gap-4 border-border/70 p-7">
                  <div className="flex h-16 items-center">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      width={120}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {tool.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {tool.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10 text-center text-sm text-muted-foreground">
            …and many more across our DevSecOps practice.
          </Reveal>
        </div>
      </section>
    </>
  );
}
