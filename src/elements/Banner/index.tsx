import { FC, Suspense } from "react";
import styles from "@/components-styles/Banner.module.css";
import { MdiGithub, MdiLinkedin } from "../Icon";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MainLoader from "@/components/MainLoader";

const Computer = () => {
  const computer = useGLTF("/3d/computer/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive scale={15} object={computer.scene} />
    </mesh>
  );
};

export const ComputerCanvas = () => {
  return (
    <div className={styles.canvasWrapper}>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
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
    </div>
  );
};

const Banner: FC = () => {
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Frontend Developer</h1>
        <h3 className={styles.secTitle}>Lin Htet Paing</h3>
        <p className={styles.description}>
          Hey there! I&apos;m a software developer with experience in
          TypeScript, JavaScript, and frameworks like React, Node.js, and
          Three.js.
          <span style={{ display: "block" }}>
            Let&apos;s build something extraordinary together!
          </span>
        </p>
        <div className={styles.buttonGroup}>
          <div className={styles.social}>
            <a href="https://github.com/lusivelin" target="_blank">
              <MdiGithub width={48} height={48} />
            </a>
          </div>

          <div className={styles.social}>
            <a href="https://github.com/lusivelin" target="_blank">
              <MdiLinkedin width={48} height={48} />
            </a>
          </div>
        </div>

        <a className={styles.button} href="mailto:linhtetpaing.dev@gmail.com">
          <span>Let&apos;s connect</span>
        </a>
      </section>
      <div className={styles.canvasWrapper}>
        <ComputerCanvas />
      </div>
    </>
  );
};

export default Banner;
