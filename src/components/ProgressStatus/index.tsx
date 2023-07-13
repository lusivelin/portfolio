import ProgressBar from "@/elements/ProgressBar";
import styles from "@/components-styles/ProgressStatus.module.css";
import { motion } from "framer-motion";

const ProgressStatus = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div>
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
            Primary Stat
          </motion.h1>

          <div className={styles.item}>
            <span>Problem Solving</span>
            <ProgressBar defaultHeight={30} defaultWidth={250} done={90} />
          </div>

          <div className={styles.item}>
            <span>Collaborative</span>
            <ProgressBar defaultHeight={30} defaultWidth={250} done={100} />
          </div>
        </div>

        <div>
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
            Technical Stat
          </motion.h1>
          <div className={styles.item}>
            <span>Laravel</span>
            <ProgressBar defaultHeight={30} defaultWidth={250} done={60} />
          </div>

          <div className={styles.item}>
            <span>React</span>
            <ProgressBar defaultHeight={30} defaultWidth={250} done={100} />
          </div>

          <div className={styles.item}>
            <span>Vue</span>
            <ProgressBar defaultHeight={30} defaultWidth={250} done={70} />
          </div>

          <div className={styles.item}>
            <span>Next JS</span>
            <ProgressBar defaultHeight={30} defaultWidth={250} done={100} />
          </div>

          <div className={styles.item}>
            <span>Node JS</span>
            <ProgressBar defaultHeight={30} defaultWidth={250} done={70} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressStatus;
