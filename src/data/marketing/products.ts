export type Product = {
  name: string;
  image: string;
};

export const products: Product[] = [
  { name: "HaiFile", image: "/assets/images/product-and-services/haifile.jpg" },
  { name: "Organistaff", image: "/assets/images/product-and-services/organistaff.jpg" },
  { name: "Sales Track Pro", image: "/assets/images/product-and-services/sales-track-pro.jpg" },
  { name: "Stokia", image: "/assets/images/product-and-services/stokia.jpg" },
  { name: "Trainifi", image: "/assets/images/product-and-services/trainifi.jpg" },
];

export type ServicePlan = {
  name: string;
  startFrom: string;
  unit: string;
  features: string[];
  highlight?: boolean;
};

export const servicePlans: ServicePlan[] = [
  {
    name: "Software Development",
    startFrom: "IDR 2.000K",
    unit: "/ Mandays",
    highlight: true,
    features: [
      "50% discount on Incubator Programs",
      "Specialized resources based on requirement",
      "Professional weekly project progress report",
      "Transparent monitoring & coordination with Microsoft Teams",
    ],
  },
  {
    name: "Resource Placement",
    startFrom: "IDR 8.000K",
    unit: "/ Month",
    features: [
      "Month to month options (at higher cost)",
      "Start from 6 month contract term",
      "Stop anytime after contract ends (with 2 month notice)",
    ],
  },
  {
    name: "Consultation",
    startFrom: "IDR 0.000K",
    unit: "/ Month",
    features: [
      "Consultation by scope",
      "Free 8 hours trial for new placement clients",
      "Manhours / month",
    ],
  },
];

// "We Understand Your Problem" — grouped pain points from the original page.
export const problemGroups: { title: string; items: string[]; icon: string }[] = [
  {
    title: "Human Resources",
    icon: "/assets/images/icons/human-resources.png",
    items: ["Accountability", "Flexibility", "Turnover Rate"],
  },
  {
    title: "Growth",
    icon: "/assets/images/icons/growth.png",
    items: ["Market Change", "Scalability", "Training & Certification"],
  },
  {
    title: "Skills",
    icon: "/assets/images/icons/skills.png",
    items: ["Capability", "Quality", "Innovation"],
  },
  {
    title: "Community",
    icon: "/assets/images/icons/community.png",
    items: ["Engagement", "Social Interaction", "Working Environment"],
  },
  {
    title: "Quality",
    icon: "/assets/images/icons/quality.png",
    items: ["Coding Convention", "Processing Speed", "Specialized Expertise"],
  },
  {
    title: "Overhead Cost",
    icon: "/assets/images/icons/overhead-cost.png",
    items: ["Device Investment", "Quality", "Innovative"],
  },
];
