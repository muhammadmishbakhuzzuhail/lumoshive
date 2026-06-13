export type Testimonial = {
  company: string;
  logo?: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    company: "LinkIT 360",
    logo: "/assets/images/projects/clients/client-linkit.svg",
    quote:
      "We thank Lumoshive for the wonderful job in helping us develop our programs. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on budget and on time and we look forward to continue working with them in the future.",
  },
  {
    company: "HDS",
    logo: "/assets/images/projects/clients/client-hds.svg",
    quote:
      "I’m really impressed by the quality of services I received from Lumoshive. They were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I will definitely use your services again. Thank you!",
  },
  {
    company: "Vaya",
    logo: "/assets/images/projects/clients/client-vaya.svg",
    quote:
      "Lumoshive’s HRIS system really helps automate our HR processes. The features are complete, the team is supportive, and the results are beyond expectations.",
  },
];
