import Image from "next/image";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { academyFaq } from "@/data/academy/testimonials";

export function Faq() {
  return (
    <section className="bg-secondary/60">
      <div className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Frequently Asked Questions"
              title="Masih ada pertanyaan?"
              description="Beberapa hal yang sering ditanyakan calon peserta sebelum bergabung."
            />
            <div className="mt-8 hidden lg:block">
              <Image
                src="/assets/academy/ui/images/home/faq.png"
                alt=""
                width={420}
                height={420}
                className="w-full max-w-sm object-contain"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion className="w-full">
              {academyFaq.map((item, i) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${i}`}
                  className="rounded-xl border border-border/70 bg-background px-5 mb-3"
                >
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
