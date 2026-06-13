export type ProjectCategory = "Mobile Apps" | "CMS Dashboard" | "Website Landing Page";

export type Project = {
  title: string;
  category: ProjectCategory;
  image: string; // card preview
  detail: string; // screenshot shown in detail
  logo: string;
  description: string;
  features: string[];
};

const img = "/assets/images/projects";

export const projects: Project[] = [
  {
    title: "WIP & Finish Harvest",
    category: "CMS Dashboard",
    image: `${img}/wip.jpg`,
    detail: `${img}/slider/wip-1.png`,
    logo: `${img}/logo/logo-ggf.png`,
    description:
      "WIP & Finish Harvest is a dashboard for monitoring and forecasting harvest yields, projecting raw material output, and enabling harvest control.",
    features: [
      "Dashboard Berat Tanaman",
      "Dashboard Warna Daun",
      "Dashboard Keberagaman",
      "Dashboard Akum Bahan",
      "Dashboard Lokasi Plant",
      "Komparasi Lokasi",
    ],
  },
  {
    title: "TPM Sprayer",
    category: "Mobile Apps",
    image: `${img}/ggf-tpm-sprayer.jpg`,
    detail: `${img}/slider/ggf-tpm-sprayer-1.png`,
    logo: `${img}/logo/logo-ggf.png`,
    description:
      "TPM Sprayer is a dashboard for real-time field reporting and operational productivity control in plantations.",
    features: [
      "General Inspection",
      "Push Notification",
      "Role Matrix Parameterized",
      "Checklist Parameterized",
      "Reporting",
    ],
  },
  {
    title: "SkilledIn",
    category: "CMS Dashboard",
    image: `${img}/skilledin.jpg`,
    detail: `${img}/slider/skilledin-1.png`,
    logo: `${img}/logo/logo-skilledin.png`,
    description:
      "SkilledIn is a dashboard for monitoring individual performance and skill evaluation.",
    features: [
      "Performance Review",
      "Competencies Plan",
      "Development Plan",
      "Task Management",
      "Feedback & Recognition",
      "Goals & Target",
    ],
  },
  {
    title: "Bakoel Omah",
    category: "Website Landing Page",
    image: `${img}/bakoel-omah.jpg`,
    detail: `${img}/slider/bakoel-omah-1.png`,
    logo: `${img}/logo/logo-bakoel-omah.png`,
    description:
      "Bakoel Omah is an app that helps street vendors boost sales by integrating with social media for seamless online selling.",
    features: [
      "Integration to Social Media",
      "Integration to Live Stream Platform",
      "Engagement Automatic Response",
    ],
  },
  {
    title: "Human Resource Information System",
    category: "CMS Dashboard",
    image: `${img}/linkit-hris.jpg`,
    detail: `${img}/slider/linkit-hris-2.png`,
    logo: `${img}/logo/logo-linkit.png`,
    description:
      "Simplified Leave Management, accurate attendance tracking, automated payroll processing and centralized recruitment database.",
    features: [
      "Dashboard & Reporting",
      "Sick & Leave Management",
      "Expenses & Payroll",
      "Absentee",
      "Assessment",
      "GPS Locator",
    ],
  },
  {
    title: "Document Management Information System",
    category: "CMS Dashboard",
    image: `${img}/linkit-dmis.jpg`,
    detail: `${img}/slider/linkit-dmis-2.png`,
    logo: `${img}/logo/logo-linkit.png`,
    description:
      "Simplified document management, rapid data retrieval, advanced version control, and cost-effective storage solution.",
    features: [
      "Document & Reporting",
      "Document Storage",
      "Document Sharing",
      "Document e-signature",
      "Document Signing",
      "Document Expiry",
    ],
  },
  {
    title: "Fotogrit",
    category: "Mobile Apps",
    image: `${img}/fotogrit.jpg`,
    detail: `${img}/slider/fotogrit-1.png`,
    logo: `${img}/logo/logo-fotogrit.png`,
    description:
      "Fotogrit is a platform for selling sports event photos (basketball) with direct selling, payment gateway, and face recognition, replacing manual sales and payments.",
    features: [
      "Event Master",
      "Photographer Management",
      "Customer Management",
      "Rent Equipment",
      "Offer Service",
      "E-Wallet Payment",
    ],
  },
  {
    title: "Dashboard Gamification",
    category: "Website Landing Page",
    image: `${img}/gamotions.jpg`,
    detail: `${img}/slider/gamotions-1.png`,
    logo: `${img}/logo/logo-gamotions.png`,
    description:
      "Dashboard Gamification is a CMS dashboard for gaming providers to manage and organize in-game content efficiently.",
    features: [
      "Trending & Favourite Games",
      "Many Categories of Games",
      "About Us",
      "Contact Us",
      "Feedback & Recognition",
      "Goals & Target",
    ],
  },
  {
    title: "SDM GG",
    category: "Mobile Apps",
    image: `${img}/sdm-gg.jpg`,
    detail: `${img}/slider/sdm-gg-1.png`,
    logo: `${img}/logo/logo-sdm-gg.png`,
    description:
      "SDM GG is a smart solution built to enhance operational efficiency, ensure traceability, and simplify complex inventory processes.",
    features: [
      "Dashboard",
      "Bill Of Material",
      "Shelve Management System",
      "Stock In",
      "Product Tracing",
      "Reporting",
      "Stock Out",
    ],
  },
];

export const projectCategories = [
  "All",
  "Mobile Apps",
  "CMS Dashboard",
  "Website Landing Page",
] as const;

export type ClientLogo = { name: string; logo: string };

export const clients: ClientLogo[] = [
  { name: "LinkIT 360", logo: `${img}/clients/client-linkit.svg` },
  { name: "HDS", logo: `${img}/clients/client-hds.svg` },
  { name: "Vaya", logo: `${img}/clients/client-vaya.svg` },
  { name: "Bank Jateng", logo: `${img}/clients/client-bank-jateng.png` },
  { name: "Gudang Garam Tbk", logo: `${img}/clients/client-gudang-garam-tbk.png` },
  { name: "GGF", logo: `${img}/clients/client-ggf.png` },
  { name: "CSI", logo: `${img}/clients/client-csi.png` },
  { name: "Gamotions", logo: `${img}/clients/client-gamotions.png` },
  { name: "SkilledIn", logo: `${img}/clients/client-skilledin.png` },
  { name: "Express Indonesia", logo: `${img}/clients/client-avatar-express-indonesia.png` },
];

export type AnalysisTool = {
  name: string;
  image: string;
  description: string;
  features: string[];
};

export const analysisTools: AnalysisTool[] = [
  {
    name: "SonarQube",
    image: `${img}/sonarqube.png`,
    description:
      "An open-source platform by SonarSource for continuous inspection of code quality — automatic reviews with static analysis to detect bugs and code smells across 29 programming languages.",
    features: [
      "Duplicated code & coding standards reports",
      "Unit test & code coverage metrics",
      "Metrics history & evolution graphs",
      "Integrates with Maven, Gradle, Jenkins & more",
    ],
  },
  {
    name: "Burp Suite",
    image: `${img}/burpsuite.png`,
    description:
      "A widely used tool for penetration testing on websites and mobile apps — intercepts requests/responses through a proxy, with semi-automation for finding gaps in web applications.",
    features: ["Proxy", "Scanner", "Intruder", "Repeater", "Decoder"],
  },
  {
    name: "OpenVAS / Greenbone",
    image: `${img}/openvas-greenbone.png`,
    description:
      "An open-source vulnerability scanning platform by Greenbone to detect security weaknesses across IT infrastructure, networks, and systems.",
    features: [
      "Network & host-based vulnerability scanning",
      "Over 50,000 security tests (NVTs)",
      "Greenbone Security Manager integration",
      "Detailed reports with remediation",
    ],
  },
  {
    name: "CodeRabbit",
    image: `${img}/coderabbit.png`,
    description:
      "An AI-powered code review tool that helps developers improve code quality, detect issues, and maintain best practices — integrating directly into development workflows.",
    features: [
      "Automated code quality & security analysis",
      "GitHub integration for CI/CD",
      "Bug, anti-pattern & vulnerability detection",
      "AI-generated comments in pull requests",
    ],
  },
];
