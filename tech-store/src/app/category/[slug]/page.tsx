import { PrismaClient } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { computeProductTotalPrice } from "@/helpers/products";

// Criação da instância do Prisma Client
const prisma = new PrismaClient();

async function getCategory(slug: string) {
  // Buscando a categoria e seus produtos no banco
  const category = await prisma.category.findFirst({
    where: { slug },
    include: { products: true },
  });
  return category;
}

export default async function CategoryProducts({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Buscando os dados da categoria
  const category = await getCategory(slug);

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
}
