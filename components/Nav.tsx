"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialIcons, { CAL_LINK } from "@/components/SocialIcons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="wrap">
          <Link href="/" className="logo">
            <Image className="logo-mark" src="/logo.png" alt="B.E. Classics logo" width={38} height={38} />
            <span className="logo-word">B.E. Classics</span>
          </Link>

          <button
            className={`nav-toggle ${open ? "is-active" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-menu ${open ? "is-open" : ""}`}>
            <div className="nav-links">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/services" onClick={closeMenu}>
                Services
              </Link>
              <Link href="/blog" onClick={closeMenu}>
                Blog
              </Link>
              <Link href="/#contact" onClick={closeMenu}>
                Contact
              </Link>
            </div>
            <SocialIcons nav />
            <a className="nav-cta" href={CAL_LINK} target="_blank" rel="noopener" onClick={closeMenu}>
              Book a Free Google Audit
            </a>
          </div>
        </div>
        <div className={`nav-backdrop ${open ? "is-open" : ""}`} onClick={closeMenu} />
      </nav>

      <a
        className="side-tab"
        href={CAL_LINK}
        target="_blank"
        rel="noopener"
        aria-label="Book a free Google audit"
      >
        <span className="side-tab-dot"></span>
        <span className="side-tab-label">Free Google Audit</span>
      </a>
    </>
  );
}
