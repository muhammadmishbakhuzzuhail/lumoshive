export const site = {
  name: "Lumoshive",
  legalName: "PT. Lumos Inisiatif Indonesia",
  tagline: "Making Good Developers Great",
  description:
    "Lumoshive (PT. Lumos Inisiatif Indonesia) is a technology resource provider based in Jakarta and Batam, Indonesia — helping businesses transform with modern, innovative software.",
  email: "inquiry@lumoshive.com",
  phoneDisplay: "+62 812-1275-1096",
  phoneRaw: "6281212751096",
  whatsapp: "https://wa.me/6281212751096",
  academy: "https://academy.lumoshive.com/",
  socials: {
    facebook: "https://www.facebook.com/lumoshive",
    x: "https://x.com/lumoshive",
    linkedin: "https://www.linkedin.com/company/lumoshive",
    instagram: "https://www.instagram.com/lumoshive",
  },
  offices: {
    headquarter: {
      label: "Headquarter",
      lines: [
        "Centennial Tower, 29th Floor Unit D & E",
        "Jl. Jend. Gatot Subroto Kav 24-25",
        "Jakarta Selatan, 12930, Indonesia",
      ],
    },
    general: {
      label: "General Office",
      lines: [
        "Green Garden Blok Z4 No.15, RT.14/RW.8",
        "Jakarta Barat, 11520, Indonesia",
      ],
    },
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Technology", href: "/technology" },
  { label: "Projects", href: "/projects" },
  { label: "Our Academy", href: "/academy" },
  { label: "Product & Services", href: "/product-services" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "About Us", href: "/about-us" },
] as const;
