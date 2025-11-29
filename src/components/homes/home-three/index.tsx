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
import { NewsArticle } from "@/services"

interface HomeThreeProps {
   featuredArticles?: NewsArticle[]
   loading?: boolean
   error?: string | null
}

const HomeThree = ({ featuredArticles = [], loading = false, error = null }: HomeThreeProps) => {
   return (
      <>
         <HeaderThree />
         <main className="fix">
            {error && <div className="alert alert-danger p-3 m-3">Error: {error}</div>}
            {loading && <div className="alert alert-info p-3 m-3">Loading articles...</div>}
            {!loading && !error && <Banner featuredArticles={featuredArticles} />}
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
