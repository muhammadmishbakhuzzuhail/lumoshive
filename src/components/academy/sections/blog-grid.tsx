"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts, blogCategories } from "@/data/academy/blog";

export function BlogGrid() {
  const [active, setActive] = useState<string>("All");
  const filtered =
    active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {blogCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((post) => (
            <motion.article
              key={post.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group h-full overflow-hidden border-border/70 p-0 pt-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute left-4 top-4 bg-accent text-accent-foreground hover:bg-accent">
                    {post.category}
                  </Badge>
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                  <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </Card>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
