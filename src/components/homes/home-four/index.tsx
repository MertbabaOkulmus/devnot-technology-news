import Banner from "./Banner"
import EditPost from "./EditPost"
import AdBanner from "./AdBanner"
import LatestPost from "./LatestPost"
import TrendingPost from "./TrendingPost"
import AdBannerTwo from "./AdBannerTwo"
import WeeklyPost from "./WeeklyPost"
import Instagram from "./Instagram"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderFour from "@/layouts/headers/HeaderFour"

const HomeFour = () => {
  return (
    <> 
      <HeaderFour />
      <main className="fix">
         <Banner />
         <EditPost />
         <AdBanner />
         <LatestPost />
         <TrendingPost />
         <AdBannerTwo />
         <WeeklyPost />
         <Instagram />
      </main>
      <FooterTwo />
    </>
  )
}

export default HomeFour
