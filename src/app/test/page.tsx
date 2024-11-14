import Image from "next/image";
import FilterBar from "../components/FilterBar";
import { floor } from "../types/floors";
import FloorCard from "../components/FloorCard";

async function fetchFloors(): Promise<floor[]> {
  const res = await fetch("http://127.0.0.1:8000/floors/api", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch floors data");
  }

  const data: floor[] = await res.json();
  return data;
}

// Page Component
export default async function Test({ searchParams }) {
  let data: floor[] = [];
  try {
    data = await fetchFloors();
  } catch (error) {
    console.error(error);
    return <h1>SOMETHING WENT WRONG!</h1>;
  }

  // Parse filters from searchParams, ensuring correct boolean conversion
  const filters = {
    vinyl: searchParams.vinyl === "true",
    hardwood: searchParams.hardWood === "true",
    carpet: searchParams.carpet === "true",
    onSale: searchParams.onSale === "true",
    tile: searchParams.tile === "true",
    search: searchParams.search || "",
  };

  // Server-side filtering logic
  const filteredData = data.filter((value) => {
    if (
      !filters.carpet &&
      !filters.hardwood &&
      !filters.tile &&
      !filters.vinyl
    ) {
      return true; // No filters applied, show all items
    }
    return (
      (filters.carpet && value.floortype === "Carpet") ||
      (filters.hardwood && value.floortype === "Hardwood") ||
      (filters.tile && value.floortype === "Tile") ||
      (filters.vinyl && value.floortype === "Vinyl")
    );
  });

  return (
    <div>
      <FilterBar />
      <div className="ml-[calc(25vw)] h-screen">
        {filteredData.map((value, index) => (
          <FloorCard key={index} data={value} />
        ))}
      </div>
    </div>
  );
}
