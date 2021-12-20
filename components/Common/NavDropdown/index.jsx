import Link from "next/dist/client/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styles from "./styles.module.scss";

export const NavDropdown = ({ options, trigger, ...props }) => {
  const optionsHasTitles = options.some((option) => option.title);

  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger className={styles.trigger}>
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className={styles.dropdownBox}>
        {options.map(({ title, href, label }) => (
          <div key={`${title}${href}`}>
            {!!title ? (
              <>
                {!!href ? (
                  <Link href={href}>
                    <DropdownMenu.Item className={`${styles.titleLink}`}>
                      {title}
                    </DropdownMenu.Item>
                  </Link>
                ) : (
                  <p className={styles.title}>{title}</p>
                )}
              </>
            ) : (
              <Link href={href}>
                <DropdownMenu.Item
                  className={`${styles.item} ${
                    optionsHasTitles ? styles.indent : ""
                  }`}
                >
                  {label}
                </DropdownMenu.Item>
              </Link>
            )}
          </div>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
