import axios from "axios";

const productionURL = "https://strapi-store-server.onrender.com/api";

const customFetch = axios.create({
  baseURL: productionURL,
});

export default customFetch;

export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarAmount;
};
