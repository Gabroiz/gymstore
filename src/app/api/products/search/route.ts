import { z } from "zod";
import data from "../data.json";
import { NextRequest } from "next/server";

interface QueryParams {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, queryParams: QueryParams) {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const { searchParams } = request.nextUrl;

  const query = z.string().parse(searchParams.get("q"));

  const products = data.products.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
  });

  return Response.json(products);
}
