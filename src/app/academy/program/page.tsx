import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { CourseList } from "@/components/academy/sections/course-list";

export const metadata: Metadata = { title: "Program" };

export default function AcademyProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="IT Program Solution"
        title="Bukan Sekadar Coding, Karena Teknologi Butuh Lebih dari Sekadar Kode!"
        description="Jelajahi seluruh program — Bootcamp, Mini Course, dan Live Series — di berbagai bidang teknologi."
      />
      <CourseList />
    </>
  );
}
