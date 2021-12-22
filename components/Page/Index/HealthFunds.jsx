import { useBreakpoints } from "hooks";
import styles from "./styles.module.scss";

const HealthFunds = () => {
  const { sm } = useBreakpoints();

  return (
    <div className={styles.containerHealthFunds}>
      {!sm && (
        <img
          className={styles.smilingWoman}
          src="/png/woman-smiling.png"
          alt="Smiling"
        />
      )}
      <div className={styles.logos}>
        <h3 className={styles.title}>
          We welcome
          <span className={styles.bold}> all health funds</span>
        </h3>
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
      <div className={styles.superannuation}>
        <div className={styles.content}>
          <h3 className={styles.title}>
            <span className={styles.light}>Pay for your dental care with </span>
            Superannuation!
          </h3>
          <p className={styles.description}>
            Do you need help to cover the cost of your dental needs? You can
            access your super early for a wide range of surgical dental
            procedures
            <span className={styles.link}> Read More ▸</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthFunds;
