import Image from "next/image";
import React, { useState } from "react";
import CarouselCard from "./CarouselCard";

type CardInfo = {
  name: string;
  desc: string;
};

const Carousel = () => {
  const cardInfo: CardInfo[] = [
    {
      name: "Carpet Flooring",
      desc: "The most budget friendly flooring. Carpet can be simple for rental properties and luxurious with pattern to add an unexpected pop to your project",
    },
    {
      name: "Tile Flooring",
      desc: "The most versatile material. This hard surface comes in different looks such as: stone, wooden plank, pattern, and even mosaic, and can be used on floors, walls, bathrooms, showers, and kitchen countertops & backsplash",
    },
    {
      name: "Variety of Floors",
      desc: "The most versatile material. This hard surface comes in different looks such as: stone, wooden plank, pattern, and even mosaic, can be used on floors, walls, bathrooms, showers, and countertops & backsplash",
    },
    {
      name: "Laminate Flooring",
      desc: "The most versatile material. This hard surface comes in looks such as: stone, wooden plank, pattern, and even mosaic, can be used on floors, walls, bathrooms, showers, and kitchen countertops & backsplash",
    },
  ];

  return (
    <div className="relative bg-[#d4cab1] text-white h-[calc(100vh)] mt-40 text-center pt-8">
      <span className="text-7xl font-serif">OUR PRODUCTS</span>
      <div className="carousel mt-8 h-[calc(75vh)]">
        {cardInfo.map((value, index) => (
          <CarouselCard name={value.name} desc={value.desc} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Carousel;
