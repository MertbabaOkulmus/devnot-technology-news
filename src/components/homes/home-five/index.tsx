import FooterOne from "@/layouts/footers/FooterOne"
import CoinArea from "./CoinArea"
import Banner from "./Banner"
import AdBanner from "./AdBanner"
import RecentPost from "./RecentPost"
import TrendingPost from "./TrendingPost"
import AdBannerTwo from "./AdBannerTwo"
import MiningStore from "./MiningStore"
import Newsletter from "./Newsletter"
import HeaderFive from "@/layouts/headers/HeaderFive"

const HomeFive = () => {
  return (
    <>
      <HeaderFive />
      <main className="fix">
         <CoinArea />
         <Banner />
         <AdBanner />
         <RecentPost />
         <TrendingPost />
         <AdBannerTwo />
         <MiningStore />
         <Newsletter />
      </main>
      <FooterOne style={false} style_2={true} />
    </>
  )
}

export default HomeFive
