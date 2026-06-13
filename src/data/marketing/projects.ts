export type Project = {
  title: string;
  image: string;
  category: "Mobile Apps" | "CMS Dashboard" | "Website Landing Page";
};

export const projects: Project[] = [
  { title: "WIP & Finish Harvest", image: "/assets/images/projects/wip.jpg", category: "CMS Dashboard" },
  { title: "TPM Sprayer", image: "/assets/images/projects/ggf-tpm-sprayer.jpg", category: "Mobile Apps" },
  { title: "SkilledIn", image: "/assets/images/projects/skilledin.jpg", category: "Website Landing Page" },
  { title: "Bakoel Omah", image: "/assets/images/projects/bakoel-omah.jpg", category: "Website Landing Page" },
  { title: "Human Resource Information System", image: "/assets/images/projects/linkit-hris.jpg", category: "CMS Dashboard" },
  { title: "Document Management Information System", image: "/assets/images/projects/linkit-dmis.jpg", category: "CMS Dashboard" },
  { title: "Fotogrit", image: "/assets/images/projects/fotogrit.jpg", category: "Website Landing Page" },
  { title: "Dashboard Gamification", image: "/assets/images/projects/gamotions.jpg", category: "CMS Dashboard" },
  { title: "SDM GG", image: "/assets/images/projects/sdm-gg.jpg", category: "CMS Dashboard" },
];

export const projectCategories = [
  "All",
  "Mobile Apps",
  "CMS Dashboard",
  "Website Landing Page",
] as const;

export type ClientLogo = { name: string; logo: string };

export const clients: ClientLogo[] = [
  { name: "LinkIT 360", logo: "/assets/images/projects/clients/client-linkit.svg" },
  { name: "HDS", logo: "/assets/images/projects/clients/client-hds.svg" },
  { name: "Vaya", logo: "/assets/images/projects/clients/client-vaya.svg" },
  { name: "Bank Jateng", logo: "/assets/images/projects/clients/client-bank-jateng.png" },
  { name: "Gudang Garam Tbk", logo: "/assets/images/projects/clients/client-gudang-garam-tbk.png" },
  { name: "GGF", logo: "/assets/images/projects/clients/client-ggf.png" },
  { name: "CSI", logo: "/assets/images/projects/clients/client-csi.png" },
  { name: "Gamotions", logo: "/assets/images/projects/clients/client-gamotions.png" },
  { name: "SkilledIn", logo: "/assets/images/projects/clients/client-skilledin.png" },
  { name: "Express Indonesia", logo: "/assets/images/projects/clients/client-avatar-express-indonesia.png" },
];

// Tooling described under "Tools We Use for Analysis & Testing".
export const analysisTools: { name: string; image: string; description: string }[] = [
  {
    name: "SonarQube",
    image: "/assets/images/projects/sonarqube.png",
    description:
      "An open-source platform for continuous inspection of code quality, performing automatic reviews with static analysis to detect bugs, code smells, and security issues across many programming languages.",
  },
  {
    name: "Burp Suite",
    image: "/assets/images/projects/burpsuite.png",
    description:
      "A widely used tool for penetration testing on websites and mobile apps — intercepting requests and responses through a proxy, with features such as Proxy, Scanner, Intruder, Repeater, and Decoder.",
  },
  {
    name: "OpenVAS / Greenbone",
    image: "/assets/images/projects/openvas-greenbone.png",
    description:
      "OpenVAS (Open Vulnerability Assessment System) is an open-source vulnerability scanning platform developed by Greenbone for identifying security weaknesses across networks and systems.",
  },
];
