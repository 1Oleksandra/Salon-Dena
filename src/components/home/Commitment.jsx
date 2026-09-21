import style from '../../styles/components/Home/Commitment.module.css'

import img1 from '../../img/realImg/5.png'
import img2 from '../../img/realImg/cosm2.jpg'
import img3 from '../../img/realImg/1.png'
import img4 from '../../img/realImg/брюнетка.jpg'
import img5 from '../../img/realImg/апаратний масаж.jpg'
import img6 from '../../img/realImg/7.png'
import img7 from '../../img/realImg/дитина.jpg'




function Commitment() {
  return (
    <section className={style.commitment}>
        <div className={style.slider} data-reveal="left">
        <div className={style.track}>
            <div className={style.slide}><img src={img1} alt="Hair style 1" /></div>
            <div className={style.slide}><img src={img2} alt="Hair style 2" /></div>
            <div className={style.slide}><img src={img3} alt="Hair style 3" /></div>
            <div className={style.slide}><img src={img4} alt="Hair style 4" /></div>
            <div className={style.slide}><img src={img5} alt="Hair style 5" /></div>
            <div className={style.slide}><img src={img6} alt="Hair style 6" /></div>
            <div className={style.slide}><img src={img7} alt="Hair style 6" /></div>

            {/* дублюємо ті самі елементи для безшовності */}
            <div className={style.slide}><img src={img1} alt="Hair style 1" /></div>
            <div className={style.slide}><img src={img2} alt="Hair style 2" /></div>
            <div className={style.slide}><img src={img3} alt="Hair style 3" /></div>
            <div className={style.slide}><img src={img4} alt="Hair style 4" /></div>
            <div className={style.slide}><img src={img5} alt="Hair style 5" /></div>
            <div className={style.slide}><img src={img6} alt="Hair style 6" /></div>
            <div className={style.slide}><img src={img7} alt="Hair style 6" /></div>
        </div>
        </div>
      <div className={style.commitmentContent} data-reveal="right" style={{ "--reveal-delay": "120ms" }}>
        <h2 className={style.commitmentTitle}>Our Commitment</h2>
        <p className={style.commitmentText}>
            At Dena Beauty Salon, we are committed to honest advice, personalized care, and exceptional results. Complimentary 10-minute consultations are available. Professional consultations are recommended for Highlights, Balayage, AirTouch, Colour Corrections, Hair Extensions, Hair Treatments, HydraFacial, Laser Hair Removal, and Body Contouring. Service prices may vary based on hair length, hair density, technical complexity, and your selected hairstylist or specialist. Please refer to our online booking system for detailed service descriptions and pricing. We stand behind the quality of every service. If you’re not completely satisfied, please contact us within 3 days of your Haircut or Hair Colour service. We’ll arrange the earliest possible appointment to make any necessary adjustments at no additional charge.
        </p>
     
      </div>
    </section>
  );
}

export default Commitment;
