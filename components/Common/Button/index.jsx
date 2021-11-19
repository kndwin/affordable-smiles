import styles from "./styles.module.scss";

export const Button = ({ children, className, ghost, ...props }) => {
  return (
    <button
      className={`${styles.button} ${className} ${ghost ? styles.ghost : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
