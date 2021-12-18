import { AspectRatio } from "components";
import styles from "./styles.module.scss";

const BACKGROUND_WIDTH = 1280;
const BACKGROUND_HEIGHT = 345;
const BACKGROUND_WIDTH_TO_HEIGHT_RATIO = BACKGROUND_WIDTH / BACKGROUND_HEIGHT;

const Reviews = () => {
  return (
    <AspectRatio.Root
      ratio={BACKGROUND_WIDTH_TO_HEIGHT_RATIO}
      className={styles.containerReviewsWrapper}
    >
      <div className={styles.reviews}>
        <h3 className={styles.title}>What our customers say about us</h3>
        <div className={styles.containerCard}>
          <div className={styles.card}>
            <p className={styles.textReview}>
              “Advanced techniques with modern equipment & a friendly,
              experienced team. Love their work!”
            </p>
            <p className={styles.textReviewer}>- Sharon</p>
          </div>
          <div className={styles.card}>
            <p className={styles.textReviewer}>
              “Nice. Dentist was very good. Explained each step before doing
              things. Works around Peoples Disabilities.”
            </p>
            <p className={styles.textReviewer}>- Glenda</p>
          </div>
          <div className={styles.card}>
            <p className={styles.textReview}>
              My experience was one of up most professional, friendly and
              quality service.
            </p>
            <p className={styles.textReviewer}>- David</p>
          </div>
        </div>
      </div>
    </AspectRatio.Root>
  );
};

export default Reviews;
