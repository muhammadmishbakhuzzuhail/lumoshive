import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Activity } from "@/data/marketing/activities";

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Card className="group h-full overflow-hidden border-border/70 p-0 pt-0 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
        <Badge className="absolute left-4 top-4 bg-accent text-accent-foreground hover:bg-accent">
          {activity.date}
        </Badge>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {activity.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {activity.description}
        </p>
      </div>
    </Card>
  );
}
