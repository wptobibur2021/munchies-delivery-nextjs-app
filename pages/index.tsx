import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MetaHeader from "../components/Header/MetaHeader";
import HeroSection from "../components/Page/Home/HeroSection";
import FeatureSection from "../components/Page/Home/FeatureSection";
import BlogSection from "../components/Page/Home/BlogSection";

export default function Home() {
  return (
    <div>
      <MetaHeader />
      <div>
        <HeroSection />
        <FeatureSection />
        <BlogSection />
      </div>
    </div>
  );
}
