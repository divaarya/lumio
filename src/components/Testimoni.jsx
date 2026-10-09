"use client";

import { useState } from "react";
import "./Testimoni.css";

const daftar = [
  {
    isi: "Dulu setiap akhir bulan kami begadang mencocokkan absen dengan gaji. Sekarang semuanya sudah rapi sebelum tanggal gajian.",
    nama: "Maya Kusuma",
    jabatan: "Manajer HR, Distro Kelana",
  },
  {
    isi: "Yang paling terasa adalah izin dan cuti. Tidak ada lagi pesan menumpuk di grup, semua pengajuan masuk satu tempat.",
    nama: "Bagas Pratama",
    jabatan: "Pemilik, Bengkel Roda Mas",
  },
  {
    isi: "Materi pelatihan dan ujian untuk karyawan baru sekarang satu paket. Mereka bisa belajar sendiri tanpa menunggu jadwal.",
    nama: "Intan Permata",
    jabatan: "Kepala Operasional, Klinik Citra",
  },
];

function Testimoni() {
  const [aktif, setAktif] = useState(0);
  const t = daftar[aktif];

  return (
    <section className="testi" id="testimoni">
      <p className="testi-label">Cerita pengguna</p>

      <blockquote className="testi-kutip">{t.isi}</blockquote>
      <p className="testi-jabatan">{t.jabatan}</p>

      <div className="testi-pilih">
        {daftar.map((d, i) => (
          <button
            key={d.nama}
            className={i === aktif ? "aktif" : ""}
            onClick={() => setAktif(i)}
          >
            {d.nama}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Testimoni;
