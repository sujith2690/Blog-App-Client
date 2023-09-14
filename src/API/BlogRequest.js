import axios from "axios";

export const API = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("UserData")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Token"))
    }`;
  }
  return req;
});

export const getBlogs = () => API.get("/blog");
export const getCarousalBlog = ()=>API.get('/blog/carousalBlog')
export const getUserBlogs = (userId) => API.get(`/blog/userBlogs/${userId}`);
export const addBlog = (FormData) => API.get('/blog/addBlog',FormData);