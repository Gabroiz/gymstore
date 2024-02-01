"use client";

import { ShoppingBag } from "lucide-react";
import { useCartContext } from "@/contexts/cartContext";

export function CartWidget() {
  const { items } = useCartContext();

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-4 h-4" />
      <span className="text-sm">Cart ({items.length})</span>
    </div>
  );
}
