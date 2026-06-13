import type { Metadata } from "next";
import Link from "next/link";
import { academy } from "@/lib/academy";
import { AcademyNavbar } from "@/components/academy/layout/academy-navbar";
import { AcademyFooter } from "@/components/academy/layout/academy-footer";
import { WhatsAppIcon } from "@/components/common/icons";

export const metadata: Metadata = {
  title: {
    default: `${academy.name} | Bootcamp IT ReactJS, Golang & AI`,
    template: `${academy.name} | %s`,
  },
  description: academy.description,
};

export default function AcademyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AcademyNavbar />
      <main className="flex-1">{children}</main>
      <AcademyFooter />
      <Link
        href={academy.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center gap-0 overflow-hidden rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-[width,transform] duration-300 hover:w-auto hover:gap-2 hover:px-5 hover:scale-105"
      >
        <WhatsAppIcon className="h-6 w-6 shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[120px] group-hover:opacity-100">
          Chat with Us
        </span>
      </Link>
    </>
  );
}
