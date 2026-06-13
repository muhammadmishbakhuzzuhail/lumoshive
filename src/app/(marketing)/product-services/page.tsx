import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Stagger, StaggerItem } from "@/components/common/reveal";
import { problemGroups, servicePlans, products } from "@/data/marketing/products";

export const metadata: Metadata = { title: "Product & Services" };

export default function ProductServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovative Products & Expert Services"
        title="Solutions built to support your growth"
        description="We provide innovative solutions and high-quality services to support your business growth. With top-tier products and expert-driven services, we ensure efficiency and excellence in every solution we offer."
      />

      {/* Problems */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <SectionHeading
          eyebrow="We Understand Your Problem"
          title="The challenges we help you solve"
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problemGroups.map((group) => (
            <StaggerItem key={group.title} className="h-full">
              <Card className="h-full border-border/70 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10">
                    <Image
                      src={group.icon}
                      alt=""
                      width={26}
                      height={26}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Pricing */}
      <section className="bg-secondary/60">
        <div className="container-px mx-auto max-w-7xl py-20 lg:py-28">
          <SectionHeading
            eyebrow="What We Offer"
            title="Flexible engagement models"
            description="Choose the model that fits your team and budget."
          />
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
            {servicePlans.map((plan) => (
              <StaggerItem key={plan.name} className="h-full">
                <Card
                  className={cn(
                    "relative flex h-full flex-col border-border/70 p-8",
                    plan.highlight && "border-accent shadow-xl shadow-accent/10",
                  )}
                >
                  {plan.highlight && (
                    <Badge className="absolute right-6 top-6 bg-accent text-accent-foreground hover:bg-accent">
                      Popular
                    </Badge>
                  )}
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-xs text-muted-foreground">Start from</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-3xl font-bold text-primary">
                      {plan.startFrom}
                    </span>
                    <span className="text-sm text-muted-foreground">{plan.unit}</span>
                  </div>
                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={cn(
                      "mt-8 w-full",
                      plan.highlight
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary hover:bg-primary/90",
                    )}
                    render={<Link href="/contact-us" />}
                  >
                    Get Started
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Products */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <SectionHeading
          eyebrow="Our Product"
          title="Products built by Lumoshive"
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <StaggerItem key={product.name} className="h-full">
              <Card className="group h-full overflow-hidden border-border/70 p-0 pt-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {product.name}
                  </h3>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
