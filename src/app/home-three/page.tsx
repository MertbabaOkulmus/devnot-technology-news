'use client';

import { useEffect, useState } from 'react';
import HomeThree from '@/components/homes/home-three';
import Wrapper from '@/layouts/Wrapper';
import { fetchFeaturedArticles, NewsArticle } from '@/services';

const HomePage = () => {
  const [featuredArticles, setFeaturedArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const articles = await fetchFeaturedArticles();
        setFeaturedArticles(articles);
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
      <HomeThree featuredArticles={featuredArticles} loading={loading} error={error} />
    </Wrapper>
  );
};

export default HomePage;