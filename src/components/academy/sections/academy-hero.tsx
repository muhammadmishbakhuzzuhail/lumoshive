"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { academy } from "@/lib/academy";
import { heroHighlights } from "@/data/academy/benefits";

export function AcademyHero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="bg-mesh absolute inset-0 opacity-40" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-sm"
          >
            IT Program Solution
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]"
          >
            Bukan Sekadar Coding,{" "}
            <span className="text-accent">Jadilah Developer yang Dicari Industri</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Kuasai skill, bangun karier impianmu! Belajar langsung praktek dengan
            teknologi terkini bersama mentor berpengalaman.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              render={<Link href="/academy/program" />}
            >
              Lihat Kelas
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
              render={
                <Link
                  href={academy.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Get Started
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
          >
            {heroHighlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-white/80">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20">
                  <Check className="h-3 w-3 text-accent" />
                </span>
                {h}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-2xl" />
          <Image
            src="/assets/academy/ui/images/home/master.png"
            alt="Lumoshive Academy"
            width={620}
            height={620}
            priority
            className="relative w-full object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
