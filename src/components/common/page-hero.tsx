import { Reveal } from "@/components/common/reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="bg-mesh absolute inset-0 opacity-30" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="container-px relative mx-auto flex min-h-[42vh] max-w-7xl flex-col justify-center py-24 lg:py-32">
        <Reveal className="flex max-w-3xl flex-col gap-5">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
