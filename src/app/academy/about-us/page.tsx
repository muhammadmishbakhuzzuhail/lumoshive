import Image from "next/image";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/common/reveal";
import { aboutIntro, vision, missions, aboutValues } from "@/data/academy/about";
import { mentors } from "@/data/academy/alumni";

export const metadata: Metadata = { title: "About Us" };

export default function AcademyAboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Mengenal Lumoshive Academy"
        title="Bukan Sekadar Coding, Karena Teknologi Butuh Lebih dari Sekadar Kode!"
        description="Tempat belajar seru buat kamu yang mau jadi Professional IT dan siap bersaing di dunia digital."
      />

      {/* Apa itu */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Image
              src="/assets/academy/ui/images/about-us/image-1.png"
              alt="Lumoshive Academy"
              width={640}
              height={480}
              className="w-full rounded-2xl object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Mengenal Lumoshive Academy"
              title="Apa Itu Lumoshive Academy"
            />
            <Reveal className="mt-5 text-base leading-relaxed text-muted-foreground">
              <p>{aboutIntro}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visi misi */}
      <section className="bg-secondary/60">
        <div className="container-px mx-auto max-w-7xl py-20 lg:py-28">
          <SectionHeading
            eyebrow="Mengenal Lumoshive Academy"
            title="Visi dan Misi Lumoshive Academy"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full border-border/70 p-8">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Our Vision
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {vision}
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full border-border/70 p-8">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Our Mission
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {missions.map((m) => (
                    <li key={m} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-muted-foreground">{m}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <SectionHeading
          eyebrow="Kenapa Lumoshive Academy"
          title="Level Up Skill & Soft Skills"
          description="Lebih dari sekadar materi teknis — kami siapkan kamu untuk dunia kerja nyata."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutValues.map((v) => (
            <StaggerItem key={v.title} className="h-full">
              <Card className="h-full border-border/70 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                  <Image
                    src={v.icon}
                    alt=""
                    width={26}
                    height={26}
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Mentors */}
      <section className="bg-secondary/60">
        <div className="container-px mx-auto max-w-7xl py-20 lg:py-28">
          <SectionHeading
            eyebrow="Tim Kami"
            title="Mentor Berpengalaman"
            description="Belajar langsung dari praktisi yang berpengalaman di industri."
          />
          <Stagger className="mx-auto mt-14 grid max-w-3xl gap-8 sm:grid-cols-3">
            {mentors.map((src, i) => (
              <StaggerItem key={src}>
                <div className="overflow-hidden rounded-2xl border border-border/60 shadow-md">
                  <Image
                    src={src}
                    alt={`Mentor ${i + 1}`}
                    width={360}
                    height={420}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
