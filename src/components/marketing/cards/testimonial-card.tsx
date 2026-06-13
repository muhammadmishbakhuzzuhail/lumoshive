import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/data/marketing/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.company
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="flex h-full flex-col gap-6 border-border/70 p-7">
      <Quote className="h-9 w-9 shrink-0 text-accent" aria-hidden />
      <p className="flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
        “{testimonial.quote}”
      </p>
      <div className="flex items-center gap-3 border-t border-border/70 pt-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
          {initials}
        </div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.company}</p>
          <p className="text-xs text-muted-foreground">Client</p>
        </div>
      </div>
    </Card>
  );
}
