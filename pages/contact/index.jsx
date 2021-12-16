import { Layout } from "components";
import Map from "components/Page/Contact/Map";
import styles from "./styles.module.scss";

const ContactPage = (props) => {
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1>Contact Us</h1>
        <div className={styles.mapContainer}>
          <Map />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
