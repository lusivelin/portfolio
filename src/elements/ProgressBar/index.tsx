import { motion } from "framer-motion";

const ProgressBar = ({
  defaultWidth = 150,
  defaultHeight = 20,
  done,
  repeat = false,
}: {
  defaultWidth?: number;
  defaultHeight?: number;
  done: number;
  repeat?: boolean;
}) => {
  const result = Math.round(done * 0.1);
  const itemWidth = defaultWidth / 10;

  const arr = Array(10).fill("#fff");

  const en = arr.map((item, index) => {
    if (result >= index + 1) {
      return "#333";
    }
    return item;
  });

  const convert = {
    "#333": "#fff",
    "#fff": "#333",
  };

  return (
    <div
      style={{
        display: "flex",
        height: defaultHeight,
        width: defaultWidth,
        background: "#333",
      }}
    >
      {en.map((item, index) => (
        <motion.div
          initial={false}
          animate={{ background: "#fff" }}
          whileInView={{ background: item }}
          transition={{
            delay: (index + 1) / 10,
            duration: 0.5,
            repeat: repeat ? Infinity : 0,
            repeatType: "loop",
          }}
          key={`item-${index}`}
          style={{
            width: itemWidth,
            borderRight: `1px solid ${convert[item as keyof typeof convert]}`,
            borderTop: `1px solid #333`,
            borderBottom: `1px solid #333`,
          }}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
