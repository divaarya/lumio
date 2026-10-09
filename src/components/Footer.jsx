import "./Footer.css";

function Footer({ nama }) {
  return (
    <footer className="footer">
      <span className="footer-nama">{nama}.</span>

      <nav className="footer-menu">
        <a href="#fitur">Fitur</a>
        <a href="#harga">Harga</a>
        <a href="#faq">Tanya jawab</a>
        <a href="#kontak">Kontak</a>
      </nav>

      <span className="footer-hak">© 2026 {nama}. Seluruh hak dilindungi.</span>
    </footer>
  );
}

export default Footer;
