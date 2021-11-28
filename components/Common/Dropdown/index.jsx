import Link from "next/dist/client/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./styles.module.scss";

export const Dropdown = ({ options, ...props }) => {
  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger className={styles.trigger}>
        <GiHamburgerMenu className={styles.hamburger} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className={styles.dropdownBox}>
        <DropdownMenu.Item className={styles.item}>
          <Link href="/">Home</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className={styles.item}>
          <Link href="/services">Services</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className={styles.item}>
          <Link href="/about">About us</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className={styles.item}>
          <Link href="/media">In the media</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className={styles.item}>
          <Link href="/contact-and-location">Contact & Location</Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
