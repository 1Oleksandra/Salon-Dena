
import Hero from "../home/Hero"
import Reviews from '../home/Reviews'
import Services from "../home/Services"
import AboutUs from "../home/AboutUs"
import Commitment from "../home/Commitment"
import FindUs from "../home/FindUs"
import PolicyContent from "../home/PolicyContent"
import Header from "../Header"
import Footer from "../Footer"
import ScrollReveal from "../ScrollReveal"
import FixedBookingButton from "../FixedBookingButton"

// import BackgroundScrollEffect from "../BackgroundScrollEffect"


export default function Home(){
    return(
        <>
        {/* <BackgroundScrollEffect /> */}
        <ScrollReveal />
        <Header />
        <FixedBookingButton />
        <Hero />
        <Reviews />
        <AboutUs />  
        <Services />
        <Commitment/>
        <FindUs/>
        <PolicyContent/>
        <Footer />
        </>
    )
}
