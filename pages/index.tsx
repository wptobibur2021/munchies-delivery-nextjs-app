import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MetaHeader from "../components/Header/MetaHeader";
import HeroSection from "../components/Page/Home/HeroSection";
import FeatureSection from "../components/Page/Home/FeatureSection";
import BlogSection from "../components/Page/Home/BlogSection";
import ContactSection from "../components/Page/Home/ContactSection";
import Footer from "../components/Footer/Footer";
import axios from "axios";

export default function Home({ productItems }: { productItems: Product[] }) {
  console.log("productItems: ", productItems);
  return (
    <div>
      <MetaHeader />
      <div>
        <HeroSection />
        <FeatureSection productItems={productItems} />
        <BlogSection />
        <ContactSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("https://munchies-api.up.railway.app/products");
  return {
    props: { productItems: res.data },
  };
}
