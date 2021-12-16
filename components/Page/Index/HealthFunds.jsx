import styles from "./styles.module.scss";

const HealthFunds = () => {
  return (
    <div className={styles.healthFunds}>
      <img
        className={styles.smilingWoman}
        src="/png/woman-smiling.png"
        alt="Smiling"
      />
      <div className={styles.logos}>
        <h3 className={styles.title}>We welcome all health funds</h3>
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
        <p>Pay for your dental care with Superannuation!</p>
        <p>
          Do you need help to cover the cost of your dental needs? You can
          access your super early for a wide range of surgical dental
          procedures,
					<span>
						Read More.
					</span>
        </p>
      </div>
    </div>
  );
};

export default HealthFunds;
