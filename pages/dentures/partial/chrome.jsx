import { Layout } from "components";
import styles from "./styles.module.scss";

const ChromePage = (props) => {
  return (
	<Layout>
			<div className={styles.chromeContainer}>
				<div className={styles.hero}>
					<h1 className={styles.title}>Chrome</h1>
				</div>
			</div>
		</Layout>
  );
};

export default ChromePage;
