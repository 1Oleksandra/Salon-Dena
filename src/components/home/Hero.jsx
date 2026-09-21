import style from "../../styles/components/Home/Hero.module.css";
import img1 from "../../img/foto1.jpg";
import img2 from "../../img/foto2.jpg";
import img3 from "../../img/foto3.jpg";
import img4 from "../../img/foto4.jpg";

export default function Hero() {
  return (
    <section className={style.hero} id="home">
      <div className={style.sliderWrapper}>
        <div className={style.slider}>
          <img src={img1} alt="foto1" />
          <img src={img2} alt="foto4" />
          <img src={img4} alt="foto3" />
          <img src={img3} alt="foto2" />
        </div>

        <div className={style.content}>
          <div className={style.contentLeft}>
            <h1>Luxury Hair, <span className={style.bold}>Skin</span> , Laser & Body <span className={style.italisn}>Contouring </span> Services</h1>
            <p>Dena Beauty Salon is one of Toronto’s most trusted beauty destinations, offering premium hair, skin, laser hair removal, body contouring, and beauty services.</p>
            <button>Book your appointment</button>
          </div>
          <div className={style.contentRight}>
            <div className={style.items}>
              <div className={style.item}>
                <h3>Bridal & Party Makeup</h3>
              </div>
              <div className={style.item}>
                <h3>Haircuts & Styling</h3>
              </div>
              <div className={style.item}>
                <h3>Waxing & Hair Removal</h3>
              </div>
              <div className={style.item}>
                <h3>Men's Hair Cut</h3>
              </div>
              <div className={style.item}>
                <h3>Kids Haircuts & Styling</h3>
              </div>
              <div className={style.item}>
                <h3>Body Contouring</h3>
              </div>
              <div className={style.item}>
                <h3>highlight and color</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
