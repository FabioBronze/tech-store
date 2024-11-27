import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  products: Product;
}

const ProductItem = ({ products }: ProductItemProps) => {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={products.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="max-x-[80%] h-auto w-auto max-w-[70%]"
          style={{
            objectFit: "contain",
          }}
          alt={products.name}
        />
      </div>
      <div>
        <p className="test-sm w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {products.name}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
