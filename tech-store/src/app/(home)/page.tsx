import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import SectionTitle from "./components/section-title";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0, // Descontos > 0
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const headphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "headphones",
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
            className="h-auto w-full p-5"
            sizes="100vw"
            priority
            style={{
              objectFit: "cover",
              borderRadius: "2rem",
            }}
          />
        </div>
        <div className="mt-2">
          <Categories />
        </div>
        <div className="mt-8">
          <SectionTitle className="mb-2 pl-5 font-bold uppercase">
            Discounts
          </SectionTitle>{" "}
          <ProductList products={deals} />
        </div>
        <div className="mt-5">
          <Image
            src="/mouses-off.jpg"
            height={0}
            width={0}
            alt="Up to 50% off"
            className="h-auto w-full p-5"
            sizes="100vw"
            priority
            style={{
              objectFit: "cover",
              borderRadius: "2rem",
            }}
          />
        </div>
        <div>
          <SectionTitle className="mb-2 pl-5 font-bold uppercase">
            Keyboards
          </SectionTitle>
          <ProductList products={keyboards} />
        </div>
        <div className="mt-5">
          <Image
            src="/headphones-off.jpg"
            height={0}
            width={0}
            alt="Up to 50% off"
            className="h-auto w-full p-5"
            sizes="100vw"
            priority
            style={{
              objectFit: "cover",
              borderRadius: "2rem",
            }}
          />
        </div>
        <div>
          <SectionTitle className="mb-2 pl-5 font-bold uppercase">
            Headphones
          </SectionTitle>
          <ProductList products={headphones} />
        </div>
      </section>
    </main>
  );
}
