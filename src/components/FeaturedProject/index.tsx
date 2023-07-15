import Image from "next/image";
import styles from "@/components-styles/FeaturedProject.module.css";
import {
  JavaScriptIcon,
  LaravelIcon,
  NextJSIcon,
  NodeJSIcon,
  PhpIcon,
  ReactIcon,
  ReduxIcon,
} from "@/elements/Icon";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "@/util/functions/motion";

const FeaturedProject = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <motion.h4
            initial={false}
            animate={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className={styles.title}
          >
            About Me
          </motion.h4>

          <motion.h1
            initial={false}
            animate={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className={styles.secTitle}
          >
            Hello! I am a flexible software developer, I adapt easily to
            different timeframes and environments. I am quick to adjust and
            align with project visions. With an eagerness to learn and a
            commitment to lifelong learning.
          </motion.h1>

          <motion.h1
            initial={false}
            animate={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className={styles.secTitle}
          >
            If you&apos;re looking to incorporate these cool technologies into
            your project, count me in!
          </motion.h1>

          <ul className={styles.list}>
            <li>
              <Tilt className={styles.cardWrapper}>
                <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
                  <ReactIcon width={48} height={48} />
                </motion.div>
              </Tilt>
            </li>
            <li>
              <Tilt className={styles.cardWrapper}>
                <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
                  <NextJSIcon width={48} height={48} />
                </motion.div>
              </Tilt>
            </li>
            <li>
              <Tilt className={styles.cardWrapper}>
                <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
                  <JavaScriptIcon width={48} height={48} />
                </motion.div>
              </Tilt>
            </li>
            <li>
              <Tilt className={styles.cardWrapper}>
                <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
                  <ReduxIcon width={48} height={48} />
                </motion.div>
              </Tilt>
            </li>
            <li>
              <Tilt className={styles.cardWrapper}>
                <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
                  <NodeJSIcon width={48} height={48} />
                </motion.div>
              </Tilt>
            </li>
            <li>
              <Tilt className={styles.cardWrapper}>
                <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
                  <LaravelIcon width={48} height={48} />
                </motion.div>
              </Tilt>
            </li>
            <li>
              <Tilt className={styles.cardWrapper}>
                <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
                  <PhpIcon width={48} height={48} />
                </motion.div>
              </Tilt>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.mask}>
            <Image
              src="/personal/banner.png"
              alt="Landscape picture"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
