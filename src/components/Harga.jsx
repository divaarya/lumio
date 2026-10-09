"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import "./Harga.css";

const paket = [
  {
    nama: "Dasar",
    bulanan: 0,
    tahunan: 0,
    catatan: "Untuk tim sampai 15 karyawan",
    fitur: ["Absensi dan lokasi", "Perizinan", "Library dokumen"],
  },
  {
    nama: "Tumbuh",
    bulanan: 9000,
    tahunan: 7000,
    catatan: "per karyawan, per bulan",
    unggulan: true,
    fitur: [
      "Semua fitur Dasar",
      "Penggajian dan slip digital",
      "Exam karyawan",
      "Rekap lembur",
    ],
  },
  {
    nama: "Lengkap",
    bulanan: 16000,
    tahunan: 13000,
    catatan: "per karyawan, per bulan",
    fitur: [
      "Semua fitur Tumbuh",
      "Persetujuan bertingkat",
      "Library tanpa batas",
      "Dukungan prioritas",
    ],
  },
];

function rupiah(angka) {
  if (angka === 0) return "Gratis";
  return "Rp" + angka.toLocaleString("id-ID");
}

function Harga() {
  const [tahunan, setTahunan] = useState(false);

  return (
    <section className="harga" id="harga">
      <div className="harga-kepala">
        <h2>Harga yang jelas dari awal.</h2>

        <div className="harga-pilih">
          <button
            className={!tahunan ? "aktif" : ""}
            onClick={() => setTahunan(false)}
          >
            Bulanan
          </button>
          <button
            className={tahunan ? "aktif" : ""}
            onClick={() => setTahunan(true)}
          >
            Tahunan, lebih hemat
          </button>
        </div>
      </div>

      <div className="harga-tabel">
        {paket.map((p) => (
          <div
            className={p.unggulan ? "harga-kolom unggulan" : "harga-kolom"}
            key={p.nama}
          >
            <h3>{p.nama}</h3>
            <p className="harga-angka">
              {rupiah(tahunan ? p.tahunan : p.bulanan)}
            </p>
            <p className="harga-catatan">{p.catatan}</p>

            <ul>
              {p.fitur.map((f) => (
                <li key={f}>
                  <Check size={16} />
                  {f}
                </li>
              ))}
            </ul>

            <a href="#kontak" className="harga-tombol">
              Pilih {p.nama}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Harga;
