import Navigation from "@/elements/Navigation";
import styles from "@/components-styles/Layout.module.css";
import Banner from "@/elements/Banner";
import { ExploreLogo } from "@/elements/Icon";
import { useRef, useState } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Card from "@/elements/Card";
import Image from "next/image";

const Layout = () => {
  const data = ["normal", "bottom", "right"];
  const parallax = useRef<IParallax>(null!);
  const [display, setDisplay] = useState(data[0]);
  console.log({ display });
  // Little helpers ...
  const url = (name: string, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;

  return (
    <Parallax ref={parallax} pages={2}>
      {/* <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
      /> */}
      <ParallaxLayer offset={0} speed={0}>
        <main>
          <section className={styles.main}>
            <Navigation />
            <Banner />
            <div
              className={styles.exploreMore}
              onClick={() => setDisplay(data[1])}
            >
              <ExploreLogo />
              <article>Explore</article>
            </div>
          </section>
        </main>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.3}
        speed={-0.3}
        style={{ pointerEvents: "none" }}
      >
        {/* <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} /> */}
        <Image
          src={url("satellite4")}
          alt="Landscape picture"
          width={150}
          height={150}
          style={{ marginLeft: "70%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{
          backgroundColor: "#333",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Card />
          <Card />
          <Card />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Layout;
