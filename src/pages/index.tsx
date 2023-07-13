import Head from "next/head";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lusive Lin</title>
        <meta name="description" content="Porfolio for Lusive Lin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
}
