import "./Hero.css";

const modul = ["Absensi", "Gaji", "Exam", "Library", "Perizinan"];

function Hero({ site }) {
  return (
    <>
      <section className="hero">
        <p className="hero-label">
          <span className="hero-dot" />
          Sistem HR untuk tim modern
        </p>

        <h1>{site.heroJudul}</h1>
        <p className="hero-desc">{site.heroDeskripsi}</p>

        <div className="hero-aksi">
          <a href="#kontak" className="btn-gelap">
            {site.ctaTeks}
          </a>
          <a href="#fitur" className="link-garis">
            Lihat fitur
          </a>
        </div>
      </section>

      <div className="hero-bawah">
        <img
          className="hero-foto"
          src="/hero.jpg"
          alt="Tim HR bekerja bersama di kantor"
        />
        <ul className="hero-modul">
          {modul.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Hero;