import Image from "next/image";
import RootLayout from "./layout";
import HeroComp from "@/components/LandingPage/Hero/HeroComp";
import AboutUs from "@/components/AboutUs/AboutUs";

export default function Home() {
  return (
    <main>
      <HeroComp />
      <AboutUs />
    </main>
  );
}
