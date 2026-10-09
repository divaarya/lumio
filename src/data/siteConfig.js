// Data bawaan. Nanti diganti oleh data dari API admin panel.
export const siteConfig = {
  nama: "Lumio",
  warnaUtama: "#0f766e",
  warnaAksen: "#ccfbf1",
  heroJudul: "HR yang tenang, tim yang fokus.",
  heroDeskripsi:
    "Lumio merapikan absensi, gaji, ujian, dokumen, dan perizinan karyawan dalam satu tempat yang bersih dan mudah dipahami.",
  ctaTeks: "Mulai sekarang",
  whatsappNomor: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  whatsappPesan:
    "Halo Lumio, saya ingin tahu lebih lanjut tentang sistem HR-nya.",
  email: "halo@lumio.example",
  kota: "Bandung, Jawa Barat",
  seo: {
    metaTitle: "Lumio - Sistem HR yang Tenang",
    metaDescription:
      "Kelola absensi, gaji, exam, library, dan perizinan karyawan dengan sistem HR yang sederhana.",
    ogImage: "",
  },
};
