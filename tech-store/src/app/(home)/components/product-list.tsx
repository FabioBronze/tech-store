import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/products";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          products={computeProductTotalPrice(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
