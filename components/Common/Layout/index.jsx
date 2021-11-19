import styles from "./styles.module.scss";
import { Button, NavLink } from "components";
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
      <footer className={styles.footer}>footer</footer>
    </div>
  );
};
