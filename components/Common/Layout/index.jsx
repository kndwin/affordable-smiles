import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "./styles.module.scss";
import Logo from "../../../public/svg/logo.svg";
import { useBreakpoints } from "hooks";
import { NavLink, NavDropdown } from "components";

export const Layout = ({ children, isHomePage = false }) => {
  const { xl } = useBreakpoints();
  return (
    <div className={styles.container}>
			<header className={`${styles.header} ${isHomePage ? styles.homePageHeader : ""}`}>
        <Logo className={styles.logo} />
        {xl ? (
          <NavDropdown
            className={styles.dropdown}
            trigger={<GiHamburgerMenu className={styles.hamburger} />}
						options={[
							{ title: "Dentures" },
							{ href: "/dentures/full", label: "Full Dentures" },
							{ href: "/dentures/partial", label: "Partial Dentures" },
							{ title: "Implants" },
							{ href: "/implants/single-tooth", label: "Single Tooth Implants" },
							{ href: "/implants/denture", label: "Implant Denture" },
							{ href: "/implants/full-arch-bridge", label: "Full arch Implant Bridge" },
						]}
					/>
				) : (
          <>
            <div className={styles.links}>
              <NavLink path="/" label="Home" />
              <NavDropdown
                className={styles.dropdown}
                trigger={
                  <a className={styles.dropdownService}>
                    Services
                    <span className={styles.reversedTriangle} />
                  </a>
                }
								options={[
									{ title: "Dentures" },
									{ href: "/dentures/full", label: "Full Dentures" },
									{ href: "/dentures/partial", label: "Partial Dentures" },
									{ title: "Implants" },
									{ href: "/implants/single-tooth", label: "Single Tooth Implants" },
									{ href: "/implants/denture", label: "Implant Denture" },
									{ href: "/implants/full-arch-bridge", label: "Full arch Implant Bridge" },
								]}
							/>
							<NavLink path="/about-us" label="About us" />
              <NavLink path="/in-the-media" label="In the media" />
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
            </div>
          </>
        )}
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
