export type BlogPost = {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
};

const b = "/assets/academy/storage/blogs";

// Mirrors the order shown on the live academy blog index.
export const blogPosts: BlogPost[] = [
  {
    title: "Mammoth dan Masa Depan Teknologi",
    category: "Web Development",
    date: "December 11, 2025",
    excerpt:
      "Catatan ringan seputar perkembangan teknologi dan bagaimana inovasi terus bergerak maju dari waktu ke waktu.",
    image: `${b}/1765427704.jpg`,
  },
  {
    title: "Pemrograman Python: Dasar dan Teknik Lanjut untuk Pengembang",
    category: "Web Development",
    date: "November 26, 2024",
    excerpt:
      "Selamat datang di dunia pemrograman Python! Artikel ini akan membantu Anda memahami bahasa pemrograman ini, dari dasar hingga teknik lanjutan.",
    image: `${b}/1745395373.jpg`,
  },
  {
    title: "Menjadi Programmer Python: Pengalaman dalam Dunia Koding",
    category: "Web Development",
    date: "July 8, 2024",
    excerpt:
      "Menjadi seorang programmer Python dengan beberapa tahun pengalaman, saya ingin berbagi cerita dan wawasan tentang perjalanan di dunia koding.",
    image: `${b}/1745047730.jpg`,
  },
  {
    title: "Gaji Programmer: Pengalaman Saya dalam Dunia Teknologi",
    category: "Web Development",
    date: "July 4, 2024",
    excerpt:
      "Sebagai seorang programmer dengan pengalaman beberapa tahun di industri teknologi, saya sering kali ditanya tentang prospek dan gaji di bidang ini.",
    image: `${b}/1745047606.jpg`,
  },
  {
    title: "Menjadi Seorang Web Programmer: Pengalaman dan Tantangan",
    category: "Web Development",
    date: "July 3, 2024",
    excerpt:
      "Sebagai seorang web programmer, saya merasa memiliki peran yang sangat penting dalam dunia digital saat ini. Berikut pengalaman dan tantangannya.",
    image: `${b}/1745047635.jpg`,
  },
];

export const blogCategories = ["All", "Web Development"] as const;
