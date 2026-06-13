import Image from "next/image";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { Stagger, StaggerItem } from "@/components/common/reveal";
import { benefits } from "@/data/academy/benefits";

export function Benefits() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
      <SectionHeading
        eyebrow="Kenapa Harus Lumoshive Academy"
        title="Benefits Bootcamp Lumoshive Academy"
        description="Semua yang kamu butuhkan untuk berkembang dari pemula jadi developer yang siap kerja."
      />

      <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <StaggerItem key={b.title} className="h-full">
            <Card className="group h-full border-border/70 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-xl hover:shadow-primary/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20 transition-colors group-hover:bg-accent/20">
                <Image
                  src={b.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.description}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
