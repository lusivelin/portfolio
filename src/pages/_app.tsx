import type { AppProps } from "next/app";
// import SpringDemo from "@/components/SpringDemo";
// import ChainingDemo from "@/components/ChainingDemo";
// import ParallaxDemo from "@/components/ParallaxDemo";
import "@/styles/globals.css";
import "@/styles/custom-carousel.css";
import { poppins } from "./fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
