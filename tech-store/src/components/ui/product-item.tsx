import { ProductWithTotalPrice } from "@/helpers/products";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./badge";

interface ProductItemProps {
  products: ProductWithTotalPrice;
}

const ProductItem = ({ products }: ProductItemProps) => {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
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
        {products.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {products.discountPercentage}%
          </Badge>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <p className="test-sm w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {products.name}
        </p>
        <div className="flex items-center gap-2">
          {products.discountPercentage > 0 ? (
            <>
              <p className="text-sm font-semibold">
                {products.totalPrice.toFixed(0)}€
              </p>
              <p className="text-xs line-through opacity-75">
                {Number(products.basePrice).toFixed(0)}€
              </p>
            </>
          ) : (
            <p className="semi-bold text-sm">
              {Number(products.basePrice).toFixed(0)}€
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
