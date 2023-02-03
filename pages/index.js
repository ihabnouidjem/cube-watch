import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import WatchRow from "../components/WatchRow";
import HomeHeader from "../components/homeHeader";
import HomeStories from "../components/HomeStories";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ storiesList, productsList }) {
  return (
    <>
      <Head>
        <title>CUBE</title>
        <meta name="description" content="Watch Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Banner />
        <HomeHeader heading={"COLLECTION"} />
        <WatchRow productsList={productsList} />
        {/* <HomeHeader heading={"STORIES"} />
        <HomeStories storiesList={storiesList} /> */}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const storiesReq = await fetch("http://localhost:3000/api/stories");
  const storiesList = await storiesReq.json();

  const productsReq = await fetch("http://localhost:3000/api/products");
  const productsList = await productsReq.json();

  return {
    props: {
      storiesList: storiesList,
      productsList: productsList,
    },
  };
}
