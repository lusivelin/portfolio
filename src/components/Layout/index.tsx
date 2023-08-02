import Navigation from "@/elements/Navigation";
import styles from "@/components-styles/Layout.module.css";
import Banner from "@/elements/Banner";
import { AcademicCap, FairmontLogo, GenieIcon } from "@/elements/Icon";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ProgressStatus from "../ProgressStatus";
import FeaturedProject from "../FeaturedProject";

const Layout = () => {
  return (
    <>
      <main>
        <section className={styles.main}>
          <Navigation />
          <Banner />
        </section>
      </main>
      <FeaturedProject />
      <ProgressStatus />
      <div className={styles.expTitle}>
        <p className={styles.special}>What I&apos;ve done before</p>
        <h3 className={styles.title}>Working Experience</h3>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2022 - March 2023"
          iconStyle={{ background: "#fff" }}
          icon={<GenieIcon />}
        >
          <h3 className={styles.listTitle}>Senior Frontend Developer</h3>
          <h4 className={styles.listSecTitle}>Genie Fintech by Carro, Thai</h4>
          <ul className={styles.list}>
            <li>
              Responsible for building front-end coding for the system that
              manages loans and financial management.
            </li>
            <li>
              Communicate with the backend team for having a good interface
              between frontend and backend.
            </li>
            <li>
              Implement design from figma and give opinions to designers for
              good user experiences.
            </li>
          </ul>
          <p>React, Frontend, SSR, Fintech, UI/UX</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2019 - Feb 2022"
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
          <h3 className={styles.listTitle}>Senior Frontend Developer</h3>
          <h4 className={styles.listSecTitle}>Genie Fintech by Carro, Thai</h4>
          <ul className={styles.list}>
            <li>
              Responsible for building front-end coding for the system that
              supports travel and tour agencies.
            </li>
            <li>
              Manage and assign tasks to my team and directly communicate with
              the team from Singapore.
            </li>
            <li>
              Delegate small tasks to junior associates and review codes to meet
              feature requirements.
            </li>
            <li>
              Here are most of{" "}
              <a
                href="https://www.notion.so/Work-done-for-Pytheas-1cb59188e67441ffb146c8986c353f1d"
                target="_blank"
              >
                the client websites
              </a>{" "}
              I have done.
            </li>
          </ul>
          <p>Antd v4 | React | SSR(Next JS) | Travelcloud Antd.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2018 - Aug 2019"
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
          <h3 className={styles.listTitle}>Ed Tech Myanmar</h3>
          <h4 className={styles.listSecTitle}>Web Developer</h4>
          <ul className={styles.list}>
            <li>
              Responsible for upgrading Laravel v4 to v5.6 for the school
              management system.
            </li>
            <li>
              Collect client requirements, create new features and assign tasks
              to the team’s members.
            </li>
            <li>
              Implement excel features to calculate and show exam results and
              timetables and Chart JS to display analytics.
            </li>
          </ul>
          <p>Laravel | JQuery | Vue | Laravel Datatable | Chart JS</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2015 - 2019"
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<AcademicCap />}
          // icon={<SchoolIcon />}
        >
          <h3 className={styles.listTitle}>Bachelor of Business Management</h3>
          <h4 className={styles.listSecTitle}>
            Graduated from East Yangon University
          </h4>
          <p>Distance Education</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2017 - June 2018"
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
          <h3 className={styles.listTitle}>Web Developer Certification</h3>
          <h4 className={styles.listSecTitle}>Myanmar</h4>
          <p>HTML, CSS, JS, Bootstrap, Jquery, PHP, Laravel</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2013 - 2014"
          iconStyle={{ background: "#fff", color: "#333" }}
          icon={<FairmontLogo />}
          // icon={<SchoolIcon />}
        >
          <h4 className={styles.listTitle}>
            <a
              className={styles.listLink}
              href="https://www.fairmont.com/"
              target="_blank"
            >
              Fairmont Singapore
            </a>
          </h4>
          <h3 className={styles.listSecTitle}>
            Electrical Engineering Internship
          </h3>
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
          <h3 className={styles.listTitle}>
            Electrical Technology Cerification
          </h3>
          <h4 className={styles.listSecTitle}>
            Singapore Myanmar Vocational Training Institute
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2013 - 2014"
          iconStyle={{ background: "#333", color: "#fff" }}
          icon={<AcademicCap />}
          // icon={<SchoolIcon />}
        >
          <h3 className={styles.listTitle}>
            Bachelor of Electronics and Communication
          </h3>
          <h4 className={styles.listSecTitle}>WYTU</h4>

          <p>2nd year (Dropout)</p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
            iconStyle={{ background: "#fff", color: "#333" }}
            icon={<AcademicCap />}
            // icon={<StarIcon />}
          /> */}
      </VerticalTimeline>
    </>
  );
};

export default Layout;
