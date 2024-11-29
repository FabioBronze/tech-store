import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item.tsx";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="p-5 gap-8 flex flex-col mx-auto" style={{ maxWidth: "1200px" }}>
      <Badge
        className="gap-1 w-fit border-primary px-3 py-1 text-sm uppercase"
        variant="outline"
      >
        <ShapesIcon size={16} />
        Catalog
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
