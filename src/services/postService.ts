import api from './api';

export const getPosts = async () => {
  const res = await api.get('/posts');
  return res.data;
};

export const getPost = async (id: string | number) => {
  const res = await api.get(`/posts/${id}`);
  return res.data;
};
