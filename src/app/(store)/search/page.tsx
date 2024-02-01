import { getProducts, getProductsBySearch } from "@/services/products";
import { USDollar } from "@/utils/formatCurrency";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface SearchProps {
  params: {};
  searchParams: {
    q: string;
  };
}

export default async function Search({ searchParams }: SearchProps) {
  const searchQuery = searchParams.q;

  if (!searchQuery) {
    redirect("/");
  }

  const products = await getProductsBySearch(searchQuery);
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Results for: <span className="font-semibold">{searchQuery}</span>
      </p>

      {products.length > 0 ? (
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => {
            return (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
              >
                <Image
                  src={product.image}
                  className="group-hover:scale-105 transition-transform duration-500"
                  width={480}
                  height={480}
                  quality={100}
                  alt=""
                />

                <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                  <span className="text-sm truncate">{product.title}</span>
                  <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                    {USDollar.format(product.price)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center">
          <p className="">No results was found</p>
        </div>
      )}
    </div>
  );
}
