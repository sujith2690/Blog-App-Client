import axios from "axios";

// const API = axios.create({ baseURL:  });
export const API = axios.create({ baseURL: 'http://localhost:5000/blog' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("UserData")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Token"))
    }`;

  }
  return req;
});

export const getBlogs = () => API.get("/");
export const getCarousalBlog = ()=>API.get('/carousalBlog')
export const getUserBlogs = (userId) => API.get(`/userBlogs/${userId}`);
export const addBlog = (FormData) => API.get('/addBlog',FormData);