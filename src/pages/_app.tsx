import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
// import SpringDemo from "@/components/SpringDemo";
// import ChainingDemo from "@/components/ChainingDemo";
// import ParallaxDemo from "@/components/ParallaxDemo";

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      {/* <ParallaxDemo /> */}
      {/* <SpringDemo /> */}
      {/* <ChainingDemo /> */}
      <Component {...pageProps} />
    </main>
  );
}
