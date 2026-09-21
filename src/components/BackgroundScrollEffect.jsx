import { useEffect } from "react";

function BackgroundScrollEffect() {
  useEffect(() => {
    const handleScroll = () => {
      const about = document.querySelector('[data-section="about"]');
      const services = document.querySelector('[data-section="services"]');

      if (!services || !about) return;

      const start = about.offsetTop; // початок ефекту
      const end = services.offsetTop + services.offsetHeight; // кінець ефекту
      const scrollTop = window.scrollY;

      if (scrollTop >= start && scrollTop <= end) {
        let fraction = (scrollTop - start) / (end - start);

        // обмежуємо fraction від 0 до 1
        fraction = Math.min(Math.max(fraction, 0), 1);

        const startColor = [240, 240, 240]; // #f0f0f0
        const endColor = [62, 20, 30];      // #3E141E

        const currentColor = startColor.map((s, i) =>
          Math.round(s + (endColor[i] - s) * fraction)
        );

        const colorString = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
        document.body.style.backgroundColor = colorString;
      }

      // якщо скрол дійшов далі кінця services → залишаємо насичений колір
      if (scrollTop > end) {
        document.body.style.backgroundColor = "rgb(62, 20, 30)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}

export default BackgroundScrollEffect;
