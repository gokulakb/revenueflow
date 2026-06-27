import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  console.log("REQUEST:", config.method, config.url);
  console.log("DATA:", config.data);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("RESPONSE:", response.data);
    return response;
  },
  (error) => {
    console.log("ERROR:", error.response?.data || error.message);
    throw error;
  }
);

export const submitPayment = async (payload) => {
  const response = await api.post("/payment", payload);
  return response.data;
};

export const getPayments = async () => {
  const response = await api.get("/payment");
  return response.data;
};

export const getAnalytics = async () => {
  const response = await api.get("/analytics");
  return response.data;
};

export const submitQualitySignoff = async (payload) => {
  const response = await api.post("/quality/signoff", payload);
  return response.data;
};

export const getQualitySignoff = async () => {
  const response = await api.get("/quality");
  return response.data;
};