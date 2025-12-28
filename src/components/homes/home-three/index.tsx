import FooterOne from "@/layouts/footers/FooterOne"
import Banner from "./Banner"
import EditorPost from "./EditorPost"
import UpcomingEvents from "./UpcomingEvents"
import HeaderThree from "@/layouts/headers/HeaderThree"
import { NewsArticle } from "@/services"
import NewsletterArea from "@/components/common/NewsletterArea"

interface HomeThreeProps {
   featuredArticles?: NewsArticle[]
   featuredLatest?: NewsArticle[]
   loading?: boolean
   error?: string | null
   upcomingEvents?: any
}

const HomeThree = ({ featuredArticles = [], featuredLatest = [], upcomingEvents = [] }: HomeThreeProps) => {
   return (
      <>
         <HeaderThree />
         <main className="fix">
            <UpcomingEvents upcomingEvents={upcomingEvents} />
            <Banner featuredArticles={featuredArticles} />
            <NewsletterArea />
            {/*<AdBanner />*/}
            <EditorPost featuredLatest={featuredLatest} />
            {/*<TrandingPost />*/}
           {/* <AdBannerThree />*/}
           {/* <OverlayPost />*/}
          {/*  <WeeklyPost />*/}
          {/*   <Newsletter />*/}
         </main>
         <FooterOne style={false} style_2={true} />
      </>
   )
}

export default HomeThree
