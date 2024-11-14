import Image from "next/image";
import React from "react";

export default function FloorCard({ data }) {
  return (
    <div className=" flex flex-col border-2 border-solid border-[#D2B48C] rounded h-3/5 w-1/3">
      <Image
        src={"/Tile Flooring.jpeg"}
        alt="Tile Flooring"
        width={400}
        height={400}
      />
      <span className=" text-4xl">{data.floorname}</span>
      <span className=" text-base">{data.floordesc}</span>
    </div>
  );
}
