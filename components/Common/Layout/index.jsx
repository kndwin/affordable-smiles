import styles from "./styles.module.scss";
import { Button, NavLink } from "components";

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.radial1} />
      <div className={styles.radial2} />
      <header className={styles.header}>
        <div className={styles.logo}>Affordable smiles</div>
        <div className={styles.links}>
          <NavLink path="/" label="Home" />
          <NavLink path="/about-us" label="About us" />
          <NavLink path="/pricing" label="Pricing" />
          <NavLink path="/contact" label="Contact & Location" />
          <Button>BOOK AN APPOINTMENT</Button>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
};
