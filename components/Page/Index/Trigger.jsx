import Plus from "public/svg/plus.svg";
import styles from "./styles.module.scss";

const PlusTrigger = ({ setShowCard, showCard }) => {
  return (
    <div
      onClick={() => setShowCard(!showCard)}
      className={`${styles.pulseDot} ${styles.frontTeethCircle} ${
        showCard ? "" : styles.noPulse
      }`}
    >
      <Plus className={styles.plus} />
    </div>
  );
};

export default PlusTrigger;
