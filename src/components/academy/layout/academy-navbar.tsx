"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { academy, academyNav } from "@/lib/academy";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function AcademyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/academy" ? pathname === "/academy" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-background",
      )}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-[4.5rem]">
        <Link href="/academy" className="flex items-center" aria-label={academy.name}>
          <Image
            src={academy.logo}
            alt={academy.name}
            width={365}
            height={80}
            priority
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {academyNav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
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
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            render={
              <Link
                href={academy.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Get Started
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            className="lg:hidden"
            render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src={academy.logo}
                  alt={academy.name}
                  width={365}
                  height={80}
                  className="h-9 w-auto object-contain"
                />
              </SheetTitle>
            </SheetHeader>
            <ul className="mt-2 flex flex-col gap-1 px-2">
              {academyNav.map((item) => (
                <li key={item.label}>
                  <SheetClose
                    render={
                      <Link
                        href={item.href}
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
                    href={academy.loginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants(),
                      "w-full bg-accent text-accent-foreground hover:bg-accent/90",
                    )}
                  />
                }
              >
                Get Started
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
