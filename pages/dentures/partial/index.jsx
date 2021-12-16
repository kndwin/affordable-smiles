import { Layout } from "components";
import Link from "next/link";
import styles from "./styles.module.scss";

const PartialDenturePage = (props) => {
  return (
    <Layout>
      <div className={styles.partialDentureContainer}>
				<h1>Partial dentures</h1>
				<Link href="/dentures/partial/acrylic">
					<a>Acrylic Denture </a>
				</Link>
				<Link href="/dentures/partial/chrome">
					<a>Chrome Denture </a>
				</Link>
				<Link href="/dentures/partial/cosmetic">
					<a>Cosmetic Denture </a>
				</Link>
			</div>
    </Layout>
  );
};

export default PartialDenturePage;
