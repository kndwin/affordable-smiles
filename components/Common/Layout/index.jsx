import Link from "next/link";

import { Button, NavLink, Dropdown } from "components";
import styles from "./styles.module.scss";
import Logo from "../../../public/svg/logo.svg";
import { useBreakpoints } from "hooks";

export const Layout = ({ children }) => {
  const { lg } = useBreakpoints();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo className={styles.logo} />
        <div className={styles.links}>
          <NavLink path="/" label="Home" icon="/svg/home.svg" />
          <NavLink path="/services" label="Services" />
          <NavLink path="/about-us" label="About us" />
          <NavLink path="/media" label="In the media" />
          <NavLink path="/contact" label="Contact & Location" />
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.iconWithLabel}>
            <img
              className={styles.icon}
              src="/svg/calendar.svg"
              alt="Calendar icon"
            />
            <a className={styles.label}>Book an appointment</a>
          </div>
          <div className={styles.iconWithLabel}>
            <img
              className={styles.icon}
              src="/svg/call.svg"
              alt="Calendar icon"
            />
            <a className={styles.label}>Call</a>
          </div>
        </div>
        {lg && <Dropdown className={styles.dropdown} />}
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
