import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/products-images";
import ProductsInfo from "./components/products-info";
import { computeProductTotalPrice } from "@/helpers/products";
import ProductList from "@/app/(home)/components/product-list";
import SectionTitle from "@/app/(home)/components/section-title";

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
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="flex flex-col gap-8 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductsInfo product={computeProductTotalPrice(product)} />
      <div>
        <SectionTitle>Recommended</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </section>
  );
};

export default ProductDetailsPage;
