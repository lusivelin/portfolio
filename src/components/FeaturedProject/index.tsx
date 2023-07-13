import Image from "next/image";
import styles from "@/components-styles/FeaturedProject.module.css";

const FeaturedProject = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.leftContainer}> */}

      <h4 className={styles.title}>Featured Project</h4>
      <h3 className={styles.secondaryTitle}>Project Name</h3>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Id aliquet egestas sit elementum
        pharetra massa phasellus urna. Diam habitant faucibus ut orci at urna
        purus.
      </p>
      <ul>
        <li>React</li>
        <li>Next js</li>
        <li>GitHub API</li>
      </ul>
      {/* </div> */}
      <div>
        {/* <div className={styles.mask}> */}
        <Image
          src="/personal/banner.png"
          alt="Landscape picture"
          width={350}
          height={350}
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default FeaturedProject;
