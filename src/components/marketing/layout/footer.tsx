import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { XIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { href: site.socials.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.socials.x, label: "X", Icon: XIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: site.socials.instagram, label: "Instagram", Icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className="relative mt-auto bg-primary text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand + newsletter */}
          <div className="flex flex-col gap-6">
            <Image
              src="/assets/logo-white.png"
              alt={site.name}
              width={398}
              height={71}
              className="h-9 w-auto object-contain"
            />
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              We are a group of geeky technical developers who will help you
              transform your old-schooled, plain, paper-based businesses utilizing
              all available technology.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-primary-foreground/85 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
              Explore
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={
                      "external" in item && item.external ? "_blank" : undefined
                    }
                    rel={
                      "external" in item && item.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Information */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
                Newsletter
              </h3>
              <p className="mt-4 text-sm text-primary-foreground/70">
                Subscribe to receive news, updates, free stuff and new releases by
                email. We don&apos;t do spam.
              </p>
              <form className="mt-4 flex gap-2" action="#">
                <Input
                  type="email"
                  required
                  placeholder="Your email"
                  aria-label="Email address"
                  className="border-white/20 bg-white/10 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button
                  type="submit"
                  className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        {/* Information / offices */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-xs uppercase tracking-wider text-primary-foreground/50">
                Phone
              </p>
              <a
                href={`tel:+${site.phoneRaw}`}
                className="text-sm text-primary-foreground/85 hover:text-accent"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-xs uppercase tracking-wider text-primary-foreground/50">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-primary-foreground/85 hover:text-accent"
              >
                {site.email}
              </a>
            </div>
          </div>
          {[site.offices.headquarter, site.offices.general].map((office) => (
            <div key={office.label} className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/50">
                  {office.label}
                </p>
                <p className="text-sm leading-relaxed text-primary-foreground/85">
                  {office.lines.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-white/10" />

        <p className="text-center text-xs text-primary-foreground/60">
          Copyright © 2025 {site.legalName} — Powered by SDM GG
        </p>
      </div>
    </footer>
  );
}
