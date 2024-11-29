import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/products-images";

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
    <section>
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
    </section>
  );
};

export default ProductDetailsPage;
