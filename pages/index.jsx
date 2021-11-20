import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Head from "next/head";
import styles from "./index.module.scss";
import { Layout, Button, FullDenture, Implant } from "components";
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heroWrapper}>
        <img
          className={styles.heroImage}
          src="png/heroImage.png"
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
              <div className={styles.boxesContainer}>
                {mounted && (
                  <Canvas
                    orthographic
                    className={styles.canvas}
                    camera={{ position: [10, 20, 50], zoom: 6 }}
                  >
                    <Suspense fallback={null}>
                      <pointLight position={[40, 40, 30]} intensity={1} />
                      <pointLight position={[-40, -40, 30]} intensity={1} />
                      <pointLight position={[0, 40, 30]} intensity={1} />
                      <pointLight position={[40, 0, 30]} intensity={1} />
                      <pointLight position={[0, -40, 30]} intensity={1} />
                      <pointLight position={[-40, 0, 30]} intensity={1} />
                      <FullDenture />
                      <OrbitControls enableZoom={false} />
                    </Suspense>
                  </Canvas>
                )}
              </div>
            </div>
            <div className={styles.implantsWrapper}>
              <div className={styles.implantsTagline}>
                <h3>Implants</h3>
                <Button className={styles.button} ghost>
                  View all Implants options
                </Button>
              </div>
              <div className={styles.boxesContainer}>
                {mounted && (
                  <Canvas
                    orthographic
                    className={styles.canvas}
                    camera={{ position: [10, 20, 10], zoom: 18 }}
                  >
                    <Suspense fallback={null}>
                      <pointLight position={[0, 20, 30]} intensity={1} />
                      <pointLight position={[0, 20, -30]} intensity={1} />
                      <pointLight position={[-20, 0, 0]} intensity={1} />
                      <pointLight position={[20, 0, 0]} intensity={1} />
                      <Implant />
                      <OrbitControls enableZoom={false} />
                    </Suspense>
                  </Canvas>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.healthFunds}>
          <h2>We welcome all health funds</h2>
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
          <div className={styles.reviews}>
            <h3>What our customers say about us</h3>
          </div>
        </div>
      </div>
      {card && <h1>card toggled</h1>}
    </Layout>
  );
}
