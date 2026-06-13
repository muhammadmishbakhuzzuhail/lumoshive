export type Alumni = {
  name: string;
  batch: string;
  quote: string;
  photo: string;
};

const g = "/assets/academy/storage/graduate";

export const alumni: Alumni[] = [
  {
    name: "Muhammad Hasby Rohadi",
    batch: "UI/UX Design - batch 1",
    quote:
      "Pengalaman saya lumayan seru, karena saya jadi tau UI/UX buat pertama kalinya.",
    photo: `${g}/1747640590.jpeg`,
  },
  {
    name: "Fadhil Muhammad Tanjo",
    batch: "UI/UX Design - batch 1",
    quote:
      "Sangat membantu menambah pengalaman dan wawasan tentang bidang yang ditekuni.",
    photo: `${g}/1747640826.jpeg`,
  },
  {
    name: "Abdan Maulana Halim",
    batch: "UI/UX Design - batch 1",
    quote:
      "Kelas berjalan dengan kondusif, Mentor sudah cukup baik dalam membagikan materi, pengalamannya, serta tips-tips dalam design.",
    photo: `${g}/1747712690.jpeg`,
  },
  {
    name: "Fikri",
    batch: "Back-end - batch 1",
    quote:
      "Pengalaman saya membantu dalam pembelajaran dimana ketika inkonsisten self learning, mengikuti bootcamp bisa push the limit.",
    photo: `${g}/1747801195.jpeg`,
  },
  {
    name: "Muhammad Rasya Putra Wantoro",
    batch: "UI/UX Design - batch 1",
    quote:
      "Pengalaman saya mengikuti bootcamp UI/UX Design di Lumoshive Academy sangat berkesan dan bermanfaat. Materinya disusun secara sistematis.",
    photo: `${g}/1747809952.jpeg`,
  },
  {
    name: "Achmad Dhani Chandra",
    batch: "UI/UX Design - batch 1",
    quote:
      "Selama sebulan mempelajari tentang UI/UX Design yang membuat kita paham dasar dari UI maupun UX.",
    photo: `${g}/1747810786.jpeg`,
  },
];

export type ScholarshipStep = { step: number; title: string; description: string };

export const scholarshipSteps: ScholarshipStep[] = [
  {
    step: 1,
    title: "Registrasi Data Diri",
    description:
      "Peserta mengisi formulir pendaftaran beasiswa secara online dengan data lengkap dan benar serta memilih program yang diinginkan.",
  },
  {
    step: 2,
    title: "Tes Psikotes",
    description:
      "Peserta yang lolos administrasi akan mengikuti tes psikologi untuk mengukur kepribadian, logika berpikir, dan kesiapan belajar.",
  },
  {
    step: 3,
    title: "Tes Teknikal",
    description:
      "Di tahap ini, peserta akan mengikuti tes kemampuan dasar sesuai dengan bidang atau program yang dipilih saat melakukan registrasi.",
  },
  {
    step: 4,
    title: "Tes Interview",
    description:
      "Peserta yang lolos tes teknis akan diundang ke sesi wawancara untuk menggali motivasi, komitmen, dan kesiapan menjalani program.",
  },
  {
    step: 5,
    title: "Pengumuman Hasil Akhir",
    description:
      "Hasil akhir seleksi dan informasi lebih lanjut akan diumumkan kepada seluruh peserta yang mengikuti rangkaian seleksi.",
  },
];

export const mentors = [
  "/assets/academy/storage/mentors/1760339865.jpg",
  "/assets/academy/storage/mentors/1760340096.jpg",
  "/assets/academy/storage/mentors/1760340187.jpg",
];
