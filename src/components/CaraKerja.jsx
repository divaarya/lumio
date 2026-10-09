import "./CaraKerja.css";

const langkah = [
  {
    judul: "Daftarkan perusahaan",
    isi: "Buat akun dan masukkan data perusahaan beserta daftar karyawan.",
  },
  {
    judul: "Atur aturan kerja",
    isi: "Tentukan jam kerja, komponen gaji, jenis cuti, dan hak akses.",
  },
  {
    judul: "Undang tim",
    isi: "Karyawan masuk lewat ponsel dan langsung bisa absen atau mengajukan izin.",
  },
  {
    judul: "Pantau dari satu layar",
    isi: "HR melihat kehadiran, gaji, dan persetujuan tanpa berpindah aplikasi.",
  },
];

function CaraKerja() {
  return (
    <section className="cara" id="cara-kerja">
      <h2>Mulai dalam empat langkah.</h2>

      <ol className="cara-garis">
        {langkah.map((l) => (
          <li className="cara-langkah" key={l.judul}>
            <span className="cara-titik" />
            <h3>{l.judul}</h3>
            <p>{l.isi}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default CaraKerja;
