import Link from "next/link";
import styles from "./styles.module.scss";

const DenturesAndImplants = () => {
  return (
    <section
      tabIndex="-1"
      id="dentureAndImplants"
      className={`${styles.containerDenturesAndImplants}`}
    >
      <div className={styles.content}>
        <div className={styles.dentures}>
          <h2 className={styles.title}>
            <span className={styles.fontFade}>Affordable </span>
            <span className={styles.fontLight}>Dentures</span>
          </h2>
          <div className={styles.images}>
            {[
              {
                href: "/dentures/partial/acrylic",
                src: "/png/acrylic-denture.png",
                label: "Acrylic Denture",
              },
              {
                href: "/dentures/partial/cosmetic",
                src: "/png/cosmetic-denture.png",
                label: "Cosmetic Denture",
              },
              {
                href: "/dentures/full",
                src: "/png/full-denture.png",
                label: "Full Denture",
              },
              {
                href: "/dentures/partial/chrome",
                src: "/png/chrome-denture.png",
                label: "Chrome Denture",
              },
            ].map(({ src, label, href }) => (
              <Link href={href} key={src}>
                <div className={styles.denture}>
                  <img src={src} alt={label} />
                  <p className={styles.label}>{label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.implants}>
          <h2 className={styles.title}>
            <span className={styles.fontFade}>Affordable </span>
            <span className={styles.fontLight}>Implants</span>
          </h2>
          <div className={styles.images}>
            {[
              {
                src: "/png/full-arch-implant-bridge.png",
                label: "Full Arch Implant Bridge",
                href: "/implants/full-arch-bridge",
              },
              {
                src: "/png/implants.png",
                label: "Implants",
                href: "/implants/single-tooth",
              },
              {
                src: "/png/implant-denture.png",
                label: "Implant Dentures",
                href: "/implants/denture",
              },
            ].map(({ src, label, href }) => (
              <Link href={href} key={src}>
                <div className={styles.implant}>
                  <img src={src} alt={label} />
                  <p className={styles.label}>{label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DenturesAndImplants;
