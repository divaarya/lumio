"use client";

import { useState } from "react";
import "./Faq.css";

const daftar = [
  {
    tanya: "Apakah ada paket gratis?",
    jawab:
      "Ada. Paket Dasar gratis untuk tim sampai 15 karyawan, lengkap dengan absensi, perizinan, dan library.",
  },
  {
    tanya: "Berapa lama sampai tim bisa mulai memakainya?",
    jawab:
      "Setelah data perusahaan dan karyawan dimasukkan, tim sudah bisa langsung absen dan mengajukan izin di hari yang sama.",
  },
  {
    tanya: "Apakah data gaji terhubung dengan absensi?",
    jawab:
      "Ya. Kehadiran, lembur, dan izin otomatis masuk ke perhitungan gaji sehingga tidak perlu dihitung ulang.",
  },
  {
    tanya: "Bisakah Exam dan Library dipakai untuk pelatihan?",
    jawab:
      "Bisa. Simpan materi di Library, lalu ukur pemahaman karyawan lewat Exam, dan hasilnya tersimpan per orang.",
  },
  {
    tanya: "Bagaimana keamanan data perusahaan?",
    jawab:
      "Setiap orang hanya membuka data sesuai perannya, sehingga informasi sensitif seperti gaji tidak terlihat oleh semua orang.",
  },
];

function Faq() {
  const [buka, setBuka] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="faq-kepala">
        <p className="faq-label">Tanya jawab</p>
        <h2>Pertanyaan yang sering muncul.</h2>
        <img
          className="faq-foto"
          src="/hero1.jpg"
          alt="Tim dukungan siap membantu pertanyaan Anda"
        />
        <p className="faq-lanjut">
          Belum menemukan jawabannya? <a href="#kontak">Hubungi kami</a>
        </p>
      </div>

      <div className="faq-daftar">
        {daftar.map((d, i) => (
          <div className="faq-baris" key={d.tanya}>
            <button
              className="faq-tanya"
              onClick={() => setBuka(buka === i ? -1 : i)}
              aria-expanded={buka === i}
            >
              <span>{d.tanya}</span>
              <span className="faq-tanda">{buka === i ? "−" : "+"}</span>
            </button>
            {buka === i && <p className="faq-jawab">{d.jawab}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
