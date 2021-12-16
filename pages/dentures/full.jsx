import {Layout} from 'components'
import styles from './styles.module.scss'

const FullDenturePage = (props) => {
	return (
		<Layout>
			<div className={styles.fullDentureContainer}>
				<div className={styles.hero}>
					<h1 className={styles.title}>Full dentures</h1>
				</div>
			</div>
		</Layout>
	)
}

export default FullDenturePage
