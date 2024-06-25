import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTittle from "../global/SectionTittle";
import ProductsGrid from "../products/ProductsGrid";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList></EmptyList>;

  return (
    <section className="pt-24">
      <SectionTittle text="featured products"></SectionTittle>

      <ProductsGrid products={products}></ProductsGrid>
    </section>
  );
};
export default FeaturedProducts;
