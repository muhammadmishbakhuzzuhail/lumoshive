import { TopBar } from "@/components/marketing/layout/top-bar";
import { Navbar } from "@/components/marketing/layout/navbar";
import { Footer } from "@/components/marketing/layout/footer";
import { WhatsAppFab } from "@/components/marketing/layout/whatsapp-fab";

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
