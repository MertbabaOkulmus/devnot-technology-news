import FooterOne from "@/layouts/footers/FooterOne"
import Banner from "./Banner"
import AdBanner from "./AdBanner"
import EditorPost from "./EditorPost"
import TrandingPost from "./TrandingPost"
import AdBannerThree from "./AdBannerThree"
import OverlayPost from "./OverlayPost"
import WeeklyPost from "./WeeklyPost"
import Newsletter from "./Newsletter"
import UpcomingEvents from "./UpcomingEvents"
import HeaderThree from "@/layouts/headers/HeaderThree"
import { NewsArticle } from "@/services"

interface HomeThreeProps {
   featuredArticles?: NewsArticle[]
   featuredLatest?: NewsArticle[]
   loading?: boolean
   error?: string | null
   upcomingEvents?: NewsArticle[]
}

const HomeThree = ({ featuredArticles = [], featuredLatest = [], upcomingEvents = [] }: HomeThreeProps) => {
   return (
      <>
         <HeaderThree />
         <main className="fix">
            <UpcomingEvents upcomingEvents={upcomingEvents} />
            <Banner featuredArticles={featuredArticles} />
            {/*<AdBanner />*/}
            <EditorPost featuredLatest={featuredLatest} />
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
