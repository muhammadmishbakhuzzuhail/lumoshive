import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";

export function BeasiswaCta() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 lg:py-24">
      <Reveal className="relative overflow-hidden rounded-3xl bg-primary text-white">
        <div className="bg-mesh absolute inset-0 opacity-40" />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid items-center gap-8 p-10 lg:grid-cols-2 lg:p-14">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Full Beasiswa
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Buka kesempatan upgrade skill kamu dengan akses kelas full beasiswa
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">
              Program beasiswa ini dirancang untuk kamu yang berkomitmen, penuh
              semangat, dan ingin memperluas pengetahuan di bidang teknologi—tanpa
              harus khawatir soal biaya pendidikan.
            </p>
            <Button
              size="lg"
              className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
              render={<Link href="/academy/beasiswa" />}
            >
              Daftar Beasiswa
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative hidden justify-self-end lg:block">
            <Image
              src="/assets/academy/ui/images/home/beasiswa.png"
              alt="Beasiswa Lumoshive Academy"
              width={420}
              height={420}
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
