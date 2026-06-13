import Image from "next/image";
import type { Metadata } from "next";
import { Shield, Cpu, Activity } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/common/reveal";
import { techStack } from "@/data/marketing/tech-stack";

export const metadata: Metadata = { title: "Technology" };

const missions = [
  {
    title: "Seamless Operations",
    description: "Ensuring high-performance, resilient infrastructure.",
    Icon: Activity,
  },
  {
    title: "DevOps Excellence",
    description: "Driving continuous innovation and efficiency.",
    Icon: Cpu,
  },
  {
    title: "Cybersecurity Leadership",
    description: "Protecting against emerging threats.",
    Icon: Shield,
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="The Technology Behind Our Solution"
        title="Innovation starts with the right technology"
        description="At Lumoshive, we integrate the best tools and frameworks to build seamless, secure, and future-ready solutions."
      />

      {/* Powering innovation */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Powering Innovation"
            title="Lumoshive: Powering Innovation"
          />
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              At Lumoshive, we are committed to harnessing the power of
              cutting-edge technology to develop scalable, secure, and
              high-performance digital solutions. Our approach combines the latest
              advancements in software development, cloud computing, and cyber
              security to ensure that our clients receive innovative solutions
              tailored to their business needs.
            </p>
            <p>
              Whether it&apos;s building enterprise-grade applications, optimizing
              business workflows, or enhancing digital security, our technology
              stack and best practices enable us to deliver results that matter.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-secondary/60">
        <div className="container-px mx-auto max-w-7xl py-20 lg:py-28">
          <SectionHeading
            eyebrow="Our Tech Stack"
            title="Industry-leading technologies"
            description="We carefully select and integrate proven technologies to create powerful and efficient software across different industries."
          />
          <div className="mt-14 flex flex-col gap-10">
            {techStack.map((group) => (
              <Reveal key={group.category}>
                <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex items-center gap-2.5 rounded-xl border border-border/70 bg-card px-4 py-2.5 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
                    >
                      <Image
                        src={item.file}
                        alt={item.name}
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                      />
                      <span className="text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 42 */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="bg-mesh absolute inset-0 opacity-30" />
        <div className="container-px relative mx-auto max-w-7xl py-20 lg:py-28">
          <SectionHeading
            invert
            eyebrow="Section 42"
            title="Guardians of Infrastructure, DevOps & Cybersecurity"
            description="A specialized unit dedicated to the reliability, security, and efficiency of our digital infrastructure — integrating Infrastructure, DevOps, and Cybersecurity into a single powerhouse."
          />

          <Reveal className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-lg italic text-accent">
              “Custodimus et Observamus a Tenebris in Silentio ut Lumen
              Protegamus”
            </p>
            <p className="mt-2 text-sm text-white/60">
              “We guard and watch from the darkness in silence to protect the
              light.”
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-3">
            {missions.map(({ title, description, Icon }) => (
              <StaggerItem key={title} className="h-full">
                <Card className="h-full border-white/10 bg-white/5 p-7 text-white backdrop-blur-sm">
                  <Icon className="h-9 w-9 text-accent" />
                  <h3 className="mt-5 font-heading text-lg font-semibold">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
