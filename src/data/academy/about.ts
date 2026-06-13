const icon = "/assets/academy/ui/images/about-us/icon";

export const aboutIntro =
  "Lumoshive Academy adalah tempat belajar seru buat kamu yang mau jadi Professional IT dan siap bersaing di dunia digital! Di sini, kamu nggak cuma belajar teori, tapi juga langsung praktek dengan teknologi terkini yang lagi booming. Kami juga punya kurikulum yang disusun khusus bareng para ahli industri, jadi materinya selalu update dan relevan.";

export const vision =
  "Menjadi lembaga pelatihan teknologi informasi terpercaya yang membekali siswa dengan keterampilan praktis dan berorientasi industri sehingga siap bersaing di dunia kerja dan sukses dalam karier teknologi.";

export const missions = [
  "Memberikan pendidikan praktis dalam teknologi informasi dengan fokus pada keterampilan yang dibutuhkan oleh dunia kerja saat ini dan di masa depan.",
  "Menyediakan lingkungan belajar yang inklusif dan mendukung.",
  "Berkolaborasi dengan industri dan mitra akademis untuk memastikan relevansi kurikulum serta memberikan kesempatan kerja yang maksimal bagi lulusan.",
];

export type ValueItem = { title: string; description: string; icon: string };

export const aboutValues: ValueItem[] = [
  {
    title: "Level Up Skill Teknis",
    description:
      "Belajar teknologi dan tools terbaru yang dipakai di industri, mulai dari bahasa pemrograman hingga framework terkini, lewat proyek nyata.",
    icon: `${icon}/levelup.png`,
  },
  {
    title: "Asah Soft Skills",
    description:
      "Skill teknis aja nggak cukup! Kamu bakal belajar kerja tim, kolaborasi kelompok, dan komunikasi lisan maupun tulisan.",
    icon: `${icon}/softskills.png`,
  },
  {
    title: "Mentoring Berpengalaman",
    description:
      "Bimbingan dari mentor berpengalaman yang siap membantu kamu memahami materi secara mendalam dan aplikatif.",
    icon: `${icon}/mentoring.png`,
  },
  {
    title: "Lingkungan Inklusif",
    description:
      "Lingkungan belajar yang suportif dan terbuka untuk siapa saja tanpa memandang latar belakang pendidikan.",
    icon: `${icon}/lingkungan.png`,
  },
  {
    title: "Jaringan Industri",
    description:
      "Kolaborasi dengan industri dan mitra akademis membuka kesempatan karier yang maksimal bagi lulusan.",
    icon: `${icon}/jaringan.png`,
  },
  {
    title: "Kolaborasi Nyata",
    description:
      "Kerjakan proyek bersama tim layaknya di dunia kerja sesungguhnya untuk membangun portofolio yang solid.",
    icon: `${icon}/kolaborasi.png`,
  },
];
