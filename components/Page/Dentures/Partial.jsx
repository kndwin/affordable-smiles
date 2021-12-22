import { useBreakpoints } from "hooks";
import styles from "./styles.module.scss";
import { DentureBorderSulcusLine } from "./SVGs";
import PlusDot from "public/svg/plus-circle.svg";
import { useState } from "react";

const PartialDentureFocused = (props) => {
  const { md } = useBreakpoints();
  return (
    <div className={styles.containerPartialDenture}>
      <h1 className={styles.title}>Partial dentures</h1>
      <div className={styles.containerImage}>
        <img
          className={styles.image}
          src="/png/cosmetic-denture-high-res.png"
          alt="Cosmetic Denture"
        />
        <img
          className={styles.image}
          src="/png/chrome-denture-high-res.png"
          alt="Chrome Denture"
        />
        <img
          className={styles.image}
          src="/png/acrylic-denture-high-res.png"
          alt="Acrylic Denture"
        />
				{/*
        {!md && <DesktopVersion />}
				*/}
      </div>
    </div>
  );
};

export default PartialDentureFocused;

const DesktopVersion = () => {
  const [showDescription, setShowDescription] = useState({
		"DENTURE_BORDER_SUCLUS_LINE": false,

	});

  const handleShowDescription = ({ type }) => {
    const currentTypeState = showDescription[type];
    setShowDescription({ ...showDescription, [`${type}`]: !currentTypeState });
  };
  return (
    <>
      <div style={{ top: 10, left: 120 }} className={styles.dot}>
        {DentureBorderSulcusLine}
        <div
          style={{
            position: "absolute",
            right: "185px",
            top: "-100px",
            width: "400px",
          }}
        >
          <div className={styles.containerTitle}>
            <h3 className={styles.title}>Denture Border (Sulcus)</h3>
            <PlusDot
              onClick={() =>
                handleShowDescription({ type: "DENTURE_BORDER_SUCLUS_LINE" })
              }
              className={styles.plusIcon}
              style={{ marginLeft: "3em" }}
            />
          </div>
          {!!showDescription["DENTURE_BORDER_SUCLUS_LINE"] && (
            <p className={styles.description}>
              The depth of the denture and their border is critical for
              stability and enabling suction. If you have never worn a denture
              before this will feel a little bulky at the start but before long
              you will not notice it. Believe it or not some patients request
              and extra thick border at the front to remove a wrinkles here and
              there!
            </p>
          )}
        </div>
        <div />
      </div>
      <div style={{ top: 50, right: 120 }} className={styles.dot} />
      <div style={{ bottom: 250, left: 190 }} className={styles.dot} />
      <div style={{ bottom: 170, right: 120 }} className={styles.dot} />
    </>
  );
};
