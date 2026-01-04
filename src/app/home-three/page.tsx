"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import HomeThree from "@/components/homes/home-three";
import Wrapper from "@/layouts/Wrapper";
import { fetchFeaturedArticles, fetchLatestArticles, fetchUpcomingEvents, NewsArticle } from "@/services";

const HomePage = () => {
  const [featuredArticles, setFeaturedArticles] = useState<NewsArticle[]>([]);
  const [featuredLatest, setFeaturedLatest] = useState<NewsArticle[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const [articles, latestArticles, upcoming] = await Promise.all([
          fetchFeaturedArticles(),
          fetchLatestArticles(),
          fetchUpcomingEvents(),
        ]);

        if (!isMounted) return;

        setFeaturedArticles(articles);
        setFeaturedLatest(latestArticles);
        setUpcomingEvents(upcoming);
      } catch (err) {
        console.error("Error fetching articles:", err);
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : "Failed to load articles");
      } finally {
        if (!isMounted) return;
        setLoading(false); // <<< en kritik satır buydu
      }
    };

    loadArticles();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Wrapper>
      <HomeThree
        featuredArticles={featuredArticles}
        featuredLatest={featuredLatest}
        upcomingEvents={upcomingEvents}
        loading={loading}
        error={error}
      />
    </Wrapper>
  );
};

export default HomePage;