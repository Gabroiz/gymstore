import { Product } from "@/@types/product";
import { api } from "./api";

export async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60, // 1 Hour
    },
  });
  const featuredProducts = await response.json();
  return featuredProducts;
}

export async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 Hour
    },
  });
  const product = await response.json();

  return product;
}

export async function getProducts(): Promise<Product[]> {
  const response = await api(`/products`, {
    next: {
      revalidate: 60 * 60, // 1 Hour
    },
  });
  const products = await response.json();

  return products;
}

export async function getProductsBySearch(q: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${q}`, {
    next: {
      revalidate: 60 * 60, // 1 Hour
    },
  });
  const products = await response.json();
  return products;
}
