import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3>LUXE NICHE THREADS</h3>

      <p>Premium Pakistani Fashion</p>

      <p>WhatsApp: +92 3377190902</p>

      <p>Adress:P13-B-Muslim Town Faisalabad.</p>

      <div className="social-links">
  <a
    href="https://www.instagram.com/luxenichethreads/"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram /> Instagram
  </a>

  <a
    href="https://www.facebook.com/people/Luxe-NicheThreads/pfbid02fmKWfv7t1T6uwWCFh5fVDgXYZeUaDwbj3Ymt6qVVnu98DZtE5xjQwqryuKpR5YcEl/"
    target="_blank"
    rel="noreferrer"
  >
    <FaFacebookF /> Facebook
  </a>

  <a
    href="https://wa.me/923377190902"
    target="_blank"
    rel="noreferrer"
  >
    <FaWhatsapp /> WhatsApp
  </a>
</div>

      <p>© 2018 Luxe Niche Threads</p>
    </footer>
  );
}

export default Footer;