import { Button, Carousel, Dialog } from "components";
import { CallToBookDialog } from "components/Common/Layout";
import { useBreakpoints } from "hooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Hero = () => {
  const { md, sm } = useBreakpoints();

  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, [md]);

  const Slide1 = () => (
    <div className={styles.slide1}>
      {mounted && md && (
        <img
          className={styles.heroImage}
          src="/png/hero-image.png"
          alt="Woman smiling"
        />
      )}
      {mounted && !md && (
        <div className={styles.heroImageXLContainer}>
          <img
            className={styles.heroImageXL}
            src="/png/hero-image-transparent.png"
            alt="Woman Smiling"
          />
        </div>
      )}
      <div className={styles.heroTagline}>
        <h1 className={styles.title}>Affordable Dentures & Implants.</h1>
        <h1 className={styles.title2}>Fair prices.</h1>
        <h3 className={styles.subtitle}>No compromise on quality.</h3>
        <Link href="#dentureAndImplants">
          <Button className={styles.button}>YOUR SMILE POSSIBLITIES</Button>
        </Link>
      </div>
    </div>
  );

  const Slide2 = () => (
    <div className={styles.slide2}>
      <div className={styles.images}>
        <img src="/png/man-with-denture.png" alt="Man with Denture" />
        <img src="/png/woman-with-denture.png" alt="Man with Denture" />
      </div>
      <h3 className={styles.title}>
        No more messy impressions,
        <b className={styles.bold}> we are a 100% digital practice</b>
      </h3>
    </div>
  );

  return (
    <div className={styles.containerHero}>
      <Carousel>
        <Slide1 />
        <Slide2 />
      </Carousel>
    </div>
  );
};

export default Hero;
