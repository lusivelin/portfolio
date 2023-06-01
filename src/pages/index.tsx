import Head from "next/head";
import styles from "@/pages-styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to the Daily Solutions</title>
        <meta
          name="description"
          content="Cleaning services for singapore household"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h1 className={styles.text}>Lin Htet Paing</h1>
        </div>
        <div>
          <h1 className={styles.text}>Frontend Developer</h1>
        </div>
      </div>
    </>
  );
}
