import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/products-images";
import ProductsInfo from "./components/products-info";
import { computeProductTotalPrice } from "@/helpers/products";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="flex flex-col gap-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductsInfo product={computeProductTotalPrice(product)} />
    </section>
  );
};

export default ProductDetailsPage;
