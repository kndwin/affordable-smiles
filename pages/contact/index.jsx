import { Layout } from "components";
import Map from "components/Page/Contact/Map";
import styles from "./styles.module.scss";

const ContactPage = (props) => {
  const googleMapsApiKey = process.env.GOOGLE_MAP_EMBED_API_KEY;
  const coordinates = {
		charlesTown: "-32.982652884245226,151.6917723563484",
		eastMaitland: "-32.76140784811062,151.5887235121665",
		phillipTown: "-35.35244097297118,149.08858204289103",
	}
	const ZOOM = 18
	const MAP_STYLE = "roadmap"

  return (
    <Layout>
      <div className={styles.pageContainer}>
			<h1 className={styles.h1}>Our Locations</h1>
			<h3 className={styles.h3}>Book an appointment at our 3 available locations</h3>
        <div className={styles.mapContainer}>
          <div className={styles.maps}>
            <div className={styles.mapWithText}>
              <h3 className={styles.title}>Charles Town</h3>
              <iframe
								allowFullScreen
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: "0" }}
                src={`https://www.google.com/maps/embed/v1/view?key=${googleMapsApiKey}&center=${coordinates.charlesTown}&zoom=${ZOOM}&maptype=${MAP_STYLE}`}
              />
							<p className={styles.location}>6/158 Pacific Highway, Charlestown NSW 2290</p>
            </div>
            <div className={styles.mapWithText}>
              <h3 className={styles.title}>East Maitland</h3>
              <iframe
								allowFullScreen
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: "0" }}
                src={`https://www.google.com/maps/embed/v1/view?key=${googleMapsApiKey}&center=${coordinates.eastMaitland}&zoom=${ZOOM}&maptype=${MAP_STYLE}`}
              />
							<p className={styles.location}>7b/23 Mitchell Drive, East Maitland NSW 2323</p>
            </div>
            <div className={styles.mapWithText}>
              <h3 className={styles.title}>Charles Town</h3>
              <iframe
								allowFullScreen
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: "0" }}
                src={`https://www.google.com/maps/embed/v1/view?key=${googleMapsApiKey}&center=${coordinates.phillipTown}&zoom=${ZOOM}&maptype=${MAP_STYLE}`}
              />
							<p className={styles.location}>65 Colbee Ct, Phillip ACT 2606</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
