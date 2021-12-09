import Link from "next/dist/client/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styles from "./styles.module.scss";

export const NavDropdown = ({ options, trigger, ...props }) => {
  const optionsHasTitles = options.some((option) => option.title);

	console.log({ options })

  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger className={styles.trigger}>
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className={styles.dropdownBox}>
        {options.map(({ title, href, label }) => (
          <div key={`${title}${href}`}>
            {!!title ? (
              <p className={styles.title}>
                {title}
              </p>
            ) : (
              <DropdownMenu.Item
                className={`${styles.item} ${
                  optionsHasTitles ? styles.indent : ""
                }`}
              >
                <Link href={href}>{label}</Link>
              </DropdownMenu.Item>
            )}
          </div>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
