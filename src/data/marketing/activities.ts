export type Activity = {
  title: string;
  date: string;
  image: string;
  description: string;
};

// Original copy is in Bahasa Indonesia — preserved as-is.
export const activities: Activity[] = [
  {
    title: "Charity",
    date: "20 September 2024",
    image: "/assets/images/home/activity-1.jpg",
    description:
      "Charity Day adalah momen spesial bagi keluarga besar Lumoshive untuk saling peduli dan berbagi. Ikuti berbagai kegiatan sosial dan jadilah bagian dari perubahan positif.",
  },
  {
    title: "Buka Bersama",
    date: "14 Maret 2025",
    image: "/assets/images/home/activity-2.jpg",
    description:
      "Suasana hangat penuh keakraban mewarnai momen buka puasa bersama keluarga besar Lumoshive. Acara ini jadi ajang silahturahmi dan mempererat kebersamaan di bulan Ramadhan.",
  },
  {
    title: "Sport Day - Badminton",
    date: "06 Februari 2025",
    image: "/assets/images/home/activity-3.jpg",
    description:
      "Dalam rangka Sports Day, Lumoshive menggelar pertandingan badminton yang penuh energi dan semangat. Momen ini menjadi ajang sehat, seru, dan solid.",
  },
];
