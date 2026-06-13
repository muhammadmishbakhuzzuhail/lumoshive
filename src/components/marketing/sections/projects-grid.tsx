"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { projects, projectCategories, type Project } from "@/data/marketing/projects";

export function ProjectsGrid() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

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
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <h3 className="mt-1.5 font-heading text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <button
                  onClick={() => setSelected(project)}
                  className="mt-4 self-start text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Show Detail →
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-card shadow-2xl md:grid-cols-2"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative min-h-[220px] bg-secondary">
                <Image
                  src={selected.detail}
                  alt={selected.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex max-h-[90vh] flex-col gap-4 overflow-y-auto p-7">
                <div className="flex h-10 items-center">
                  <Image
                    src={selected.logo}
                    alt=""
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div>
                  <Badge className="mb-2 bg-accent text-accent-foreground hover:bg-accent">
                    {selected.category}
                  </Badge>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {selected.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {selected.description}
                </p>
                <div>
                  <p className="mb-3 text-sm font-semibold text-foreground">Features</p>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {selected.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
