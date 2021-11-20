import styles from "./styles.module.scss";

export const Card = ({ className, children, ...props }) => {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {children}
    </div>
  );
};
