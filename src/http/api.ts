import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleLogin = async (data: { email: string; password: string }) =>
  //server call
  api.post("/users/login", data);
