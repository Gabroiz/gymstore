import Header from "@/components/header";
import { CartProvider } from "@/contexts/cartContext";
import { ReactNode } from "react";

interface StoreLayoutProps {
  children: ReactNode;
}

export default function storeLayout({ children }: StoreLayoutProps) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  );
}
