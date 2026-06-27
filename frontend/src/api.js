import axios from "axios";

const api = axios.create({
  baseURL: "https://revenueflow.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// -------------------------
// Payments
// -------------------------

export const submitPayment = async (payload) => {
  const response = await api.post("/payment", payload);
  return response.data;
};

export const getPayments = async () => {
  const response = await api.get("/payment");
  return response.data;
};

// -------------------------
// Revenue Analytics
// -------------------------

export const getAnalytics = async () => {
  const response = await api.get("/analytics");
  return response.data;
};

// -------------------------
// Quality Sign-Off
// -------------------------

export const submitQualitySignoff = async (payload) => {
  const response = await api.post("/quality/signoff", payload);
  return response.data;
};

export const getQualitySignoff = async () => {
  const response = await api.get("/quality");
  return response.data;
};

export default api;