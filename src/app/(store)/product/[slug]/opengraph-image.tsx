import { getProduct } from "@/services/products";
import { ImageResponse } from "next/og";
import colors from "tailwindcss/colors";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function OgImage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  const productImageURL = new URL(
    product.image,
    process.env.APP_URL,
  ).toString();

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: colors.zinc[950],
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={productImageURL} alt="" style={{ width: "100%" }} />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
