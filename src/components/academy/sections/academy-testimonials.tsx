"use client";

import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { academyTestimonials } from "@/data/academy/testimonials";

export function AcademyTestimonials() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
      <SectionHeading
        eyebrow="Testimonial"
        title="Apa Kata Alumni Kami"
        description="Cerita nyata dari peserta yang sudah merasakan belajar di Lumoshive Academy."
      />

      <Carousel opts={{ align: "start", loop: true }} className="mt-14 w-full">
        <CarouselContent className="-ml-4">
          {academyTestimonials.map((t) => (
            <CarouselItem
              key={t.name}
              className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="flex h-full flex-col gap-5 border-border/70 p-7">
                <Quote className="h-8 w-8 shrink-0 text-accent" aria-hidden />
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </p>
                <div className="flex items-center gap-3 border-t border-border/70 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-accent">{t.batch}</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex justify-center gap-3">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
}
