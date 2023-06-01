/* eslint-disable @next/next/no-img-element */
import { FC, useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParallaxDemo: FC = () => {
  const moon = "/parallax-images/moon.png";
  const land = "/parallax-images/land.png";
  const cat = "/parallax-images/cat.gif";
  const ref = useRef<IParallax>(null);
  return (
    <Parallax pages={4} ref={ref}>
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={2}
        style={{
          backgroundImage: `url(${moon})`,
          backgroundSize: "cover",
        }}
      />

      <ParallaxLayer
        offset={2}
        speed={1}
        factor={4}
        style={{
          backgroundImage: `url(${land})`,
          backgroundSize: "cover",
        }}
      ></ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 0.9, end: 2.5 }}
        style={{ textAlign: "center" }}
      >
        <img src={cat} alt="cat" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.2}
        speed={0.05}
        onClick={() => ref.current?.scrollTo(3)}
      >
        <h2>Welcome to my website</h2>
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={2}
        onClick={() => ref.current?.scrollTo(0)}
      >
        <h2>Hi Mom!</h2>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxDemo;
