import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000/user' });

export const logInApi = (formData) => API.post("/login", formData);
export const signUpApi = (formData) => API.post("/signUp", formData);