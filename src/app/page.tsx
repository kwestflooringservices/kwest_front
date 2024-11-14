import Image from "next/image";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import HomeCard from "./components/Home_Card";
import Home_Card_Row from "./components/Home_Card_Row";
import Carousel from "./components/Carousel";
import Description from "./components/Description";
import ContactDivider from "./components/ContactDivider";
import Link from "next/link";

export default function Home() {
  const width: number = 50;
  const height: number = 50;

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Marquee />
      <Button text="View Sales" />
      <Home_Card_Row
        sources={["Hardwood Flooring", "Laminate Flooring", "Carpet Flooring"]}
      />
      <Home_Card_Row sources={["Tile Flooring", "Moulding"]} />
      <Carousel />
      <Description />
      <ContactDivider />
    </main>
  );
}
