import HeaderOne from "@/layouts/headers/HeaderOne"
import Feature from "./Feature"
import Newsletter from "./Newsletter"
import LatestPost from "./LatestPost"
import Category from "./Category"
import Recipe from "./Recipe"
import AdBanner from "./AdBanner"
import Healthy from "./Healthy"
import AdBannerTwo from "./AdBannerTwo"
import FooterOne from "@/layouts/footers/FooterOne"

const HomeOne = () => {
   return (
      <>
         <HeaderOne />
         <main className="fix">
            <Feature />
            <Newsletter />
            <LatestPost />
            <Category />
            <Recipe />
            <AdBanner />
            <Healthy />
            <AdBannerTwo />
         </main>
         <FooterOne style={true} style_2={false} />
      </>
   )
}

export default HomeOne
