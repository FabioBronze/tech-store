import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/products";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const { products, total, subtotal, totaldiscount } = useContext(CartContext);

  const handleFinishPurchaseClick = async () => {
    const checkout = await createCheckout(products);
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-primary px-3 py-1 text-xs uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={14} />
        Cart
      </Badge>
      <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-4">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product) as any}
                />
              ))
            ) : (
              <p className="text-center font-semibold">Empty Cart.</p>
            )}
          </div>
        </ScrollArea>
      </div>
      {products.length > 0 && (
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
          <Button
            className="text-xs font-bold uppercase"
            onClick={handleFinishPurchaseClick}
          >
            Purchase
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
