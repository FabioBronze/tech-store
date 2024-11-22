import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <main>
      <section>
        <div className="p-5">
          <Image
            src="/banner-home.jpg"
            height={0}
            width={0}
            alt="Up to 50% off this month!"
            className="h-auto w-full rounded-lg"
            sizes="100vw"
            priority
          />
        </div>
        <Categories />
      </section>
    </main>
  );
}
