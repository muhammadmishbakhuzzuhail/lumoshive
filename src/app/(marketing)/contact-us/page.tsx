import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { ContactForm } from "@/components/marketing/sections/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s connect"
        description="Let's connect and explore how we can help your business grow."
      />

      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <Reveal className="flex flex-col gap-8">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Get in touch
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Have a project in mind or want to learn more about our services?
                Reach out and our team will respond shortly.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <a
                href={`tel:+${site.phoneRaw}`}
                className="group flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 transition-colors group-hover:bg-accent/15">
                  <Phone className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Phone
                  </span>
                  <span className="text-foreground">{site.phoneDisplay}</span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 transition-colors group-hover:bg-accent/15">
                  <Mail className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <span className="text-foreground">{site.email}</span>
                </span>
              </a>

              {[site.offices.headquarter, site.offices.general].map((office) => (
                <div key={office.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      {office.label}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">
                      {office.lines.join(", ")}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
