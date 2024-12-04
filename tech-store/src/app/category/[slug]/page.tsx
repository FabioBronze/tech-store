import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { computeProductTotalPrice } from "@/helpers/products";
import { prismaClient } from "@/lib/prisma";

interface CategoryProductsProps {
  params: { slug: string };
}

const CategoryProducts = async ({ params }: CategoryProductsProps) => {
  const { slug } = params;

  const category = await prismaClient.category.findFirst({
    where: {
      slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div
      className="mx-auto flex flex-col gap-8 p-5"
      style={{ maxWidth: "1000px" }}
    >
      <Badge
        className="w-fit gap-1 border-primary px-3 py-1 text-sm uppercase"
        variant="outline"
      >
        {CATEGORY_ICON[slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            products={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
