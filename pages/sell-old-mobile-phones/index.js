import Topsellingbrands from "../../Components/Home/TopSellingModels/topsellingmodels"
import BrandDeal from "../../components/Home/BrandDeals/branddeals"
import OurBrands from "../../components/Sell/ourBrand/OurBrands"
import SellBanner from "../../components/Sell/sellBanner"
import SellHero from "../../Components/Sell/SellHero"
import SellServices from "../../components/Sell/SellServices"
import Format from "../../Layout/Format"


const Sell = () => {
  return (
    <Format>
        <SellHero />
        <SellServices/>
        <OurBrands />
        <SellBanner />
        <BrandDeal />
        <Topsellingbrands />
    </Format>
  )
}

export default Sell