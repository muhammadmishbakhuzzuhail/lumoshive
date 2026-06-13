"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/site";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-background/0",
      )}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-[4.5rem]">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Image
            src="/assets/logo.png"
            alt={site.name}
            width={512}
            height={91}
            priority
            className="h-7 w-auto object-contain sm:h-8"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                target={"external" in item && item.external ? "_blank" : undefined}
                rel={
                  "external" in item && item.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary",
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            className="bg-primary hover:bg-primary/90"
            render={<Link href="/contact-us" />}
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="lg:hidden"
            render={
              <Button variant="ghost" size="icon" aria-label="Open menu" />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/assets/logo.png"
                  alt={site.name}
                  width={512}
                  height={91}
                  className="h-7 w-auto object-contain"
                />
              </SheetTitle>
            </SheetHeader>
            <ul className="mt-2 flex flex-col gap-1 px-2">
              {nav.map((item) => (
                <li key={item.label}>
                  <SheetClose
                    render={
                      <Link
                        href={item.href}
                        target={
                          "external" in item && item.external
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          "external" in item && item.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                          isActive(item.href)
                            ? "bg-primary/5 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-primary",
                        )}
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-4">
              <SheetClose
                render={
                  <Link
                    href="/contact-us"
                    className={cn(
                      buttonVariants(),
                      "w-full bg-primary hover:bg-primary/90",
                    )}
                  />
                }
              >
                Get in Touch
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
