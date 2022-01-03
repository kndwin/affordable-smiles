import { Layout } from "components";
import styles from "./styles.module.scss";

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED_API_KEY;
const coordinates = {
  charlesTown: "-32.982652884245226,151.6917723563484",
  eastMaitland: "-32.76140784811062,151.5887235121665",
  phillipTown: "-35.35244097297118,149.08858204289103",
};
const ZOOM = 18;
const MAP_STYLE = "roadmap";

const ContactPage = (props) => {
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1 className={styles.h1}>Our Locations</h1>
        <h3 className={styles.h3}>
          Book an appointment at our 3 available locations
        </h3>
        <div className={styles.mapContainer}>
          <div className={styles.maps}>
            <div className={styles.state}>
              <h2 className={styles.h2}>NSW</h2>
              <div className={styles.mapWithText}>
                <h3 className={styles.title}>Charlestown</h3>
                <p className={styles.location}>
                  6/158 Pacific Highway, Charlestown NSW 2290
                </p>
                <a className={styles.number} href="tel:1300715578">
                  <img style={{ marginRight: "10px" }} src="/svg/call.svg" />
                  1300 71 55 78
                </a>
              </div>
              <div className={styles.mapWithText}>
                <h3 className={styles.title}>East Maitland</h3>
                <p className={styles.location}>
                  7b/23 Mitchell Drive, East Maitland NSW 2323
                </p>
                <a className={styles.number} href="tel:1300715578">
                  <img style={{ marginRight: "10px" }} src="/svg/call.svg" />
                  1300 71 55 78
                </a>
              </div>
            </div>
            <div className={styles.state}>
              <h2 className={styles.h2}>ACT</h2>
              <div className={styles.mapWithText}>
                <h3 className={styles.title}>Phillip</h3>
                <p className={styles.location}>
                  65 Colbee Ct, Phillip ACT 2606
                </p>
                <a className={styles.number} href="tel:61908828">
                  <img
                    style={{ marginRight: "10px" }}
                    src="/svg/call.svg"
                  />
                  6190 8828
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
