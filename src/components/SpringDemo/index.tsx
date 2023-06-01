import { useSpring, animated } from "@react-spring/web";

function SpringDemo() {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );
  console.log({ props, api });

  return (
    <animated.div style={{ ...props, color: "white" }}>
      Hello World
    </animated.div>
  );
}

export default SpringDemo;
