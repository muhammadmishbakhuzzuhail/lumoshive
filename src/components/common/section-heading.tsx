import { cn } from "@/lib/utils";
import { Reveal } from "@/components/common/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  invert = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-balance sm:text-lg",
            invert ? "text-white/70" : "text-muted-foreground",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
