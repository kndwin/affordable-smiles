import { Layout, Card } from "components";
import styles from "./styles.module.scss";

const AboutUsPage = () => {
  return (
    <Layout>
      <div className={styles.card}>
        <div className={styles.content}>
          <h1>About us</h1>
          <h3 className={styles.h3}>
            Affordable Dentures and Implants is a 100% only digital practice.
          </h3>
          <p>
            We don’t do ‘yucky’ and ‘gooey’ moulds, they are a thing of the
            past. Every new smile is made using 3D digital technology.
            
            <br />
            <br />
            Whether you want an implant or a denture, our
            experienced digital practitioners and will get you the best possible
            result to help you smile and eat to your best!
          </p>
        </div>
        <img
          style={{ marginTop: "2em" }}
          src="/svg/signature.svg"
          alt="signature"
        />
        <p style={{ marginTop: "2em" }}>Clinical Director</p>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
