import FooterOne from "@/layouts/footers/FooterOne"
import Banner from "./Banner";
import Category from "./Category";
import Spotlight from "./Spotlight";
import VideoPost from "./VideoPost";
import WeeklyPost from "./WeeklyPost";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import AdBannerTwo from "./AdBannerTwo";
import AdBannerOne from "./AdBannerOne";
import Newsletter from "./Newsletter";

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main className="fix">
        <Banner />
        <Category />
        <AdBannerOne />
        <Spotlight />
        <AdBannerTwo />
        <VideoPost />
        <WeeklyPost />
        <Newsletter />
      </main>
      <FooterOne style={false} style_2={false} />
    </>
  )
}

export default HomeTwo;
