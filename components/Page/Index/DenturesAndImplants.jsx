import Link from "next/link";
import styles from "./styles.module.scss";

const DenturesAndImplants = () => {
  return (
    <div className={`${styles.denturesAndImplants}`}>
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
              <Link href={href}>
                <div key={src} className={styles.denture}>
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
              },
              { src: "/png/implants.png", label: "Implants" },
              { src: "/png/implant-denture.png", label: "Implant Dentures" },
            ].map(({ src, label }) => (
              <div key={src} className={styles.implants}>
                <img src={src} alt={label} />
                <p className={styles.label}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DenturesAndImplants;
