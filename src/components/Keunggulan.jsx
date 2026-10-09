import "./Keunggulan.css";

const daftar = [
  {
    judul: "Satu tempat untuk semua",
    isi: "Absensi, gaji, ujian, dokumen, dan izin saling terhubung, jadi data tidak perlu dimasukkan dua kali.",
  },
  {
    judul: "Mudah dipakai siapa saja",
    isi: "Tampilan yang bersih membuat karyawan baru langsung paham tanpa pelatihan panjang.",
  },
  {
    judul: "Akses sesuai peran",
    isi: "Setiap orang hanya melihat data yang menjadi tanggung jawabnya, sehingga informasi tetap terjaga.",
  },
  {
    judul: "Siap bertumbuh",
    isi: "Dari belasan sampai ratusan karyawan, sistem tetap ringan dan tidak perlu diganti.",
  },
];

function Keunggulan() {
  return (
    <section className="unggul" id="keunggulan">
      <div className="unggul-isi">
        <h2>Dibuat sederhana, bukan sengaja dibuat rumit.</h2>

        <div className="unggul-grid">
          {daftar.map((d) => (
            <article className="unggul-item" key={d.judul}>
              <h3>{d.judul}</h3>
              <p>{d.isi}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Keunggulan;
