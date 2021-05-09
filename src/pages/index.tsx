import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";
import styles from "../styles/Home.module.css";
import Card from "../components/card";
import { getFlickrPhotoUrls } from "../lib/flickrClient";

export async function getServerSideProps() {
  const photoSize = 12;
  const flickrPhotoUrls = await getFlickrPhotoUrls(photoSize);
  return {
    props: {
      flickrPhotoUrls,
    },
  };
}

type Props = {
  flickrPhotoUrls: string[];
};

export default function Home({ flickrPhotoUrls }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>highwide.net</title>
        <meta name="description" content="A homepage of highwide" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.meWrapper}>
          <Card className={styles.card}>
            <Image src="/me.jpg" width="200" height="200" />
          </Card>
          <Card className={styles.profileCard}>
            <div>highwide</div>
            <div>Takahiro Uchiyama</div>
            <div>Web developer</div>
          </Card>
        </div>
        <div className={classNames(styles.snsWrapper, styles.card)}>
          <Card
            className={styles.snsCard}
            onClick={() => {
              window.open("https://github.com/highwide", "_blank");
            }}
          >
            <Image src="/github.png" width="80" height="80" />
          </Card>
          <Card
            className={styles.snsCard}
            onClick={() => {
              window.open("https://twitter.com/highwide", "_blank");
            }}
          >
            <Image src="/twitter.png" width="80" height="80" />
          </Card>
          <Card
            className={styles.snsCard}
            onClick={() => {
              window.open("https://highwide.hatenablog.com", "_blank");
            }}
          >
            <Image src="/hatenablog-logo.svg" width="80" height="80" />
          </Card>
        </div>
        <div className={styles.flickrPhotosWrapper}>
          {flickrPhotoUrls.map((url) => {
            return (
              <Card key={url} className={styles.card}>
                <img key={url} src={url} />
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
