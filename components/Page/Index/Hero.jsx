import { Button, Carousel } from "components";
import { useBreakpoints } from "hooks";
import styles from "./styles.module.scss"

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
    <div className={styles.containerHero}>
      <Carousel>
        <Slide1 />
        <Slide1 />
      </Carousel>
    </div>
  );
};

export default Hero
