import logo from "../img/realImg/logo.png";
import style from "../styles/components/Footer.module.css";

const menuLinks = [
  ["About us", "#about"],
  ["Contact us", "#contact"],
  ["Price list", "#services"],
  ["Our team", "#team"],
  ["Book appointment", "#home"],
];

const serviceLinks = [
  ["Women’s haircut & styling", "#hair-services"],
  ["Men’s haircut & grooming", "#hair-services"],
  ["Kids services", "#hair-services"],
  ["Highlights, balayage & AirTouch", "#hair-services"],
  ["Hair extensions", "#hair-services"],
  ["Hair treatments", "#hair-services"],
  ["Laser hair removal", "#laser-services"],
  ["Body contouring", "#body-contouring"],
];

function ArrowLink({ href, children }) {
  return (
    <li>
      <a href={href}>
        <span aria-hidden="true">›</span>
        {children}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.topAccent} />

      <div className={style.footerGrid}>
        <div className={style.brandColumn} data-reveal="left">
          <a className={style.brand} href="#home" aria-label="Dena Beauty Salon home">
            <img src={logo} alt="" />
            <span>Dena Beauty Salon</span>
          </a>
          <p>
            A modern beauty salon and laser clinic in North York, Toronto,
            offering professional hair, beauty, laser, and body contouring
            services in an elegant and welcoming space.
          </p>

          <div className={style.socials} aria-label="Social media">
            <a href="#instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle className={style.socialDot} cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="#facebook" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.5 8H17V4.3c-.43-.06-1.92-.18-3.68-.18-3.62 0-6.1 2.2-6.1 6.25V14H3v4.14h4.22V24h5.17v-5.86h4.05L17.08 14h-4.69v-3.22C12.39 9.58 12.72 8 14.5 8Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={style.column} data-reveal style={{ "--reveal-delay": "80ms" }}>
          <h2>Menu</h2>
          <ul>
            {menuLinks.map(([label, href]) => (
              <ArrowLink key={label} href={href}>{label}</ArrowLink>
            ))}
          </ul>
        </div>

        <div className={style.column} data-reveal style={{ "--reveal-delay": "160ms" }}>
          <h2>Our services</h2>
          <ul>
            {serviceLinks.map(([label, href]) => (
              <ArrowLink key={label} href={href}>{label}</ArrowLink>
            ))}
          </ul>
        </div>

        <div className={style.contactColumn} data-reveal="right" style={{ "--reveal-delay": "240ms" }}>
          <h2>Contact</h2>
          <address>
            <a
              href="https://maps.google.com/?q=4841+Yonge+St+Unit+211+North+York+ON+M2N+5X2"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
              <span>4841 Yonge St, Unit 211<br />North York, ON M2N 5X2</span>
            </a>
            <a href="tel:+14162237787">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.45 15.45 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
              </svg>
              <span>+1 (416) 223-7787</span>
            </a>
            <a href="mailto:denabeautysalon.info@gmail.com">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
              </svg>
              <span>denabeautysalon.info@gmail.com</span>
            </a>
          </address>

          <div className={style.hours}>
            <h2>Opening hours</h2>
            <p>Monday – Sunday</p>
            <p>9:30 AM – 8:00 PM</p>
          </div>
        </div>
      </div>

      <div className={style.footerBottom} data-reveal>
        <p>© {new Date().getFullYear()} Dena Beauty Salon. All rights reserved.</p>
        <a href="#policy">Appointment & cancellation policy</a>
      </div>
    </footer>
  );
}
