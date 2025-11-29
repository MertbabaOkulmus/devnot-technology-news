import FooterOne from "@/layouts/footers/FooterOne"
import Banner from "./Banner"
import AdBanner from "./AdBanner"
import EditorPost from "./EditorPost"
import TrandingPost from "./TrandingPost"
import AdBannerThree from "./AdBannerThree"
import OverlayPost from "./OverlayPost"
import WeeklyPost from "./WeeklyPost"
import Newsletter from "./Newsletter"
import HeaderThree from "@/layouts/headers/HeaderThree"

const HomeThree = () => {
   return (
      <>
         <HeaderThree />
         <main className="fix">
            <Banner />
            <AdBanner />
            <EditorPost />
            <TrandingPost />
            <AdBannerThree />
            <OverlayPost />
            <WeeklyPost />
            <Newsletter />
         </main>
         <FooterOne style={false} style_2={true} />
      </>
   )
}

export default HomeThree
