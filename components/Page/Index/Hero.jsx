import { Button, Carousel } from "components";
import { useBreakpoints } from "hooks";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Hero = () => {
  const { md } = useBreakpoints();
  const [mounted, setMounted] = useState();
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  const Slide1 = () => (
    <div className={styles.slide1}>
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

	const Slide2 = () => (
		<div className={styles.slide2}>
			<div className={styles.containerImage}>
				<img src="/png/man-with-denture.png" alt="Man with Denture" />
			</div>
			<div className={styles.containerImage}>
				<img src="/png/woman-with-denture.png" alt="Man with Denture" />
			</div>
		</div>
	)

  return (
    <div className={styles.containerHero}>
      {mounted && (
        <Carousel>
          <Slide1 />
          <Slide2 />
          <Slide1 />
        </Carousel>
      )}
    </div>
  );
};

export default Hero;
