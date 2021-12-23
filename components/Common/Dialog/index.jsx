import * as DialogComponents from '@radix-ui/react-dialog';
import styles from "./styles.module.scss"

export const Dialog = ({ trigger, children, ...props }) => (
  <DialogComponents.Root>
    <DialogComponents.Trigger className={styles.trigger}>
			{trigger}
    </DialogComponents.Trigger>
    <DialogComponents.Portal >
      <DialogComponents.Overlay className={styles.overlay} />
      <DialogComponents.Content className={styles.content}>
				{children}
      </DialogComponents.Content>
    </DialogComponents.Portal>
  </DialogComponents.Root>
);

