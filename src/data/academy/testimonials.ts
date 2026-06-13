export type AcademyTestimonial = {
  name: string;
  batch: string;
  quote: string;
};

export const academyTestimonials: AcademyTestimonial[] = [
  {
    name: "Abdan Maulana Halim",
    batch: "UI/UX Design - batch 1",
    quote:
      "Kelas berjalan dengan kondusif, Mentor sudah cukup baik dalam membagikan materi, pengalamannya, serta tips-tips dalam design. Mentor juga dengan baik bisa menjawab semua pertanyaan dari peserta. Overall, pengalaman pelatihan yang baik untuk diikuti.",
  },
  {
    name: "Dede Supriatna",
    batch: "Front-end - batch 1",
    quote:
      "Sebagai bootcamp pertama yang saya ikuti, ini merupakan pengalaman yang sangat baik. Kita diajarkan teknologi terbaru dalam pengembangan web, best practice, dan juga mendapatkan feedback dari hasil kerja kita, di mana semua itu tidak bisa diperoleh jika hanya belajar otodidak.",
  },
  {
    name: "Paulus Otto Harman",
    batch: "Back-end - batch 1",
    quote:
      "Seru banget! mulai dari kelas online, offline, softskill, teman-teman baru di bootcamp, berkenalan dengan teman-teman di kedoya, lalu juga harus bagi waktu di semua kegiatan sehari-hari (pekerjaan, keluarga dan lumoshive) semuanya ini bikin hidup lebih hidup.",
  },
  {
    name: "Riki Ridwan",
    batch: "Front-end - batch 1",
    quote:
      "Sangat menyenangkan, saya bukan hanya belajar tentang hard skill tetapi juga softskill. Untuk saya yang introvert itu merupakan hal yang bagus dengan adanya interaksi ketika sesi pembelajaran. Saya sekarang lebih bisa untuk berbicara dihadapan banyak orang.",
  },
  {
    name: "Muhammad Rasya Putra Wantoro",
    batch: "UI/UX Design - batch 1",
    quote:
      "Pengalaman saya mengikuti bootcamp UI/UX Design di Lumoshive Academy sangat berkesan dan bermanfaat. Materinya disusun secara sistematis. Mentor yang berpengalaman memberikan bimbingan yang sangat membantu, terutama dalam studi kasus dan proyek praktis. Secara keseluruhan, bootcamp ini memberikan bekal yang sangat berguna untuk karier di bidang UI/UX.",
  },
];

export type Faq = { question: string; answer: string };

export const academyFaq: Faq[] = [
  {
    question: "Apakah program ini terbuka untuk umum?",
    answer:
      "Program terbuka untuk umum. Siapa saja tanpa latar belakang pendidikan apapun bisa belajar di Bootcamp ini.",
  },
  {
    question: "Apakah saya akan mendapat sertifikat setelah lulus?",
    answer:
      "Setelah kamu lulus kamu akan mendapat sertifikat kelulusan dari Lumoshive Academy yang bisa kamu gunakan sebagai pengalaman tambahan di CV kamu.",
  },
  {
    question: "Apa saja persyaratan untuk mengikuti bootcamp di Lumoshive Academy?",
    answer:
      "Persyaratan untuk mengikuti bootcamp di Lumoshive Academy adalah memiliki laptop pribadi, memiliki koneksi internet yang mendukung pembelajaran online, dan berkomitmen untuk menyelesaikan program pelatihan.",
  },
];
