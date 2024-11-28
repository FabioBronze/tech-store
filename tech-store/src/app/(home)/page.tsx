import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0, // Descontos > 0
      },
    },
  });

  return (
    <main>
      <section>
        <div>
          <Image
            src="/banner-home.jpg"
            height={0}
            width={0}
            alt="Up to 50% off this month!"
            className="h-auto w-full rounded-lg p-5"
            sizes="100vw"
            priority
          />
        </div>
        <div className="mt-2">
          <Categories />
        </div>
        <div className="mt-8">
          <p className="mb-2 pl-5 font-bold uppercase">Discount</p>
          <ProductList products={deals} />
        </div>
        <div>
          <Image
            src="/mouses-off.jpg"
            height={0}
            width={0}
            alt="Up to 50% off"
            className="h-auto w-full rounded-lg p-5"
            sizes="100vw"
            priority
          />
        </div>
      </section>
    </main>
  );
}
