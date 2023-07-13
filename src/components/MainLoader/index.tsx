import { Html, useProgress } from "@react-three/drei";

const MainLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span></span>
      <p
        style={{
          fontSize: 14,
          color: "#333",
          fontWeight: 700,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default MainLoader;
