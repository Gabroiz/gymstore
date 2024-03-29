import { getFeaturedProducts } from "@/services/products";
import { USDollar } from "@/utils/formatCurrency";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src={highlightedProduct.image}
          className="group-hover:scale-110 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        ></Image>

        <div className="absolute top-10 left-10 h-12 flex items-center gap-2 max-w-[380px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-blue-700 px-4 font-semibold">
            {USDollar.format(highlightedProduct.price)}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              src={product.image}
              className="group-hover:scale-110 transition-transform duration-500"
              width={920}
              height={920}
              quality={100}
              alt=""
            ></Image>

            <div className="absolute top-5 left-5 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-blue-700 px-4 font-semibold">
                {USDollar.format(product.price)}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
