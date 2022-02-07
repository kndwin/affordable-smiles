import styles from "./styles.module.scss";

const Reviews = () => {
  const reviews = [
    {
      review:
        "“Advanced techniques with modern equipment & a friendly, experienced team. Love their work!”",
      reviewer: "Sharon",
    },
    {
      review:
        "“Nice. Dentist was very good. Explained each step before doing things. Works around Peoples Disabilities.”",
      reviewer: "Glenda",
    },
    {
      review:
        "My experience was one of up most professional, friendly and quality service.",
      reviewer: "David",
    },
  ];
  return (
    <div className={styles.containerReviewsWrapper}>
      <img
        className={styles.backgroundImage}
        src="/png/background-2.png"
        alt="Background Image"
      />
      <div className={styles.reviews}>
        <h3 className={styles.title}>What our customers say about us</h3>
        <div className={styles.containerCard}>
          {reviews.map(({ review, reviewer }, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.textReview}>{review}</p>
              <p className={styles.textReviewer}>
                <span>- {reviewer}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
