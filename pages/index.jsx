import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.scss";
import { Layout, Button, FullDenture, Implant, Dropdown } from "components";
import { useEffect, useState, Suspense } from "react";

export default function Home() {
  const [card, setCard] = useState(false);
  const toggleCard = () => {
    setCard(!card);
  };
  const [mounted, setMounted] = useState();
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Layout>
      <Head>
				<title>Affordable Smiles</title>
				<meta name="description" content="No compromise on quality" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.heroWrapper}>
				<img
					className={styles.heroImage}
					src="/png/heroImageV2.png"
					alt="Woman smiling"
				/>
				<div className={styles.heroTagline}>
          <h1>Affordable Smiles.</h1>
          <h1>Fair prices.</h1>
          <h3>No compromise on quality.</h3>
          <Button className={styles.button} ghost>
            GET A QUOTE
          </Button>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.catalog}>
          <div className={styles.catalogTagline}>
            <h2>Digital Catalog</h2>
            <h4>Inspect every aspect of your potential treatment</h4>
          </div>
          <div className={styles.denturesAndImplantsWrapper}>
            <div className={styles.denturesWrapper}>
              <div className={styles.dentureTagline}>
                <h3>Dentures</h3>
                <Button className={styles.button} ghost>
                  View all Denture options
                </Button>
              </div>
              <Image
                src="/png/fullDenture.png"
                alt="Full denture"
                width={546}
                height={446}
              />
            </div>
            <div className={styles.implantsWrapper}>
              <div className={styles.implantsTagline}>
                <h3>Implants</h3>
                <Button className={styles.button} ghost>
                  View all Implants options
								</Button>
							</div>
							<div className={styles.boxesContainer}>
								<Image
									src="/png/fullDenture.png"
									alt="Full denture"
									width={546}
									height={446}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.healthFunds}>
					<div className={`${styles.fullWidth} ${styles.background}`} />
					<img
						className={styles.smilingWoman}
						src="/png/woman-smiling.png"
						alt="Smiling"
					/>
					<h2 className={styles.title}>We welcome all health funds</h2>
					<div className={styles.healthFundLogos}>
            {[
              "png/bupaIcon.png",
              "png/medibankIcon.png",
              "png/nibIcon.png",
              "png/hcfIcon.png",
              "png/teachersHealth.png",
            ].map((image, index) => (
              <img
                key={index}
                className={styles.healthFundLogo}
                src={image}
                alt="Health Fund Logo"
              />
            ))}
          </div>
        </div>
        <div className={styles.reviewsWrapper}>
          <div className={styles.background} />
          <div className={styles.reviews}>
            <h3>What our customers say about us</h3>
          </div>
        </div>
      </div>
      {card && <h1>card toggled</h1>}
    </Layout>
  );
}
