import style from '../../styles/components/Home/AboutUs.module.css'

import Girl from '../../img/realImg/girl-aboutUs.jpg'

function AboutUs() {
  return (
    <section className={style.about} data-section="about" id="about">
      <div className={style.aboutImage} data-reveal="left">
        <img src={Girl} alt="About us" />
      </div>
      <div className={style.aboutText} data-reveal="right" style={{ "--reveal-delay": "120ms" }}>
        <h2 className={`${style.AboutTitle} title`}>Experience Luxury <br /> at Dena Beauty Salon</h2>
        <p>
          For over 20 years, Dena Beauty Salon has been providing exceptional beauty services through international expertise gained across Asia, Europe, and Canada, combined with advanced beauty techniques, exceptional service, and personalized care. We offer a full range of premium beauty services, including precision haircuts, professional hair styling, hair colouring, highlights, balayage, Keratin and Hair Botox treatments, hair extensions, advanced skincare, laser hair removal, and non-surgical body contouring. Using advanced techniques, premium professional products, and personalized consultations, every treatment is tailored to your individual needs, helping you achieve beautiful, natural-looking, and long-lasting results. From the moment you walk through our doors, you’ll be welcomed into a luxurious and relaxing environment where personalized care, exceptional service, and outstanding results come together to create an unforgettable experience you’ll want to return to again and again.
        </p>
                <blockquote className={style.quote}>
          Your satisfaction is our highest priority!
        </blockquote>
      </div>
    </section>
  );
}

export default AboutUs;
