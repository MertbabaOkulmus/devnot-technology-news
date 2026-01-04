import FooterOne from "@/layouts/footers/FooterOne";
import Banner from "./Banner";
import EditorPost from "./EditorPost";
import UpcomingEvents from "./UpcomingEvents";
import HeaderThree from "@/layouts/headers/HeaderThree";
import { NewsArticle } from "@/services";
import NewsletterArea from "@/components/common/NewsletterArea";

interface HomeThreeProps {
  featuredArticles?: NewsArticle[];
  featuredLatest?: NewsArticle[];
  loading?: boolean;
  error?: string | null;
  upcomingEvents?: any[];
}

const HomeThree = ({
  featuredArticles = [],
  featuredLatest = [],
  upcomingEvents = [],
  loading = false,
  error = null,
}: HomeThreeProps) => {
  return (
    <>
      <HeaderThree />
      <main className="fix">
        {/* İstersen error UI ekleyebilirsin (şimdilik tasarımı bozmamak için sadece gösteriyorum) */}
        {error ? (
          <p className="text-center pt-30 pb-30">{error}</p>
        ) : (
          <>
            <UpcomingEvents upcomingEvents={upcomingEvents ?? []} isLoading={loading} />
            <Banner featuredArticles={featuredArticles} isLoading={loading} />
            <NewsletterArea />
            <EditorPost featuredLatest={featuredLatest} isLoading={loading} />
          </>
        )}
      </main>
      <FooterOne style={false} style_2={true} />
    </>
  );
};

export default HomeThree;