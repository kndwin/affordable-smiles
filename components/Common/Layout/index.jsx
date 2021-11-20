import Link from "next/link";
import { Button, NavLink } from "components";
import styles from "./styles.module.scss";
import Logo from "../../../public/svg/logo.svg";

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo className={styles.logo} />
        <div className={styles.links}>
          <NavLink path="/" label="Home" />
          <NavLink path="/services" label="Services" />
          <NavLink path="/about-us" label="About us" />
          <NavLink path="/media" label="In the media" />
          <NavLink path="/contact" label="Contact & Location" />
        </div>
        <div className={styles.buttonWrapper}>
          <Button>BOOK AN APPOINTMENT</Button>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Logo className={styles.logo} />
          </div>
          <div className={styles.linksAndSmallLogo}>
            <div className={styles.footerLinks}>
              <Link href="/">
                <a className={styles.footerLink}>Home</a>
              </Link>
              <Link href="/">
                <a className={styles.footerLink}>Dentures</a>
              </Link>
              <Link href="/">
                <a className={styles.footerLink}>Implants</a>
              </Link>
              <Link href="/">
                <a className={styles.footerLink}>In the media</a>
              </Link>
              <Link href="/">
                <a className={styles.footerLink}>Full Dentures</a>
              </Link>
              <Link href="/">
                <a style={{ gridColumnStart: 1 }} className={styles.footerLink}>
                  Contact & Location
                </a>
              </Link>
              <Link href="/">
                <a className={styles.footerLink}>Partial Dentures</a>
              </Link>
            </div>
            <div className={styles.smallLogoWrapper}>
              <img src="/png/logo.png" alt="Affordable Smile Logo" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
