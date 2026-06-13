"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // No backend wired up — this demonstrates the UX only.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/70 bg-card p-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="font-heading text-xl font-semibold text-foreground">
          Thank you!
        </h3>
        <p className="text-sm text-muted-foreground">
          Your message has been noted. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-7 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground" htmlFor="name">
            Name
          </label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-foreground" htmlFor="subject">
          Subject
        </label>
        <Input id="subject" name="subject" placeholder="How can we help?" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-foreground" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project…"
          className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="mt-2 bg-primary hover:bg-primary/90"
      >
        Submit
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
