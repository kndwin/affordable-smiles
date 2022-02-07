import { useBreakpoints } from "hooks";
import styles from "./styles.module.scss";
import { TopLeftLine, BottomLeftLine, TopRightLine } from "./SVGs";
import PlusDot from "public/svg/plus-circle.svg";
import { useState } from "react";
import {BottomRightLine} from "./SVGs";

const FullDentureFocused = (props) => {
  const { lg } = useBreakpoints();
  return (
    <div className={styles.containerFullDenture}>
      <h1 className={styles.title}>Full dentures</h1>
      <div className={styles.containerImage}>
        <img
          className={styles.image}
          src="/png/full-denture-high-res.png"
          alt="Full Denture Image"
        />
        {!lg && <DesktopVersion />}
      </div>
    </div>
  );
};

export default FullDentureFocused;

const DesktopVersion = () => {
  const content = {
    topLeft: {
      title: "Denture Border (Sulcus)",
      description:
        "The depth of the denture and their border is critical for stability and enabling suction. If you have never worn a denture before this will feel a little bulky at the start but before long you will not notice it. Believe it or not, some patients request an extra thick border at the front to remove a wrinkle here and there!",
    },
    bottomLeft: {
      title: "Front Teeth Selection",
      description:
        "Front tooth selection is one of the most important parts of creating your new smile. Every face is shaped differently and as such choosing the right front 6 teeth to match your face is critical. We will look at colour shape and tooth angulation to make it perfect for you!",
    },
		topRight: {
			title: "Gum Carving",
			description: "Denture making is still very artistic. Did you know that your denture can be coloured and shaped to very closely mimic the contours of your gum? Have a chat to your practitioner if you are interested in having your new denture undergo a full characterisation process to product a more life-life denture."
		},
		bottomRight: {
			title: "Hygenic Gum Line",
			description: "It is vital that the denture gum line is designed to be as hygienic as possible. A nice even transition line between tooth and denture base will ensure this success."
		}
  };

  return (
    <>
      <TopLeft content={content.topLeft} />
      <BottomLeft content={content.bottomLeft} />
			<TopRight content={content.topRight} />
			<BottomRight content={content.bottomRight} />
    </>
  );
};

const TopLeft = ({ content: { title, description } }) => {
  const [show, setShow] = useState();
  return (
    <div style={{ top: 10, left: 120 }} className={styles.dot}>
      <TopLeftLine />
      <div
        style={{
          position: "absolute",
          left: "-565px",
          top: "-90px",
          width: "400px",
        }}
      >
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>{title}</h3>
          <PlusDot
            onClick={() => setShow(!show)}
            className={styles.plusIcon}
            style={{ marginLeft: "3em" }}
          />
        </div>
        {show && <p className={styles.description}>{description}</p>}
      </div>
      <div />
    </div>
  );
};

const BottomLeft = ({ content: { title, description } }) => {
  const [show, setShow] = useState();
  return (
    <div style={{ bottom: 250, left: 190 }} className={styles.dot}>
      <BottomLeftLine />
      <div
        style={{
          position: "absolute",
          right: "175px",
          top: "60px",
          width: "400px",
        }}
      >
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>{title}</h3>
          <PlusDot
            onClick={() => setShow(!show)}
            className={styles.plusIcon}
            style={{ marginLeft: "3em" }}
          />
        </div>
        {show && <p className={styles.description}>{description}</p>}
      </div>
      <div />
    </div>
  );
};

const TopRight = ({ content: {title, description }}) => {
  const [show, setShow] = useState();
  return (
		<div style={{ top: 50, right: 120 }} className={styles.dot}>
      <TopRightLine />
      <div
        style={{
          position: "absolute",
					left: "165px",
          top: "-93px",
          width: "300px",
        }}
      >
        <div className={`${styles.containerTitle} ${styles.flexEnd}`}>
          <h3 className={styles.title}>{title}</h3>
          <PlusDot
            onClick={() => setShow(!show)}
            className={styles.plusIcon}
            style={{ marginLeft: "3em" }}
          />
        </div>
        {show && <p className={styles.description}>{description}</p>}
      </div>
      <div />
    </div>
  );
}

const BottomRight = ({ content: {title, description }}) => {
  const [show, setShow] = useState();
  return (
		<div style={{ bottom: 170, right: 120 }} className={styles.dot}>
      <BottomRightLine />
      <div
        style={{
          position: "absolute",
					left: "80px",
          top: "0",
          width: "350px",
        }}
      >
        <div className={`${styles.containerTitle} ${styles.flexEnd}`}>
          <h3 className={styles.title}>{title}</h3>
          <PlusDot
            onClick={() => setShow(!show)}
            className={styles.plusIcon}
            style={{ marginLeft: "3em" }}
          />
        </div>
        {show && <p className={styles.description}>{description}</p>}
      </div>
      <div />
    </div>
  );
}
