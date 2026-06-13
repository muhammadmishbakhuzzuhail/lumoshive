"use client";

import { SectionHeading } from "@/components/common/section-heading";
import { TestimonialCard } from "@/components/marketing/cards/testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/marketing/testimonials";

export function Testimonials() {
  return (
    <section className="bg-primary text-white">
      <div className="bg-mesh">
        <div className="container-px mx-auto max-w-7xl py-20 lg:py-28">
          <SectionHeading
            eyebrow="Testimonial"
            title="Trusted by teams who ship"
            description="What our clients say about working with Lumoshive."
            invert
          />

          <Carousel
            opts={{ align: "start", loop: true }}
            className="mx-auto mt-14 w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem
                  key={t.company}
                  className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full text-foreground">
                    <TestimonialCard testimonial={t} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-3">
              <CarouselPrevious className="static translate-y-0 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
              <CarouselNext className="static translate-y-0 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
