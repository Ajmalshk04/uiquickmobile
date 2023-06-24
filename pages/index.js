import Format from '../Layout/Format'


//components
import Banner from '../Components/Home/Banner/banner'
import Services from '../Components/Home/Services/services'
import SellMethod from '../Components/Home/SellMethod/sellMethod'
import Offerbanner from '../Components/Home/OfferBanner/offerbanner'
import BrandDeals from '../Components/Home/BrandDeals/branddeals'
import Topsellingbrands from '../Components/Home/TopSellingModels/topsellingmodels'
import AboutUs from '../Components/Home/About us/AboutUs'
import Testimonial from '../Components/Home/Review/testimonial'
import Newsletter from '../Components/Home/Newsletter/newsletter'


export default function Home() {
  return (
    <Format>
      <Banner />
      <Services />
      <SellMethod />
      <Offerbanner />
      <BrandDeals />
      <Topsellingbrands />
      <AboutUs />
      <Testimonial />
      <Newsletter />
    </Format>
  )
}
