export type Benefit = {
  title: string;
  description: string;
  icon: string;
};

const base = "/assets/academy/ui/images/home/icon";

export const benefits: Benefit[] = [
  {
    title: "Kurikulum Terupdate Sesuai Tren Industri",
    description:
      "Pelajari materi terbaru yang selalu diperbarui sesuai kebutuhan industri, memastikan kamu memiliki keterampilan relevan dan siap bersaing di dunia kerja.",
    icon: `${base}/kurikulum.png`,
  },
  {
    title: "Mentoring Eksklusif dan Dukungan Penuh",
    description:
      "Nikmati akses ke mentor dedicated, sesi mentoring 1-on-1, dan dukungan chat langsung selama bootcamp berlangsung.",
    icon: `${base}/mentoring.png`,
  },
  {
    title: "Kelas Interaktif dan Akses Tanpa Batas",
    description:
      "Sesi live class dengan rekaman kelas yang dapat diakses seumur hidup untuk belajar kapan saja.",
    icon: `${base}/kelas-interaktif.png`,
  },
  {
    title: "Portofolio Berbasis Proyek Nyata",
    description:
      "Bangun portofolio profesional melalui proyek hands-on yang siap dipamerkan kepada perekrut atau klien freelance.",
    icon: `${base}/portofolio.png`,
  },
  {
    title: "Jam Belajar Fleksibel di Waktu Malam",
    description:
      "Atur jadwal belajar malam hari agar tetap produktif tanpa mengganggu aktivitas utama.",
    icon: `${base}/jam-belajar.png`,
  },
];

export const heroHighlights = [
  "Live Class",
  "Beginner Friendly",
  "Slide Materi",
  "Video Rekaman Unlimited",
];
