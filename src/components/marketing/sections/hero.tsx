"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Video background */}
      {/* The teaser has baked-in text/graphics; blur + scale turns it into an
          ambient backdrop so it doesn't compete with the hero copy. */}
      <video
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-[3px] brightness-[0.5]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/images/home/our-team.png"
      >
        <source src="/assets/video/teaser-lumoshive.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlays — kept dark/opaque so foreground copy stays legible */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-primary/70" />

      <div className="container-px relative mx-auto max-w-7xl py-32">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-sm"
          >
            Making Good Developers Great
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
          >
            Technology resources that transform your business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Lumoshive is a technology resource provider based in Jakarta and Batam,
            Indonesia — building secure, scalable, and future-ready digital
            solutions for modern businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              render={<Link href="/product-services" />}
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
              render={<Link href="/contact-us" />}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
