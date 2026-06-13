export type Feature = {
  title: string;
  icon: string; // path under /assets/images/icons
  description: string;
};

// Six "why Lumoshive" feature cards from the original About Us section.
export const features: Feature[] = [
  {
    title: "Cost Effectiveness",
    icon: "/assets/images/icons/cost-effectiveness.png",
    description:
      "Lower your operational and development overhead with the right resources at the right price.",
  },
  {
    title: "Cultural Convergence",
    icon: "/assets/images/icons/cultural-convergence.png",
    description:
      "A team that adapts to your working culture for smooth, friction-free collaboration.",
  },
  {
    title: "Low Risk",
    icon: "/assets/images/icons/low-risk.png",
    description:
      "Transparent processes and proven practices keep your project predictable and safe.",
  },
  {
    title: "Mature Team",
    icon: "/assets/images/icons/mature-team.png",
    description:
      "Experienced, geeky technical developers who have shipped real products at scale.",
  },
  {
    title: "Shorter Delivery Time",
    icon: "/assets/images/icons/shorter-delivery-time.png",
    description:
      "Efficient workflows and weekly progress reporting get you to market faster.",
  },
  {
    title: "Remote Management",
    icon: "/assets/images/icons/remote-management.png",
    description:
      "Coordinated remotely with full visibility through transparent monitoring tools.",
  },
];
