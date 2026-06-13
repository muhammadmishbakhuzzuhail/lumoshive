import { Hero } from "@/components/marketing/sections/hero";
import { About } from "@/components/marketing/sections/about";
import { TeamCta } from "@/components/marketing/sections/team-cta";
import { ActivitySection } from "@/components/marketing/sections/activity";
import { Testimonials } from "@/components/marketing/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TeamCta />
      <ActivitySection />
      <Testimonials />
    </>
  );
}
