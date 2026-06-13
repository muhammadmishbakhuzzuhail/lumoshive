export type Leader = {
  name: string;
  role: string;
  image: string;
};

export const leaders: Leader[] = [
  {
    name: "Julianto Tjan",
    role: "Chief Executive Officer",
    image: "/assets/images/about-us/team/team-1.jpg",
  },
  {
    name: "Wahyu Primadi",
    role: "Chief Technical Officer",
    image: "/assets/images/about-us/team/team-2.jpg",
  },
  {
    name: "Indra Hermanto Adi",
    role: "Chief Sales & Marketing Officer",
    image: "/assets/images/about-us/team/team-3.jpg",
  },
];

export const achievements = [
  { value: "121+", label: "Projects Delivered" },
  { value: "50+", label: "Applications Created" },
  { value: "40+", label: "Happy Clients" },
];

export const solutions = [
  {
    title: "Software Development",
    description: "Custom application solutions tailored to business needs.",
    image: "/assets/images/about-us/our-solution/sofware-development.png",
  },
  {
    title: "System Integration",
    description: "Unifying various systems to work more efficiently.",
    image: "/assets/images/about-us/our-solution/system-integration.png",
  },
  {
    title: "AI and Cloud-Based Solutions",
    description:
      "Optimizing business operations through intelligent and cloud-based technology.",
    image: "/assets/images/about-us/our-solution/ai-and-cloud-based-solutions.png",
  },
];
