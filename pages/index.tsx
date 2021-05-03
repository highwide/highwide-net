import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../components/card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>highwide.net</title>
        <meta name="description" content="A homepage of highwide" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.meWrapper}>
          <Card src="/me.jpg" width="240" height="240" />
        </div>
        <div className={styles.snsWrapper}>
          <a href="https://github.com/highwide">
            <Card src="/github.png" width="240" height="240" />
          </a>
          <a href="https://twitter.com/highwide">
            <Card src="/twitter.png" width="240" height="240" />
          </a>
          <a href="https://highwide.hatenablog.com/">
            <Card src="/hatenablog-logo.svg" width="240" height="240" />
          </a>
        </div>
      </main>
    </div>
  );
}
