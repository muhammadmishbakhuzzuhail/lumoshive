import { SectionHeading } from "@/components/common/section-heading";
import { ActivityCard } from "@/components/marketing/cards/activity-card";
import { Stagger, StaggerItem } from "@/components/common/reveal";
import { activities } from "@/data/marketing/activities";

export function ActivitySection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
      <SectionHeading
        eyebrow="Our Activity"
        title="Life at Lumoshive"
        description="More than work — we grow, give back, and celebrate together as one big family."
      />

      <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <StaggerItem key={activity.title} className="h-full">
            <ActivityCard activity={activity} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
