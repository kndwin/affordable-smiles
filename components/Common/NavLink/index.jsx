import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styles from "./styles.module.scss";

export const NavLink = ({ path, label }) => {
  const router = useRouter();
  return (
    <div
      className={`${
        router.pathname == path ? styles.selected : styles.notSelected
      } ${styles.linkWrapper}`}
    >
      <Link href={path}>
        <a className={`${styles.link}`}>{label}</a>
      </Link>
    </div>
  );
};
