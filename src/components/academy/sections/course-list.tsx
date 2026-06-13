"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { courseTypes, courseCategories, academy } from "@/lib/academy";

// The live academy loads courses from a backend; with no API the catalog is
// empty, so we faithfully reproduce the original "no class available" state.
export function CourseList() {
  const [type, setType] = useState<string>("All");
  const [category, setCategory] = useState<string>("All");

  return (
    <section className="bg-secondary/60">
      <div className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <SectionHeading
          eyebrow="Course List"
          title="Browse Our Comprehensive Course List"
          description="Pilih jalur belajar yang paling cocok dengan tujuan kariermu."
        />

        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {courseTypes.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  type === t
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:text-foreground",
                )}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {courseCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
                  category === c
                    ? "border-accent bg-accent/15 text-foreground"
                    : "border-border bg-background text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Empty state — mirrors the live site */}
        <div className="mt-14 flex flex-col items-center gap-5 rounded-3xl border border-dashed border-border bg-background py-16 text-center">
          <Image
            src="/assets/academy/ui/images/program/no-course-available.png"
            alt=""
            width={180}
            height={180}
            className="h-40 w-auto object-contain opacity-90"
          />
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">
              Maaf, untuk saat ini belum ada Kelas
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Jangan sedih! Nantikan kelas berikutnya atau daftar kelas lainnya
              sekarang.
            </p>
          </div>
          <Button
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            render={
              <Link href={academy.loginUrl} target="_blank" rel="noopener noreferrer" />
            }
          >
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
}
