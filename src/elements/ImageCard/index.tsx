import Image from "next/image";
import styles from "@/elements-styles/ImageCard.module.css";
import classNames from "@/util/functions/classNames";
import { ImageCardProps } from "./type";

const ImageCard = ({
  className,
  alt,
  src,
  children,
  sizes,
}: ImageCardProps) => {
  return (
    <div
      className={classNames([styles.wrapper, className || styles.defaultArea])}
    >
      <Image
        sizes={sizes}
        src={src}
        fill
        style={{ objectFit: "contain" }}
        alt={alt}
      />
      {children}
    </div>
  );
};

export default ImageCard;
