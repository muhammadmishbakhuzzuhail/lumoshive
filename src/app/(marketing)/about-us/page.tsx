import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/common/reveal";
import { leaders, achievements, solutions } from "@/data/marketing/team";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Lumoshive"
        title="Driving digital transformation in Indonesia"
        description="Established in 2019, PT Lumos Inisiatif Indonesia — better known as Lumoshive — is a technology resource provider and software house committed to revolutionizing businesses through technology."
      />

      {/* Mission */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl" />
              <Image
                src="/assets/images/about-us/image.jpg"
                alt="Lumoshive"
                width={720}
                height={520}
                className="relative rounded-2xl border border-border/60 object-cover shadow-xl"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Mission"
              title="Helping businesses adapt to changing times"
            />
            <Reveal className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                We are committed to helping businesses adapt to changing times
                through innovative digital solutions. By transforming conventional
                paper-based processes into modern and efficient digital systems, we
                open new opportunities for business growth and sustainability.
              </p>
              <p>
                We believe technology is the key to revolutionizing businesses — our
                mission is to help companies shift from conventional processes to
                modern, efficient, and innovative digital systems.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-secondary/60">
        <div className="container-px mx-auto max-w-7xl py-20 lg:py-28">
          <SectionHeading
            eyebrow="Our Solution"
            title="What we deliver"
            description="By leveraging the latest advancements in technology — software frameworks, cloud computing, AI, and data analytics — Lumoshive offers a range of services."
          />
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
            {solutions.map((solution) => (
              <StaggerItem key={solution.title} className="h-full">
                <Card className="flex h-full flex-col gap-4 border-border/70 p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10">
                    <Image
                      src={solution.image}
                      alt=""
                      width={30}
                      height={30}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {solution.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="bg-mesh absolute inset-0 opacity-30" />
        <div className="container-px relative mx-auto max-w-7xl py-16 lg:py-20">
          <Stagger className="grid gap-8 sm:grid-cols-3">
            {achievements.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="font-heading text-5xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-white/70">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet the leadership"
          description="A passionate team of experts committed to crafting innovative digital solutions and turning ideas into impactful experiences."
        />
        <Stagger className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-3">
          {leaders.map((leader) => (
            <StaggerItem key={leader.name}>
              <div className="group text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl border border-border/60 shadow-md">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="220px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {leader.name}
                </h3>
                <p className="text-sm text-accent">{leader.role}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
