import { Layout } from "components";
import styles from "./styles.module.scss";

const AcrylicPage = (props) => {
  return (
    <Layout>
			<div className={styles.acrylicContainer}>
				<div className={styles.hero}>
					<h1 className={styles.title}>Acrylic</h1>
				</div>
			</div>
    </Layout>
  );
};

export default AcrylicPage;
