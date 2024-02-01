"use client";

import { ShoppingBag } from "lucide-react";
import { useCartContext } from "@/contexts/cartContext";

export function AddCartButton({ productId }: { productId: number }) {
  const { addToCart } = useCartContext();

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold
    text-white"
      onClick={() => addToCart(productId)}
    >
      Add to Cart
    </button>
  );
}
