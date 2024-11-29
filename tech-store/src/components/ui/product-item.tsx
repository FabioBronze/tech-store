import { ProductWithTotalPrice } from "@/helpers/products";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./badge";
import Link from "next/link";

interface ProductItemProps {
  products: ProductWithTotalPrice;
}

const ProductItem = ({ products }: ProductItemProps) => {
  return (
    <Link href={`/product/${products.slug}`}>
      <div className="flex flex-col gap-4">
        <div className="relative flex h-[180px] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={products.imageUrls[0]}
            height={0}
            width={0}
            sizes="100vw"
            className="max-h-full max-w-full object-contain"
            alt={products.name}
            priority
            style={{
              height: "110px",
              width: "auto",
            }}
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
    </Link>
  );
};

export default ProductItem;
