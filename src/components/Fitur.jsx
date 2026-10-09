import {
  Fingerprint,
  Wallet,
  GraduationCap,
  Library,
  CalendarCheck,
} from "lucide-react";
import "./Fitur.css";

const daftar = [
  {
    ikon: Fingerprint,
    nama: "Absensi",
    isi: "Pantau kehadiran dan jam kerja tim dalam satu sistem, dari ponsel mana pun.",
    tag: ["Lokasi GPS", "Shift kerja", "Rekap lembur"],
  },
  {
    ikon: Wallet,
    nama: "Gaji",
    isi: "Bantu HR mengelola informasi penggajian secara lebih terstruktur dan mudah ditelusuri.",
    tag: ["Komponen gaji", "Slip digital", "Tunjangan"],
  },
  {
    ikon: GraduationCap,
    nama: "Exam",
    isi: "Buat dan kelola evaluasi kemampuan karyawan, lengkap dengan hasil yang tersimpan rapi.",
    tag: ["Bank soal", "Jadwal ujian", "Riwayat nilai"],
  },
  {
    ikon: Library,
    nama: "Library",
    isi: "Simpan dan akses dokumen serta materi perusahaan tanpa mencari di banyak tempat.",
    tag: ["SOP", "Materi belajar", "Akses per divisi"],
  },
  {
    ikon: CalendarCheck,
    nama: "Perizinan",
    isi: "Kelola pengajuan izin dan cuti dengan proses yang lebih sederhana bagi semua pihak.",
    tag: ["Cuti", "Izin", "Persetujuan"],
  },
];

function Fitur() {
  return (
    <section className="fitur" id="fitur">
      <div className="fitur-kepala">
        <p className="fitur-label">Fitur</p>
        <h2>Lima hal yang membuat HR berjalan rapi.</h2>
        <p className="fitur-sub">
          Semua terhubung, sehingga data tidak perlu dimasukkan dua kali.
        </p>
      </div>

      <div className="fitur-daftar">
        {daftar.map((f) => {
          const Ikon = f.ikon;
          return (
            <article className="fitur-item" key={f.nama}>
              <Ikon size={26} strokeWidth={1.5} className="fitur-ikon" />
              <div>
                <h3>{f.nama}</h3>
                <p>{f.isi}</p>
                <ul className="fitur-tag">
                  {f.tag.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Fitur;
