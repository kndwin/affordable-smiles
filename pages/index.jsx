import Head from "next/head";
import { Layout } from "components";
import DenturesAndImplants from "components/Page/Index/DenturesAndImplants";
import HealthFunds from "components/Page/Index/HealthFunds";
import Reviews from "components/Page/Index/Reviews";
import Hero from "components/Page/Index/Hero";

export default function Home() {
  return (
    <Layout isHomePage={true}>
      <Head>
        <title>Affordable Smiles</title>
        <meta name="description" content="No compromise on quality" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <DenturesAndImplants />
      <HealthFunds />
      <Reviews />
    </Layout>
  );
}
