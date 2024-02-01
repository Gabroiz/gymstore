import { z } from "zod";
import data from "../data.json";

interface QueryParams {
  params: {
    slug: string;
  };
}

export async function GET(request: Request, queryParams: QueryParams) {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const slug = z.string().parse(queryParams.params.slug);

  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return Response.json({ message: "Product not found!" }, { status: 400 });
  }

  return Response.json(product);
}
