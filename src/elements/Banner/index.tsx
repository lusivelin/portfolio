import { FC, Suspense } from "react";
import styles from "@/components-styles/Banner.module.css";
import { MdiGithub, MdiLinkedin } from "../Icon";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MainLoader from "@/components/MainLoader";
import { motion } from "framer-motion";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "@/util/functions/motion";

const Computer = () => {
  const computer = useGLTF("/3d/computer/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={10} groundColor="black" />
      <pointLight intensity={1} />
      <primitive scale={15} object={computer.scene} />
    </mesh>
  );
};

export const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 20, 20], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<MainLoader />}>
        <OrbitControls
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

const Banner: FC = () => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap-reverse" }}>
        <section className={styles.container}>
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
            Frontend Developer
          </motion.h1>

          <motion.h3
            initial={false}
            animate={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className={styles.secTitle}
          >
            Lin Htet Paing
          </motion.h3>

          <motion.p
            initial={false}
            animate={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className={styles.description}
          >
            Hey there! I&apos;m a software developer with experience in
            TypeScript, JavaScript, and frameworks like React, Node.js, and Next
            js.
            <span style={{ display: "block" }}>
              Let&apos;s build something extraordinary together!
            </span>
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className={styles.buttonGroup}
          >
            <Tilt>
              <motion.a
                href="https://github.com/lusivelin"
                target="_blank"
                variants={fadeIn("right", "spring", 0.5, 1)}
                className={styles.social}
              >
                <MdiGithub width={48} height={48} />
              </motion.a>
            </Tilt>

            <Tilt>
              <motion.a
                href="https://www.linkedin.com/in/lusivelin"
                target="_blank"
                variants={fadeIn("right", "spring", 0.5, 1)}
                className={styles.social}
              >
                <MdiLinkedin width={48} height={48} />
              </motion.a>
            </Tilt>
          </motion.div>

          <div style={{ display: "flex", marginTop: 20, alignItems: "center" }}>
            <motion.a
              initial={false}
              animate={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className={styles.button}
              href="mailto:linhtetpaing.dev@gmail.com"
            >
              <span>Work with me</span>
            </motion.a>
            <motion.a
              initial={false}
              animate={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className={styles.button}
              style={{ background: "#fff" }}
              href="https://docs.google.com/document/d/1E12ylP4RYINHP3QdcJ5WSEiWsBO7HBE3kcLXHGuyPDk/edit?usp=sharing"
              target="_blank"
            >
              <span style={{ color: "#333" }}>Resume</span>
            </motion.a>
          </div>
        </section>

        {/* <div className={styles.canvasWrapper}>
          <ComputerCanvas />
        </div> */}
      </div>
      <div>
        <div className={styles.exploreMore}>
          <Link href="/">
            <div className={styles.explore}>
              <motion.div
                animate={{
                  y: [0, 25, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className={styles.bubble}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
