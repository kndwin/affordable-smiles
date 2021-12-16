import { Layout } from "components";
import styles from "./styles.module.scss";

const CosmeticPage = (props) => {
  return (
    <Layout>
			<div className={styles.cosmeticContainer}>
				<div className={styles.hero}>
					<h1 className={styles.title}>Cosmetic</h1>
				</div>
			</div>
    </Layout>
  );
};

export default CosmeticPage;
