import { ChevronRight } from "@/elements/Icon";
import styles from "@/elements-styles/DoubleCard.module.css";
import classNames from "@/util/functions/classNames";
import ImageCard from "../ImageCard";

export const Card = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.content}>
        <p className={styles.special}>Japan</p>
        <h2 className={classNames([styles.title])}>
          8D7N Zen and Sanctuary Japan Retreat{" "}
        </h2>
        <div className={styles.priceWrapper}>
          <div className={styles.price}>
            <p>From</p>
            <h2>S$ 8410</h2>
            <span>twin-sharing / per pax</span>
          </div>
          <ChevronRight width="2em" height="2em" />
        </div>
      </div>
    </div>
  );
};

const DoubleCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className={styles.wrapper}>
      <ImageCard className={styles.imageCardWrapper} src={src} alt={alt}>
        <Card />
      </ImageCard>
    </div>
  );
};

export default DoubleCard;
