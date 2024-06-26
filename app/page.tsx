import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import { Suspense } from "react";

const Home = () => {
  return (
    <>
      <Hero></Hero>

      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts></FeaturedProducts>
      </Suspense>
    </>
  );
};
export default Home;
