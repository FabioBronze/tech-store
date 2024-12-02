import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity, increaseProductQuantity } =
    useContext(CartContext);

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id);
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>
      </div>
      <div className="ml-2 flex flex-col">
        <p className="text-xs">{product.name}</p>
        <div className="flex items-center gap-2">
          <p className="text-sm font-bold">{product.totalPrice}€</p>
          {product.discountPercentage > 0 && (
            <p className="text-xs line-through opacity-75">
              {Number(product.basePrice)}€
            </p>
          )}
        </div>
        <div className="mt-1 flex items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            className="h-6 w-6"
            onClick={handleDecreaseProductQuantityClick}
          >
            <ArrowLeftIcon size={16} />
          </Button>
          <span className="text-xs">{product.quantity}</span>
          <Button
            size="icon"
            variant="outline"
            className="h-6 w-6"
            onClick={handleIncreaseProductQuantityClick}
          >
            <ArrowRightIcon size={16} />
          </Button>
        </div>
      </div>
      <Button size="icon" variant="outline" className="mx-auto h-8 w-8">
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
