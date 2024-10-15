import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

//axios interceptor
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const handleLogin = async (data: { email: string; password: string }) =>
  //server call
  api.post("/users/login", data);

export const handleRegister = async (data: {
  name: string;
  email: string;
  password: string;
}) =>
  //server call
  api.post("/users/register", data);

export const createBlog = async (data: FormData) =>
  api.post("/blogs", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const generateBlog = async (
  prompt: string
): Promise<{ content: string }> => {
  const response = await api.post("blogs/generate-blog", { prompt: prompt });
  return response.data;
};
