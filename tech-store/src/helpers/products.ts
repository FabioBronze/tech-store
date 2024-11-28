import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  // Pega todas as propriedades do Produto
  totalPrice: number;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      // Retorna:
      ...product, // Todo o Produto
      totalPrice: Number(product.basePrice), // Preço Base (não tem desconto)
    };
  }

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100);

  return {
    ...product,
    totalPrice: Number(product.basePrice) - totalDiscount,
  };
};
