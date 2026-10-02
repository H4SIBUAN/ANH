/**
 * =====================================================
 * FILE KONFIGURASI DATA BIODATA
 * =====================================================
 * Ubah data di file ini untuk mengganti seluruh konten website.
 * Tidak perlu mengubah komponen atau struktur UI.
 * =====================================================
 */

export const profile = {
  name: "Ahmad Nabil Hakim",
  role: "Web Developer",
  bio: "Seorang web developer yang passionate dalam membangun website modern, responsif, dan user-friendly. Berpengalaman dalam pengembangan front-end dan back-end dengan berbagai teknologi terkini.",
  shortBio: "Halo! Saya seorang web developer yang suka menciptakan pengalaman digital yang menarik dan fungsional. Dengan latar belakang di bidang informatika, saya selalu berusaha menghadirkan solusi teknologi yang inovatif.",
  birthDate: "15 Januari 2000",
  birthPlace: "Bekasi",
  address: "Bekasi, Jawa Barat, Indonesia",
  email: "ahmadnabilhakim@gmail.com",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  status: "Fresh Graduate",
};

export const social = {
  instagram: "https://instagram.com/ahmadnabilhakim",
  github: "https://github.com/ahmadnabilhakim",
  linkedin: "https://linkedin.com/in/ahmadnabilhakim",
};

export const education = [
  {
    year: "2018 - 2022",
    school: "Universitas Indonesia",
    major: "Teknik Informatika",
    description:
      "Mendalami bidang pengembangan perangkat lunak, algoritma, dan desain sistem. Aktif dalam organisasi dan proyek kampus.",
  },
  {
    year: "2015 - 2018",
    school: "SMAN 1 Bekasi",
    major: "Ilmu Pengetahuan Alam (IPA)",
    description:
      "Mengikuti berbagai kompetisi sains dan aktif dalam kegiatan OSIS serta ekskul komputer.",
  },
  {
    year: "2012 - 2015",
    school: "SMPN 1 Bekasi",
    major: "-",
    description:
      "Mulai mengenal dunia pemrograman dasar dan desain grafis.",
  },
];

export const experience = [
  {
    position: "Front-end Developer",
    company: "PT Teknologi Digital Indonesia",
    period: "Jan 2023 - Sekarang",
    description:
      "Mengembangkan antarmuka web menggunakan React dan Next.js. Berkolaborasi dengan tim desain untuk mengimplementasikan UI/UX yang responsif dan accessible.",
  },
  {
    position: "Web Developer Intern",
    company: "Startup Kreatif Nusantara",
    period: "Jul 2022 - Des 2022",
    description:
      "Membangun fitur-fitur baru untuk platform e-learning. Menggunakan React, Tailwind CSS, dan REST API. Meningkatkan performa loading halaman sebesar 40%.",
  },
  {
    position: "Freelance Web Developer",
    company: "Self-employed",
    period: "2021 - 2022",
    description:
      "Membuat website company profile, landing page, dan toko online untuk berbagai klien. Menggunakan WordPress, React, dan vanilla JavaScript.",
  },
];

export const skills = [
  { name: "HTML", percentage: 95, color: "from-orange-400 to-orange-600" },
  { name: "CSS", percentage: 90, color: "from-blue-400 to-blue-600" },
  { name: "JavaScript", percentage: 88, color: "from-yellow-400 to-yellow-600" },
  { name: "React", percentage: 85, color: "from-cyan-400 to-cyan-600" },
  { name: "Tailwind CSS", percentage: 85, color: "from-teal-400 to-teal-600" },
  { name: "Node.js", percentage: 75, color: "from-green-400 to-green-600" },
  { name: "UI/UX Design", percentage: 78, color: "from-purple-400 to-purple-600" },
  { name: "Git & GitHub", percentage: 82, color: "from-rose-400 to-rose-600" },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Platform jual-beli online dengan fitur keranjang belanja, pembayaran, dan manajemen produk. Dibangun dengan React dan Node.js.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://example.com/ecommerce-demo",
    githubUrl: "https://github.com/ahmadnabilhakim/ecommerce",
    image: null,
  },
  {
    title: "Task Management App",
    description:
      "Aplikasi manajemen tugas dengan fitur drag & drop, deadline tracking, dan kolaborasi tim secara real-time.",
    technologies: ["React", "Firebase", "Material UI"],
    demoUrl: "https://example.com/taskmanager-demo",
    githubUrl: "https://github.com/ahmadnabilhakim/taskmanager",
    image: null,
  },
  {
    title: "Weather Dashboard",
    description:
      "Dashboard cuaca interaktif dengan visualisasi data real-time, prakiraan 7 hari, dan pencarian lokasi global.",
    technologies: ["JavaScript", "API", "Chart.js", "CSS"],
    demoUrl: "https://example.com/weather-demo",
    githubUrl: "https://github.com/ahmadnabilhakim/weather",
    image: null,
  },
  {
    title: "Portfolio Website",
    description:
      "Website portfolio modern dan responsif dengan dark mode, animasi scroll, dan form kontak fungsional.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    demoUrl: "https://example.com/portfolio-demo",
    githubUrl: "https://github.com/ahmadnabilhakim/portfolio",
    image: null,
  },
];

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Pendidikan", href: "#pendidikan" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Proyek", href: "#proyek" },
  { label: "Kontak", href: "#kontak" },
];
