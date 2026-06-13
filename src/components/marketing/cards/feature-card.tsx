import Image from "next/image";
import { Card } from "@/components/ui/card";
import type { Feature } from "@/data/marketing/features";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card className="group relative h-full overflow-hidden border-border/70 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-xl hover:shadow-primary/5">
      {/* subtle gradient sheen on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/[0.07] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex flex-col gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 transition-colors group-hover:bg-accent/15 group-hover:ring-accent/30">
          <Image
            src={feature.icon}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </Card>
  );
}
