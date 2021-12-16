import Head from "next/head";
import styles from "./index.module.scss";
import { Layout, Button, Carousel } from "components";
import { useBreakpoints } from "hooks";
import DenturesAndImplants from "components/Page/Index/DenturesAndImplants";
import HealthFunds from "components/Page/Index/HealthFunds";

export default function Home() {
  return (
    <Layout isHomePage={true}>
      <Head>
        <title>Affordable Smiles</title>
        <meta name="description" content="No compromise on quality" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heroAndDenturesWrapper}>
        <Hero />
        <DenturesAndImplants />
      </div>
      <HealthFunds />
      <Reviews />
    </Layout>
  );
}

const Hero = () => {
  const { md } = useBreakpoints();

  const Slide1 = () => (
    <div>
      {md ? (
        <img
          className={styles.heroImage}
          src="/png/hero-image.png"
          alt="Woman smiling"
        />
      ) : (
        <div className={styles.heroImageXLContainer}>
          <img
            className={styles.heroImageXL}
            src="/png/hero-image-transparent.png"
            alt="Woman Smiling"
          />
        </div>
      )}
      <div className={styles.heroTagline}>
        <h1 className={styles.title}>
          Affordable Smiles.
          <br />
          Fair prices.
        </h1>
        <h3 className={styles.subtitle}>No compromise on quality.</h3>
        <Button className={styles.button}>YOUR SMILE POSSIBLITIES</Button>
      </div>
    </div>
  );

  return (
    <div className={styles.heroWrapper}>
      <Carousel>
        <Slide1 />
        <Slide1 />
      </Carousel>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className={styles.reviewsWrapper}>
      <div className={styles.background} />
      <div className={styles.reviews}>
        <h3 className={styles.title}>What our customers say about us</h3>
      </div>
    </div>
  );
};
