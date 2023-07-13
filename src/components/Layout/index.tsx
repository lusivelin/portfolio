import Navigation from "@/elements/Navigation";
import styles from "@/components-styles/Layout.module.css";
import Banner from "@/elements/Banner";
import { AcademicCap, FairmontLogo, GenieIcon } from "@/elements/Icon";
import { useRef, useState } from "react";
import Image from "next/image";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
// import FeaturedProject from "../FeaturedProject";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ProgressStatus from "../ProgressStatus";
import Link from "next/link";
import { motion } from "framer-motion";

const Layout = () => {
  const data = ["normal", "bottom", "right"];
  const parallax = useRef<IParallax>(null!);
  const [, setDisplay] = useState(data[0]);

  return (
    <Parallax ref={parallax} pages={4}>
      <ParallaxLayer offset={0} speed={0.1}>
        <main>
          <section className={styles.main}>
            <Navigation />
            <Banner />
            <div
              className={styles.exploreMore}
              onClick={() => setDisplay(data[1])}
            >
              <Link href="/">
                <div className={styles.explore}>
                  <motion.div
                    animate={{
                      y: [0, 24, 0],
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
          </section>
        </main>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.1}>
        <p className={styles.special}>What I&apos;ve done before</p>
        <h3 className={styles.title}>Working Experience</h3>
      </ParallaxLayer>
      <ParallaxLayer offset={1.2} speed={0.2}>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2022 - March 2023"
            iconStyle={{ background: "#fff" }}
            icon={<GenieIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Genie Fintech by Carro, Thai
            </h4>
            <p>React, Frontend, SSR, Fintech, UI/UX</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: "#333", color: "#fff" }}
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <Image
                src="/personal/evodeus.png"
                style={{ borderRadius: "50%" }}
                alt="Evodeus"
                fill={true}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="2013 - 2014"
            iconStyle={{ background: "#333", color: "#fff" }}
            icon={<AcademicCap />}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Business Management
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              East Yangon University
            </h4>
            <p>Distance Education</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
            icon={
              <Image
                src="/personal/eschool.png"
                style={{ borderRadius: "50%" }}
                alt="Evodeus"
                fill={true}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              PHP, Laravel, Vue, Bootstrap, JQuery
            </h4>
            <p>Ed Tech Myanmar</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
            icon={
              <Image
                src="/personal/myanmar-link.png"
                style={{ borderRadius: "50%" }}
                alt="Myanmar Link"
                fill={true}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer Certification
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Myanmar Link</h4>
            <p>HTML, CSS, JS, Bootstrap, Jquery, PHP, Laravel</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date="2013 - 2014"
            iconStyle={{ background: "#fff", color: "#333" }}
            icon={<FairmontLogo />}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Electrical Engineering Internship
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "#fff", color: "#fff" }}
            // icon={<SchoolIcon />}
            icon={
              <Image
                src="/personal/smvti.png"
                style={{ borderRadius: "50%" }}
                alt="SMVTI"
                fill={true}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Electrical Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="2013 - 2014"
            iconStyle={{ background: "#333", color: "#fff" }}
            icon={<AcademicCap />}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Electronics and Communication
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>

            <p>C and C++ programming</p>
          </VerticalTimelineElement>

          {/* <VerticalTimelineElement
            iconStyle={{ background: "#fff", color: "#333" }}
            icon={<AcademicCap />}
            // icon={<StarIcon />}
          /> */}
        </VerticalTimeline>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.2}>
        <ProgressStatus />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Layout;
