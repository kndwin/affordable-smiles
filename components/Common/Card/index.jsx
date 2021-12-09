import * as Popover from "@radix-ui/react-popover";
import styles from "./styles.module.scss";

export const Card = ({ children, trigger, theme, onOpenChange, open, ...props }) => {
  return (
    <Popover.Root onOpenChange={onOpenChange} open={open}>
      <Popover.Trigger className={`${styles.trigger}`}>
        {trigger}
      </Popover.Trigger>
      <Popover.Content
        className={`${styles.card} ${theme === "dark" ? styles.dark : ""}`}
      >
        {children}
      </Popover.Content>
    </Popover.Root>
  );
};
