import { FeaturedProducts, Hero } from "../components";
import customeFetch from "../utils";
export const loader = async () => {
  const url = "/products?featured=true";
  const response = await customeFetch(url);
  console.log(response);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
