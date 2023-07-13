import { ReactNode } from "react";

export type ImageCardProps = {
  children?: ReactNode;
  className?: string;

  alt: string;
  src: string;
  sizes?: string;
};
