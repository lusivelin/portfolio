import { FC } from "react";
import styles from "@/components-styles/Banner.module.css";
import Image from "next/image";
// import MultiStageText from "../MutiStageText";

const Banner: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftContainer}>
        {/* <MultiStageText /> */}
        <h1 className={styles.title}>Lin Htet Paing</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Id aliquet egestas sit
          elementum pharetra massa phasellus urna. Diam habitant faucibus ut
          orci at urna purus.
        </p>
        <div className={styles.button}>
          <span>About me</span>
        </div>
      </div>
      <div>
        <div className={styles.mask}>
          <Image
            src="/personal/banner.png"
            alt="Landscape picture"
            width={350}
            height={350}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
