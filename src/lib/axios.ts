import axios from "axios";

const api = axios.create({
  baseURL: "https://timbu-get-all-products.reavdev.workers.dev/",
  params: {
    organization_id: import.meta.env.VITE_APP_ORG_ID,
    Appid: import.meta.env.VITE_APP_APP_ID,
    Apikey: import.meta.env.VITE_APP_API_KEY,
  },
});

export default api;
