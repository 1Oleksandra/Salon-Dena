import { useEffect, useState } from "react";
import logo from "../img/realImg/logo.png";
import postImageOne from "../img/realImg/cosm2.jpg";
import postImageTwo from "../img/realImg/апаратний масаж.jpg";
import style from "../styles/components/Header.module.css";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Price list", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "Team", href: "#team" },
  { label: "Blog", href: "#blog" },
];

const serviceItems = [
  { label: "Hair services", href: "#hair-services" },
  { label: "Skin services", href: "#skin-services" },
  { label: "Laser hair removal", href: "#laser-services" },
  { label: "Body contouring", href: "#body-contouring" },
];

const latestPosts = [
  {
    title: "Hair Coloring & Highlights Services",
    date: "04 April 2026",
    href: "https://denabeautysalon.ca/hair-coloring-highlights-services/",
  },
  {
    title: "Body and Facial Contouring Services",
    date: "26 March 2026",
    href: "https://denabeautysalon.ca/non-surgical-anti-cellulite-fat-reducing-body-contouring-in-north-york/",
    images: [postImageOne, postImageTwo],
  },
  {
    title: "HIFU Lift Treatment in North York",
    date: "26 March 2026",
    href: "https://denabeautysalon.ca/author/denabeautysalon-info/",
  },
  {
    title: "Eyebrow and Lash Services in North York",
    date: "11 March 2026",
    href: "https://denabeautysalon.ca/eyebrow-and-lash-services-in-north-york-dena-beauty-salon/",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    const previousOverflow = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={style.header}>
      <a className={style.logo} href="#home" aria-label="Dena Beauty Salon home">
        <img src={logo} alt="Dena Beauty Salon" />
      </a>

      <nav className={style.desktopNav} aria-label="Main navigation">
        <a className={style.navLink} href="#home">Home</a>
        <a className={style.navLink} href="#about">About us</a>

        <div className={style.servicesMenu}>
          <a className={style.navLink} href="#services">
            Services
            <span className={style.chevron} aria-hidden="true" />
          </a>
          <div className={style.dropdown}>
            {serviceItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>
        </div>

        {menuItems.slice(2).map((item) => (
          <a className={style.navLink} key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className={`${style.menuButton} ${isOpen ? style.menuButtonOpen : ""}`}
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="mobile-menu"
        className={`${style.mobileMenu} ${isOpen ? style.mobileMenuOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <a className={style.drawerLogo} href="#home" onClick={closeMenu} aria-label="Dena Beauty Salon home">
          <img src={logo} alt="Dena Beauty Salon" />
        </a>

        <address className={style.drawerContact}>
          <a
            href="https://maps.google.com/?q=4841+Yonge+St+Unit+211+North+York+ON+M2N+5X2"
            target="_blank"
            rel="noreferrer"
          >
            <span className={style.contactIcon}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
            </span>
            <span>4841 Yonge St, Yonge Sheppard Centre<br />Concourse Level – Near Food Court</span>
          </a>
          <a href="tel:+14162237787">
            <span className={style.contactIcon}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.45 15.45 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
              </svg>
            </span>
            <span>+1 (416) 223-7787</span>
          </a>
          <a href="mailto:denabeautysalon.info@gmail.com">
            <span className={style.contactIcon}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
              </svg>
            </span>
            <span>denabeautysalon.info@gmail.com</span>
          </a>
        </address>

        <section className={style.latestPosts}>
          <h2>Latest post</h2>
          <div className={style.postsList}>
            {latestPosts.map((post) => (
              <a key={post.title} className={style.post} href={post.href} target="_blank" rel="noreferrer">
                {post.images && (
                  <span className={style.postImages} aria-hidden="true">
                    {post.images.map((image) => <img key={image} src={image} alt="" />)}
                  </span>
                )}
                <span className={style.postContent}>
                  <strong>{post.title}</strong>
                  <small>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 2v3M17 2v3M4 9h16M5 4h14a1 1 0 0 1 1 1v15H4V5a1 1 0 0 1 1-1Z" />
                    </svg>
                    {post.date}
                  </small>
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </header>
  );
}
