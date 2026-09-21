import { useCallback, useState } from "react";
import BookingModal from "./BookingModal";
import style from "../styles/components/FixedBookingButton.module.css";

export default function FixedBookingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button className={style.bookingButton} type="button" onClick={() => setIsOpen(true)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2v3M17 2v3M3.5 9h17M5.5 4h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
          <path d="m9 15 2 2 4-5" />
        </svg>
        <span>Book appointment</span>
      </button>
      <BookingModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
