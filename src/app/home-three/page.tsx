'use client';
export const dynamic = "force-dynamic";

import { useEffect, useState } from 'react';
import HomeThree from '@/components/homes/home-three';
import Wrapper from '@/layouts/Wrapper';
import { fetchFeaturedArticles, fetchLatestArticles, fetchUpcomingEvents, NewsArticle } from '@/services';

const HomePage = () => {
  const [featuredArticles, setFeaturedArticles] = useState<NewsArticle[]>([]);
  const [featuredLatest, setFeaturedLatest] = useState<NewsArticle[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const articles = await fetchFeaturedArticles();
        setFeaturedArticles(articles);
        const latestArticles = await fetchLatestArticles();
        setFeaturedLatest(latestArticles);
        const upcomingEvents = await fetchUpcomingEvents();
        setUpcomingEvents(upcomingEvents); 
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError(err instanceof Error ? err.message : 'Failed to load articles');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <Wrapper>
      mertbaba
      <HomeThree featuredArticles={featuredArticles} featuredLatest={featuredLatest} upcomingEvents={upcomingEvents} loading={loading} error={error} />
    </Wrapper>
  );
};

export default HomePage;