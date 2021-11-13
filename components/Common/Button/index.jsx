import styles from './styles.module.scss'

export const Button = ({ children, ...props}) => {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	)
}
