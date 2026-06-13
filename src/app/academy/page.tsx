import { AcademyHero } from "@/components/academy/sections/academy-hero";
import { Benefits } from "@/components/academy/sections/benefits";
import { AcademyTestimonials } from "@/components/academy/sections/academy-testimonials";
import { CourseList } from "@/components/academy/sections/course-list";
import { BeasiswaCta } from "@/components/academy/sections/beasiswa-cta";
import { Faq } from "@/components/academy/sections/faq";

export default function AcademyHome() {
  return (
    <>
      <AcademyHero />
      <Benefits />
      <AcademyTestimonials />
      <CourseList />
      <BeasiswaCta />
      <Faq />
    </>
  );
}
