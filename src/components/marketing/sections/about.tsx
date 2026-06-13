import { SectionHeading } from "@/components/common/section-heading";
import { FeatureCard } from "@/components/marketing/cards/feature-card";
import { Stagger, StaggerItem } from "@/components/common/reveal";
import { features } from "@/data/marketing/features";

export function About() {
  return (
    <section id="about" className="container-px mx-auto max-w-7xl py-20 lg:py-28">
      <SectionHeading
        eyebrow="About Us"
        title="A technology resource provider built for transformation"
        description="PT. Lumos Inisiatif Indonesia, also known as Lumoshive, is a technology resource provider based in Jakarta and Batam, Indonesia. We are a group of geeky technical developers who will help you transform your old-schooled, plain, paper-based businesses into new, trendy, innovative business utilizing all available technology."
      />

      <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <StaggerItem key={feature.title} className="h-full">
            <FeatureCard feature={feature} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
