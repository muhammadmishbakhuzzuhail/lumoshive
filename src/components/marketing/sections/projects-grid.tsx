"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { projects, projectCategories } from "@/data/marketing/projects";

export function ProjectsGrid() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <h3 className="mt-1.5 font-heading text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
