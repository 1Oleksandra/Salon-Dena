import style from '../../styles/components/Home/Services.module.css'

import img2 from '../../img/realImg/2.png'

import img1 from '../../img/realImg/чоловік.jpg'
import img3 from '../../img/realImg/косметологія.jpg'
import img4 from '../../img/realImg/жінка.jpg'

import img5 from '../../img/realImg/епіляція.jpg'
import img6 from '../../img/realImg/лазер.PNG'

import img7 from '../../img/realImg/апаратний масаж.jpg'
import img8 from '../../img/realImg/6.png'
import img9 from '../../img/realImg/cos.jpg'

function Services() {
  return (
    <section className={style.services} data-section="services" id="services">
      <h2 className={`${style.servicesTitle} title`} data-reveal>Studio focus areas:</h2>

      <div className={style.service} id="hair-services" data-reveal="left">
        <div className={style.serviceText}>
          <h3 className='title'>Hair Services</h3>
          <p>
            At Dena Beauty Salon, where expert care meets personalized style, we create an outstanding salon experience through exceptional service, advanced techniques, and personalized care. Our skilled hairstylists are dedicated to helping every client look and feel their absolute best. Whether you’re looking for a simple trim or a complete hair transformation, we take the time to understand your goals and recommend the services that best suit your hair type, lifestyle, and personal style. From precision haircuts and professional hair colour to balayage, highlights, keratin treatments, Hair Botox, hair extensions, blowouts, and professional styling, every service is tailored to achieve beautiful, natural-looking results. Using advanced techniques, premium professional products, and detailed consultations, every appointment is designed to enhance the health, beauty, and manageability of your hair. Our commitment to quality and attention to detail ensures that every client enjoys a professional, personalized salon experience.
          </p>
          <button className={`{style.btn} btn` }>BOOK</button>
        </div>
        <div className={style.serviceImages}>
            <div className={style.img}>
                <img src={img2} alt="Волосы" />
            </div>
          <div className={style.img}>
                <img src={img1} alt="Мытье волос" />
            </div>
            <div className={style.img}>
            </div>
        </div>
      </div>

      <div className={style.service} id="skin-services" data-reveal="right">
        <div className={style.serviceText}>
          <h3>Skin Services</h3>
          <p>
            Our treatments are customized to your unique skin type and concerns, combining professional techniques with premium skincare products to promote healthier, smoother, and more radiant skin. We offer Deep Cleansing Facials, Hydro Facials, Microdermabrasion, Light Therapy, Acne Treatments, Anti-Aging Facials, Photofacials, Skin Rejuvenation, and Mesotherapy. Each treatment is personalized to improve your skin’s health, texture, hydration, and overall appearance in a luxurious and relaxing environment.
          </p>
          <button className={`{style.btn} btn` }>BOOK</button>
        </div>
        <div className={style.serviceImages}>
            <div className={style.img}>
                <img src={img9} alt="" />
            </div>
            <div className={style.img}>
          <img src={img3} alt="Макияж" />
            </div>
            <div className={style.img}>
          <img src={img4} alt="Прическа" />
            </div>

        </div>
      </div>

      <div className={style.service} id="laser-services" data-reveal="left">
        <div className={style.serviceText}>
          <h3>Laser Hair Removal</h3>
          <p>
            At Dena Beauty Salon, we offer professional laser hair removal for women and men, from small treatment areas to full-body services. Every treatment is customized to your skin, hair type, and individual goals using advanced laser technology and personalized consultations for safe, comfortable, and effective treatments.
          </p>
          <button className={`{style.btn} btn` }>BOOK</button>
        </div>
        <div className={style.serviceImages}>
            <div className={style.img}>
          <img src={img5} alt="Маникюр" />
            </div>
            <div className={style.img}>
          <img src={img6} alt="Педикюр" />
            </div>
        </div>
      </div>

            <div className={style.service} id="body-contouring" data-reveal="right">
        <div className={style.serviceText}>
          <h3>Body Contouring</h3>
          <p>
            Our advanced non-surgical body contouring services are tailored to your body goals and target areas such as the abdomen, waist, thighs, arms, buttocks, and back. Without injections, surgery, or downtime, every treatment combines modern technology with professional care to help you achieve a more sculpted appearance in a safe and comfortable environment.
          </p>
          <button className={`{style.btn} btn` }>BOOK</button>
        </div>
        <div className={style.serviceImages}>
            <div className={style.img}>
            </div>
            <div className={style.img}>
          <img src={img7} alt="Маникюр" />
            </div>
            <div className={style.img}>
          <img src={img8} alt="Педикюр" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
