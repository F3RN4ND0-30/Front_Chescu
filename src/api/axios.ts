import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: false,
});

instance.interceptors.request.use((config) => {
  return config;
});

export default instance;
