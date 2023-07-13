import styles from "@/components-styles/Card.module.css";
import { fadeIn } from "@/util/functions/motion";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Card = () => {
  return (
    <Tilt className={styles.wrapper}>
      <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
        <h1>Hello this is LOMS project</h1>
        <span className={styles.badge}>Genie</span>
      </motion.div>
    </Tilt>
  );
};

export default Card;
