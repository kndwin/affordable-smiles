import { Layout, Card } from "components";
import styles from "./styles.module.scss";

const AboutUsPage = () => {
  return (
    <Layout>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1>About us</h1>
          <h3 className={styles.h3}>
            Affordable Smiles is a 100% digital practice
          </h3>
          <p>
            Affordable dentures and implants is a 100% digital practice. We
            don’t do ‘yucky’ and ‘gooy’ molds, they are a thing of the past.
            Every new smile is made using world leading 3D digital technology so
            that you can have the most precise and beautifully fitting smile.
            <br />
            <br />
            Whether you are wanting an implant or a denture you can be sure you
            will get highest possible accuracy with our cutting edge 3D
            technologies. Our practitioners are world leading digital
            practitioners and will get you the best possible result to help you
            smile and eat to your best!
          </p>
        </div>
        <img
          className={styles.heroImage}
          src="/png/about-us.png"
          alt="Woman smiling"
        />
        <p>Clinical Director,</p>
        <img src="/svg/signature.svg" alt="signature" />
      </div>
    </Layout>
  );
};

export default AboutUsPage;
