import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { academy, academyNav, courseCategories } from "@/lib/academy";

export function AcademyFooter() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <Image
              src={academy.logoWhite}
              alt={academy.name}
              width={450}
              height={91}
              className="h-10 w-auto object-contain"
            />
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Lumoshive Academy adalah tempat belajar seru buat kamu yang mau jadi
              Professional IT dan siap bersaing di dunia digital! Belajar langsung
              praktek dengan teknologi terkini.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              Menu
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {academyNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              Course
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {courseCategories.slice(1).map((cat) => (
                <li key={cat}>
                  <Link
                    href="/academy/program"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              Location
            </h3>
            <div className="mt-5 flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-primary-foreground/70">
                {academy.address.join(" ")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-primary-foreground/60">
          Copyright © 2025 by PT. Lumos Inisiatif Indonesia
        </div>
      </div>
    </footer>
  );
}
