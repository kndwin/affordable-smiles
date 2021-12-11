import Head from "next/head";
import styles from "./index.module.scss";
import { Layout, Button  } from "components";
import { useBreakpoints } from "hooks";

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Affordable Smiles</title>
        <meta name="description" content="No compromise on quality" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className={styles.contentWrapper}>
        <Dentures />
        <HealthFunds />
				<Reviews />
      </div>
    </Layout>
  );
}

const Dentures = () => {
  return (
    <div className={`${styles.dentures}`}>
      <div className={styles.content}>Dentures</div>
    </div>
  );
};

const Hero = () => {
	  const { md } = useBreakpoints();

  return (
    <div className={styles.heroWrapper}>
      {md ? (
        <img
          className={styles.heroImage}
          src="/png/heroImageV2.png"
          alt="Woman smiling"
        />
      ) : (
        <div className={styles.heroImageXLContainer}>
          <img
            className={styles.heroImageXL}
            src="/png/heroImageTransparent.png"
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
};

const HealthFunds = () => {
  return (
    <div className={styles.healthFunds}>
      <img
        className={styles.smilingWoman}
        src="/png/woman-smiling.png"
        alt="Smiling"
      />
			<div className={styles.content}>
      <h3 className={styles.title}>We welcome all health funds</h3>
      <div className={styles.healthFundLogos}>
        {[
          "png/bupa-logo.png",
          "png/ahm-logo.png",
          "png/cbhs-logo.png",
          "png/medibank-logo.png",
          "png/nib-logo.png",
          "png/hcf-logo.png",
          "png/teachers-health-logo.png",
        ].map((image, index) => (
          <img
            key={index}
            className={styles.healthFundLogo}
            src={image}
            alt="Health Fund Logo"
          />
        ))}
      </div>
			</div>
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

/*
          <div className={styles.denturesAndImplantsWrapper}>
            <div className={styles.dentures}>
              <Carousel
                thumbnails={[
                  { url: "/png/full-denture-thumbnail.png" },
                  { url: "/png/full-denture-thumbnail.png" },
                  { url: "/png/full-denture-thumbnail.png" },
                  { url: "/png/full-denture-thumbnail.png" },
                  { url: "/png/full-denture-thumbnail.png" },
                ]}
              >
                <FullDenture />
                <FullDenture />
                <FullDenture />
                <FullDenture />
                <FullDenture />
              </Carousel>
            </div>
            <div className={styles.implants}>
              <Carousel
                thumbnails={[
                  { url: "/png/full-denture-thumbnail.png" },
                  { url: "/png/full-denture-thumbnail.png" },
                  { url: "/png/full-denture-thumbnail.png" },
                ]}
              >
                <FullDenture />
                <FullDenture />
                <FullDenture />
              </Carousel>
            </div>
          </div>

 * */
