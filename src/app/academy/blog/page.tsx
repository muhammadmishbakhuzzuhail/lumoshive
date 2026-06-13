import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { BlogGrid } from "@/components/academy/sections/blog-grid";

export const metadata: Metadata = { title: "Blog" };

export default function AcademyBlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Temukan Insight Berharga di Sini!"
        description="Artikel, tips, dan cerita seputar dunia teknologi dan pengembangan karier IT."
      />
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <BlogGrid />
      </section>
    </>
  );
}
