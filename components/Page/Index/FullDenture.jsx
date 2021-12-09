import { useState } from "react";
import styles from "./styles.module.scss";
import { Card } from "components";
import PlusTrigger from "./Trigger";

export const FullDenture = () => {
  const [showCard, setShowCard] = useState();

  return (
    <div className={styles.fullDentureContainer}>
      <div className={styles.cardWrapper}>
        <Card
          theme="dark"
          open={showCard}
          onOpenChange={() => setShowCard(!showCard)}
          trigger={
            <PlusTrigger showCard={showCard} setShowCard={setShowCard} />
          }
        >
          <div className={styles.cardContent}>
            <p className={styles.title}>Front teeth selection</p>
            <p className={styles.description}>
              Dentures are the most common type of implant. They are used to
              replace missing teeth.
            </p>
          </div>
        </Card>
      </div>
      <h3 className={styles.title}>Full Denture</h3>
      <img src="/png/fullDenture.png" alt="Full denture" />
    </div>
  );
};
