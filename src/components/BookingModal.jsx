import { useEffect, useMemo, useRef, useState } from "react";
import style from "../styles/components/BookingModal.module.css";

const categories = ["All", "Hair", "Colour", "Skin", "Laser", "Body"];

const services = [
  {
    id: 1,
    category: "Hair",
    name: "Bangs Trim",
    duration: "10 min",
    price: 20,
    priceLabel: "CA$20",
  },
  {
    id: 2,
    category: "Hair",
    name: "Blow-Dry — Short Hair",
    duration: "30 min",
    price: 45,
    priceLabel: "CA$45",
  },
  {
    id: 3,
    category: "Hair",
    name: "Hair Trim",
    duration: "15 min",
    price: 50,
    priceLabel: "CA$50",
  },
  {
    id: 4,
    category: "Hair",
    name: "Short Length Haircut",
    duration: "45 min",
    price: 65,
    priceLabel: "CA$65–70",
  },
  {
    id: 5,
    category: "Hair",
    name: "Medium Length Haircut",
    duration: "1 hr",
    price: 75,
    priceLabel: "CA$75–80",
  },
  {
    id: 6,
    category: "Hair",
    name: "Long Length Haircut",
    duration: "1 hr",
    price: 85,
    priceLabel: "CA$85–90",
  },
  {
    id: 7,
    category: "Hair",
    name: "Men’s Professional Haircut",
    duration: "45 min",
    price: 53,
    priceLabel: "CA$53–60",
  },
  {
    id: 8,
    category: "Colour",
    name: "Colour Correction Consultation",
    duration: "15 min",
    price: 0,
    priceLabel: "Free",
  },
  {
    id: 9,
    category: "Colour",
    name: "Toner — Short Hair",
    duration: "45 min",
    price: 50,
    priceLabel: "CA$50",
  },
  {
    id: 10,
    category: "Colour",
    name: "Root Retouch — Short Hair",
    duration: "1 hr 15 min",
    price: 90,
    priceLabel: "CA$90",
  },
  {
    id: 11,
    category: "Colour",
    name: "Full Head Colour — Short Hair",
    duration: "1 hr 15 min",
    price: 115,
    priceLabel: "CA$115",
  },
  {
    id: 12,
    category: "Colour",
    name: "Face-Framing Highlights",
    duration: "1 hr 40 min",
    price: 170,
    priceLabel: "CA$170–200",
  },
  {
    id: 13,
    category: "Colour",
    name: "Half Head Highlights",
    duration: "2 hr",
    price: 180,
    priceLabel: "CA$180–230",
  },
  {
    id: 14,
    category: "Colour",
    name: "Full Head Balayage — Medium Hair",
    duration: "3 hr",
    price: 350,
    priceLabel: "CA$350–370",
  },
  {
    id: 15,
    category: "Skin",
    name: "Face & Neck Massage",
    duration: "15 min",
    price: 50,
    priceLabel: "CA$50",
  },
  {
    id: 16,
    category: "Skin",
    name: "Microdermabrasion Facial",
    duration: "25 min",
    price: 90,
    priceLabel: "CA$90",
  },
  {
    id: 17,
    category: "Skin",
    name: "Deep Cleansing Facial",
    duration: "45 min",
    price: 125,
    priceLabel: "CA$125",
  },
  {
    id: 18,
    category: "Skin",
    name: "Hydro Facial — Basic",
    duration: "35 min",
    price: 155,
    priceLabel: "CA$155",
  },
  {
    id: 19,
    category: "Skin",
    name: "Anti-Aging Facial",
    duration: "1 hr",
    price: 185,
    priceLabel: "CA$185",
  },
  {
    id: 20,
    category: "Laser",
    name: "Upper Lip & Chin",
    duration: "15 min",
    price: 40,
    priceLabel: "CA$40",
  },
  {
    id: 21,
    category: "Laser",
    name: "Underarms",
    duration: "25 min",
    price: 55,
    priceLabel: "CA$55",
  },
  {
    id: 22,
    category: "Laser",
    name: "Bikini Line",
    duration: "20 min",
    price: 60,
    priceLabel: "CA$60",
  },
  {
    id: 23,
    category: "Laser",
    name: "Full Legs",
    duration: "40 min",
    price: 145,
    priceLabel: "CA$145",
  },
  {
    id: 24,
    category: "Laser",
    name: "Full Body",
    duration: "1 hr 30 min",
    price: 325,
    priceLabel: "CA$325",
  },
  {
    id: 25,
    category: "Body",
    name: "Body Contouring Consultation",
    duration: "Consultation",
    price: 0,
    priceLabel: "Free",
  },
  {
    id: 26,
    category: "Body",
    name: "Neck Contouring",
    duration: "20 min",
    price: 80,
    priceLabel: "CA$80",
  },
  {
    id: 27,
    category: "Body",
    name: "RF Facial — Contouring & Lift",
    duration: "30 min",
    price: 250,
    priceLabel: "CA$250",
  },
  {
    id: 28,
    category: "Body",
    name: "Abdomen Contouring",
    duration: "50 min",
    price: 330,
    priceLabel: "CA$330",
  },
  {
    id: 29,
    category: "Body",
    name: "Flanks / Love Handles",
    duration: "1 hr",
    price: 350,
    priceLabel: "CA$350",
  },
];

export default function BookingModal({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return services.filter((service) => {
      const matchesCategory =
        activeCategory === "All" || service.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        service.name.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const selectedServices = services.filter((service) =>
    selected.includes(service.id),
  );
  const total = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0,
  );

  const toggleService = (id) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((serviceId) => serviceId !== id)
        : [...current, id],
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className={style.backdrop}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section
        className={style.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
      >
        <header className={style.modalHeader}>
          <div>
            <span className={style.eyebrow}>Dena Beauty Salon</span>
            <h2 id="booking-title">Choose your services</h2>
          </div>
          <button
            ref={closeButtonRef}
            className={style.closeButton}
            type="button"
            onClick={onClose}
            aria-label="Close booking window"
          >
            <span />
            <span />
          </button>
        </header>

        <div className={style.progress} aria-label="Booking progress">
          <span className={style.activeStep}>
            <b>1</b> Services
          </span>
          <span>
            <b>2</b> Date & time
          </span>
          <span>
            <b>3</b> Confirm
          </span>
        </div>

        <div className={style.searchWrap}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m16 16 5 5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search services"
            aria-label="Search services"
          />
        </div>

        <div className={style.categories} aria-label="Service categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? style.activeCategory : ""
              }
              type="button"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={style.serviceList}>
          {filteredServices.map((service) => {
            const isSelected = selected.includes(service.id);
            return (
              <button
                key={service.id}
                className={`${style.serviceCard} ${isSelected ? style.selectedCard : ""}`}
                type="button"
                onClick={() => toggleService(service.id)}
                aria-pressed={isSelected}
              >
                <span className={style.serviceInfo}>
                  <strong>{service.name}</strong>
                  <small>
                    {service.category} · {service.duration}
                  </small>
                  <b>{service.priceLabel}</b>
                </span>
                <span className={style.addButton} aria-hidden="true">
                  {isSelected ? "✓" : "+"}
                </span>
              </button>
            );
          })}

          {filteredServices.length === 0 && (
            <p className={style.emptyState}>No services match your search.</p>
          )}
        </div>

        <footer className={style.summary}>
          <div>
            <span>
              {selected.length} {selected.length === 1 ? "service" : "services"}
            </span>
            <strong>
              {selected.length ? `from CA$${total.toFixed(2)}` : "CA$0.00"}
            </strong>
          </div>
          <a
            className={selected.length ? "" : style.disabledContinue}
            href={
              selected.length
                ? "https://booknow.denabeautysalon.ca/booking/"
                : undefined
            }
            target="_blank"
            rel="noreferrer"
            aria-disabled={!selected.length}
            onClick={(event) => !selected.length && event.preventDefault()}
          >
            Continue
          </a>
        </footer>
      </section>
    </div>
  );
}
