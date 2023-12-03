import axios from "axios";

const productionUrl = " https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
export const dollarAmount = (price) => {
  const newDollarAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return newDollarAmount;
};


export const generateAmountOptions = (Number) => {
  return Array.from(({ length: Number }), (_, index) => {
    const Amount = index + 1
    return <option key={Amount} value={Amount}>{Amount}</option>
  })
}