import Link from "next/link";
import Image from "next/image";
import SocialIcons, { CAL_LINK } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Image className="logo-mark" src="/logo.png" alt="B.E. Classics logo" width={38} height={38} />
              <span className="logo-word">B.E. Classics</span>
            </Link>
            <p>A digital marketing agency built exclusively for automotive repair shops.</p>
            <SocialIcons />
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Navigation</p>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Contact</p>
            <a href="mailto:baden@b-e-classics.com">baden@b-e-classics.com</a>
            <p>Irvine, California</p>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Hours</p>
            <p>Mon–Fri: 8am – 8pm</p>
            <p>Saturday: 8am – 6pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 B.E. Classics. All rights reserved.</span>
          <span>Guaranteed Booked Appointments</span>
        </div>
      </div>
    </footer>
  );
}

export { CAL_LINK };
