import styles from "@/components-styles/ComingSoon.module.css";
import { motion } from "framer-motion";

const ComingSoon = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <div className={styles.wrapper}>
      <motion.h1
        initial={false}
        animate={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
        className={styles.title}
      >
        {title || "Blog is coming soon..."}
      </motion.h1>
      <motion.p
        initial={false}
        animate={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
        className={styles.secTitle}
      >
        {description || "Web development related content"}
      </motion.p>
    </div>
  );
};

export default ComingSoon;
