import { get, post } from './api';

type User = {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
  bio: string | null;
  avatarUrl: string | null;
  roleId: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string | null;
  articles: any[];
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string | null;
  articles: NewsArticle[];
};

export type NewsArticle = {
  id: number;
  title: string;
  slug: string;
  content: string;
  summary: string | null;
  userId: number;
  categoryId: number;
  status: string;
  viewCount: number;
  isFeaturedArticle: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string | null;
  date: string | null;
  description: any | null;
  location: string | null;
  isActive?: boolean;
  user: User;
  category: Category;
  articleTags: any[];
  media: any[];
  imageUrl: string;
};

/**
 * Service for the `home-three` page.
 * Keep page-specific fetch logic and DTOs here. Endpoints are called via the centralized `api` wrapper.
 */
export const fetchFeaturedArticles = async (): Promise<NewsArticle[]> => {
  return get<NewsArticle[]>('/Article/featured?n=4');
};

export const fetchCategories = async (): Promise<Category[]> => {
  return get<Category[]>('/Article/categories');
};

export const fetchLatestArticles = async (): Promise<NewsArticle[]> => {
  return get<NewsArticle[]>('/Article/latest');
};

export const fetchHomeThreeRecent = async (limit = 5): Promise<NewsArticle[]> => {
  return get<NewsArticle[]>(`/home-three/recent?limit=${limit}`);
};

export const fetchUpcomingEvents = async (): Promise<NewsArticle[]> => {
  return get<NewsArticle[]>('/Event/upcoming');
};

export const fetchEventSlug = async (slug: string): Promise<NewsArticle> => {
  return get<NewsArticle>(`/Event/slug/${slug}`);
};

export const fetchArticleSlug = async (slug: string): Promise<NewsArticle> => {
  return get<NewsArticle>(`/Article/${slug}`);
};

export const fetchArticleCategorySlug = async (slug: string): Promise<NewsArticle> => {
  return get<NewsArticle>(`/Article/category/${slug}`);
};

export const fetchAuthorList = async (): Promise<NewsArticle> => {
  return get<NewsArticle>(`/Author/all`);
};

export const fetchAuthorDetail = async (id: number): Promise<NewsArticle> => {
  return get<NewsArticle>(`/Author/get/${id}`);
};

export const postNewsletter = async (data: any): Promise<NewsArticle> => {
  return post<NewsArticle>(`/Newsletter`, data);
};

const HomeThreeService = {
  fetchFeaturedArticles,
  fetchCategories,
  fetchLatestArticles,
  fetchHomeThreeRecent,
  fetchUpcomingEvents,
  fetchEventSlug,
  fetchArticleSlug,
  fetchArticleCategorySlug,
  fetchAuthorDetail,
  fetchAuthorList
};

export default HomeThreeService;
