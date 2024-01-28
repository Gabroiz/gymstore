import Image from "next/image";

export default async function Home() {
  await new Promise((result) => setTimeout(result, 2000));

  return <h1>Home</h1>;
}
