import {Layout} from 'components'
import styles from './styles.module.scss'

const SingleToothPage = (props) => {
	return (
		<Layout>
			<div className={styles.containerSingleTooth}>
				<div className={styles.hero}>
					<h1 className={styles.title}>Full dentures</h1>
				</div>
			</div>
		</Layout>
	)
}

export default SingleToothPage
