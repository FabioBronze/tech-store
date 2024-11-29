import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="rounded-tr-ls flex h-[150px] w-full items-center justify-center rounded-tl-lg bg-gradient-to-r from-[#5033C3] to-[rgba(80,51,195,0.20)]">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="max-w-auto h-auto max-h-[70%] w-auto"
            style={{ objectFit: "contain", width: "auto", height: "80px" }}
            priority
          />
        </div>
        <div className="rounded-bl-lg rounded-br-lg bg-accent p-2">
          <p className="text-sm text-center font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
