export const academy = {
  name: "Lumoshive Academy",
  tagline: "Bukan Sekadar Coding, Jadilah Developer yang Dicari Industri",
  description:
    "Bootcamp IT ReactJS, Golang & AI untuk pemula & fresh graduate. Belajar langsung praktek dengan teknologi terkini bersama mentor berpengalaman.",
  loginUrl: "https://academy.lumoshive.com/member/login",
  whatsapp: "https://wa.me/6281212751096",
  logo: "/assets/academy/ui/logo.png",
  logoWhite: "/assets/academy/ui/logo-white.png",
  address: [
    "Komp. Ruko Green Garden Blk. Z,",
    "Jl. Panjang Arteri Klp. Dua Raya No.5",
    "No.15, RT.5/RW.8, Kedoya Utara, Kec. Kb. Jeruk,",
    "Kota Jakarta Barat, DKI Jakarta 11520.",
  ],
} as const;

export const academyNav = [
  { label: "Home", href: "/academy" },
  { label: "Program", href: "/academy/program" },
  { label: "Beasiswa", href: "/academy/beasiswa" },
  { label: "About Us", href: "/academy/about-us" },
  { label: "Blog", href: "/academy/blog" },
] as const;

export const courseTypes = ["All", "Bootcamp", "Mini Course", "Live Series"] as const;

export const courseCategories = [
  "All",
  "Frontend",
  "UI UX",
  "Backend",
  "Machine Learning & AI",
  "Fullstack",
  "Data Analyst",
  "Content Creative",
] as const;
