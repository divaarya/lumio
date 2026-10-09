"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar({ nama }) {
  const [buka, setBuka] = useState(false);
  const tutup = () => setBuka(false);

  return (
    <header className="nav">
      <div className="nav-logo">{nama}</div>

      <nav className={buka ? "nav-menu buka" : "nav-menu"}>
        <a href="#fitur" onClick={tutup}>
          Fitur
        </a>
        <a href="#cara-kerja" onClick={tutup}>
          Cara kerja
        </a>
        <a href="#testimoni" onClick={tutup}>
          Testimoni
        </a>
        <a href="#harga" onClick={tutup}>
          Harga
        </a>
        <a href="#faq" onClick={tutup}>
          Tanya jawab
        </a>
        <a href="#kontak" onClick={tutup}>
          Kontak
        </a>
      </nav>

      <button
        className="nav-toggle"
        onClick={() => setBuka(!buka)}
        aria-label="Buka menu"
      >
        {buka ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

export default Navbar;
