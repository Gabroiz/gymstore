import data from "./data.json";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const products = data.products;

  return Response.json(products);
}
