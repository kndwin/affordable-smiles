import Link from "next/dist/client/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styles from "./styles.module.scss";
import { Dialog } from "components";

export const NavDropdown = ({ options, trigger, ...props }) => {
  const optionsHasTitles = options.some((option) => option.title);

  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger className={styles.trigger}>
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content sideOffset={20} className={styles.dropdownBox}>
        {options.map(({ title, href, label, dialog }, index) => (
          <div key={index}>
            {!!dialog && (
              <Dialog trigger={<p className={styles.dialogTrigger}>{label}</p>}>
                {dialog}
              </Dialog>
            )}
            {!!title && (
              <>
                {!!href ? (
                  <Link href={href}>
                    <DropdownMenu.Item className={`${styles.titleLink}`}>
                      <p>{title}</p>
                    </DropdownMenu.Item>
                  </Link>
                ) : (
                  <p className={styles.title}>{title}</p>
                )}
              </>
            )}
            {!!label && !!href && (
              <Link href={href}>
                <DropdownMenu.Item
                  className={`${styles.item} ${
                    optionsHasTitles ? styles.indent : ""
                  }`}
                >
                  <a>{label}</a>
                </DropdownMenu.Item>
              </Link>
            )}
          </div>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
