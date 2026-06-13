import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { XIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/common/icons";

const socialLinks = [
  { href: site.socials.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.socials.x, label: "X", Icon: XIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: site.socials.instagram, label: "Instagram", Icon: InstagramIcon },
];

export function TopBar() {
  return (
    <div className="hidden bg-primary text-primary-foreground md:block">
      <div className="container-px mx-auto flex h-10 max-w-7xl items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-6 w-6 items-center justify-center rounded-full text-primary-foreground/80 transition-colors hover:bg-white/10 hover:text-accent"
            >
              <Icon className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 text-primary-foreground/85 transition-colors hover:text-accent"
          >
            <Mail className="h-3.5 w-3.5" />
            {site.email}
          </a>
          <a
            href={`tel:+${site.phoneRaw}`}
            className="flex items-center gap-2 text-primary-foreground/85 transition-colors hover:text-accent"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
