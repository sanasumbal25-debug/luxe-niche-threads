import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3>LUXE NICHE THREADS</h3>

      <p>Premium Pakistani Fashion</p>

      <p>WhatsApp: +92 3377190902</p>

      <p>Address: P13-B-Muslim Town, Faisalabad.</p>

      <div className="social-links">

        <a
          href="https://www.instagram.com/luxenichethreads/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="social-icon instagram" />
        </a>

        <a
          href="https://www.facebook.com/people/Luxe-NicheThreads/pfbid02fmKWfv7t1T6uwWCFh5fVDgXYZeUaDwbj3Ymt6qVVnu98DZtE5xjQwqryuKpR5YcEl/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="social-icon facebook" />
        </a>

        <a
          href="https://wa.me/923377190902"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp className="social-icon whatsapp" />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube className="social-icon youtube" />
        </a>

      </div>

      <p>© 2018 Luxe Niche Threads</p>
    </footer>
  );
}

export default Footer;