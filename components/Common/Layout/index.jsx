import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "./styles.module.scss";
import Logo from "../../../public/svg/logo.svg";
import { useBreakpoints } from "hooks";
import { NavLink, NavDropdown } from "components";

export const Layout = ({ children, isHomePage = false }) => {
  const { xl, sm } = useBreakpoints();
  return (
    <div className={styles.container}>
      <header
        className={`${styles.header} ${
          isHomePage ? styles.homePageHeader : ""
        }`}
      >
        <Logo className={styles.logo} />
        {xl ? (
          <NavDropdown
            className={styles.dropdown}
            trigger={<GiHamburgerMenu className={styles.hamburger} />}
            options={[
              { title: "Home", href: "/" },
              { title: "Dentures" },
              { href: "/dentures/full", label: "Full Dentures" },
              { href: "/dentures/partial", label: "Partial Dentures" },
              { title: "Implants" },
              {
                href: "/implants/single-tooth",
                label: "Single Tooth Implants",
              },
              { href: "/implants/denture", label: "Implant Denture" },
              {
                href: "/implants/full-arch-bridge",
                label: "Full arch Implant Bridge",
              },
              { title: "About us", href: "/about-us" },
              { title: "In the media", href: "/in-the-media" },
              { title: "Contact & Location", href: "/contact" },
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
                  {
                    href: "/implants/single-tooth",
                    label: "Single Tooth Implants",
                  },
                  { href: "/implants/denture", label: "Implant Denture" },
                  {
                    href: "/implants/full-arch-bridge",
                    label: "Full arch Implant Bridge",
                  },
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
              <Link href="/dentures/full">
                <a className={styles.footerLink}>Full Denture</a>
              </Link>
              <Link href="/implants/single-tooth">
                <a className={styles.footerLink}>Single Tooth Implants</a>
              </Link>
              <Link href="/in-the-media">
                <a className={styles.footerLink}>In the Media</a>
              </Link>
              <Link href="/dentures/partial">
                <a className={styles.footerLink}>Partial Denture</a>
              </Link>
              <Link href="/implant/denture">
                <a className={styles.footerLink}>Implant Denture</a>
              </Link>
              <Link href="/contact">
                <a className={styles.footerLink}>Contact & Location</a>
              </Link>
              <Link href="/implants/full-arch-bridge">
                <a style={{ gridColumnStart: 3 }} className={styles.footerLink}>
                  Full Arch Implant Bridge
                </a>
              </Link>
            </div>
            {!sm && (
              <div className={styles.smallLogoWrapper}>
                <img src="/png/logo.png" alt="Affordable Smile Logo" />
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};
