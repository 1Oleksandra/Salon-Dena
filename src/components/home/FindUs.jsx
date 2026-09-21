import style from '../../styles/components/Home/FindUs.module.css'

function FindUs () {
    return (
        <>
<section className={style.findUs} id="contact">
  <div className={style.overlay} data-reveal="left">
    <h2>How to Find Us?</h2>
    <p>
      Dena Beauty Salon is conveniently located at Yonge Sheppard Centre, 
      on the Concourse Level near the Food Court, just 50 metres from 
      Sheppard–Yonge Subway Station.
    </p>
    <p className={style.adress}>4841 Yonge St Unit 211, North York, ON M2N 5X2</p>
  </div>

<iframe
  width="100%"
  height="100%"
  src={`https://api.mapbox.com/styles/v1/olexsandra/cmub3b5ba009w01qt1f7ja4n7.html?title=false&access_token=${import.meta.env.VITE_MAPBOX_TOKEN}&zoomwheel=false#11/40.7526/-74.0924`}
  style={{ border: "none" }}
  allow="geolocation"
  title="Find Us Map"
></iframe>


</section>

        </>
    )
}

export default FindUs
