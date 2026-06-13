import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/common/reveal";
import { academy } from "@/lib/academy";
import { scholarshipSteps, alumni } from "@/data/academy/alumni";

export const metadata: Metadata = { title: "Beasiswa" };

export default function AcademyBeasiswaPage() {
  return (
    <>
      <PageHero
        eyebrow="Full Beasiswa"
        title="Buka Kesempatan Upgrade Skill Kamu dengan Akses Kelas Full Beasiswa"
        description="Program beasiswa ini dirancang untuk kamu yang berkomitmen, penuh semangat, dan ingin memperluas pengetahuan di bidang teknologi & industri kreatif—tanpa harus khawatir soal biaya pendidikan."
      />

      {/* CTA buttons */}
      <section className="container-px mx-auto max-w-7xl py-12">
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            render={
              <Link href={academy.loginUrl} target="_blank" rel="noopener noreferrer" />
            }
          >
            Daftar Beasiswa
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={
              <Link href={academy.whatsapp} target="_blank" rel="noopener noreferrer" />
            }
          >
            Konsultasi Gratis
          </Button>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-secondary/60">
        <div className="container-px mx-auto max-w-7xl py-20 lg:py-28">
          <SectionHeading
            eyebrow="5 Langkah Mudah"
            title="Daftar Beasiswa Lumoshive Academy"
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {scholarshipSteps.map((s) => (
              <StaggerItem key={s.step} className="h-full">
                <Card className="h-full border-border/70 p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-heading text-lg font-bold text-accent-foreground">
                    {s.step}
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Alumni */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <SectionHeading
          eyebrow="Alumni Kelas Lumoshive Academy"
          title="Dari Niat Belajar, Sampai Sukses Berkarir Nyata"
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {alumni.map((a) => (
            <StaggerItem key={a.name + a.photo} className="h-full">
              <Card className="flex h-full flex-col gap-4 border-border/70 p-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={a.photo}
                    alt={a.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{a.name}</p>
                    <p className="text-xs text-accent">{a.batch}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  “{a.quote}”
                </p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 flex justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            render={
              <Link href={academy.loginUrl} target="_blank" rel="noopener noreferrer" />
            }
          >
            Daftar Sekarang
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </section>
    </>
  );
}
