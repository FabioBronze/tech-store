import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/products";

const Cart = () => {
  const { products, total, subtotal, totaldiscount } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-primary px-3 py-1 text-xs uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={14} />
        Cart
      </Badge>
      <div className="flex flex-col gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <p className="text-center font-semibold">Empty Cart.</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border-t-2 py-2 text-xs">
          <p>Subtotal</p>
          <p>{subtotal}€</p>
        </div>
        <div className="flex items-center justify-between border-t-2 py-2 text-xs">
          <p>Delivery</p>
          <p>FREE</p>
        </div>
        <div className="flex items-center justify-between border-t-2 py-2 text-xs">
          <p>Discounts</p>
          <p>- {totaldiscount}€</p>
        </div>
        <div className="text-l flex items-center justify-between border-t-2 py-2 font-bold">
          <p>Total</p>
          <p>{total}€</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
