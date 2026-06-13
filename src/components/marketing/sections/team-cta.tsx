import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";

export function TeamCta() {
  return (
    <section className="bg-secondary/60">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-6 bg-accent" />
            Meet Our Team
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            The people driving our company forward
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Behind our success is a dedicated and experienced team. With expertise,
            creativity, and innovation, we are ready to bring your vision to life.
            Get to know the people driving our company forward!
          </p>
          <Button
            size="lg"
            className="mt-8 bg-primary hover:bg-primary/90"
            render={<Link href="/about-us" />}
          >
            See Our Team
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl">
              <Image
                src="/assets/images/home/our-team.png"
                alt="The Lumoshive team"
                width={720}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
