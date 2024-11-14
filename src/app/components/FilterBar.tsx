"use client";
import React from "react";
import Image from "next/image";
import { useState, useCallback } from "react";
import { filters } from "../types/filters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterBar() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const filters: filters = {
    onSale: searchParams.get("onSale") === "true" || false,
    hardWood: searchParams.get("hardWood") === "true" || false,
    tile: searchParams.get("tile") === "true" || false,
    carpet: searchParams.get("carpet") === "true" || false,
    vinyl: searchParams.get("vinyl") === "true" || false,
    search: searchParams.get("search") || "",
    price: Number(searchParams.get("price")) || 0,
  };

  const createURLString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <ul className="w-1/4 fixed menu h-full bg-white">
      <Image src="/KwestIcon.jpeg" width={300} height={100} alt="KwestIcon" />
      <div className="flex mt-[calc(5vh)]">
        <input
          type="text"
          placeholder="Search Floors"
          value={filters.search}
          onChange={(e) => {
            router.push(
              pathName + "?" + createURLString("search", e.target.value)
            );
          }}
          className="h-10 bg-white placeholder-black flex-1 border-b-2 border-l-2 border-[#D2B48C] rounded-xl focus:outline-none pl-5 text-xl"
        />
      </div>
      <label className="ml-1 text-xl mt-[calc(2vh)]">Filter By Price</label>
      <input
        type="range"
        min={0}
        max="100"
        defaultValue="25"
        className="range [--range-shdw:tan] range-xs"
      />
      <div className="flex w-full justify-between px-2 text-xs">
        <span>$0.00</span>
        <span>$2.50</span>
        <span>$5.00</span>
        <span>$7.50</span>
        <span>$10.00</span>
      </div>
      <label className="ml-1 text-xl mt-[calc(3vh)]">Filter By On Sale</label>
      <div className="form-control border-l-2 border-b-2 rounded-lg border-[#D2B48C]">
        <label className="cursor-pointer label">
          <span className="label-text text-black">On Sale!</span>
          <input
            type="checkbox"
            className="checkbox [--chkbg:#D2B48C]"
            checked={filters.onSale || false}
            onChange={(e) =>
              router.push(
                pathName +
                  "?" +
                  createURLString("onSale", String(e.target.checked))
              )
            }
          />
        </label>
      </div>
      <label className="ml-1 text-xl mt-[calc(2vh)]">
        Filter By Floor Type
      </label>
      <div className="flex">
        <div className="flex-1 pr-2">
          <div className="form-control border-l-2 border-b-2 rounded-lg border-[#D2B48C]">
            <label className="cursor-pointer label">
              <span className="label-text text-black">Hardwood Floor</span>
              <input
                type="checkbox"
                checked={filters.hardWood || false}
                className="checkbox [--chkbg:#D2B48C]"
                onChange={(e) =>
                  router.push(
                    pathName +
                      "?" +
                      createURLString("hardWood", String(e.target.checked))
                  )
                }
              />
            </label>
          </div>
          <div className="form-control border-l-2 border-b-2 rounded-lg border-[#D2B48C]">
            <label className="cursor-pointer label">
              <span className="label-text text-black">Carpet</span>
              <input
                type="checkbox"
                checked={filters.carpet || false}
                className="checkbox [--chkbg:#D2B48C]"
                onChange={(e) =>
                  router.push(
                    pathName +
                      "?" +
                      createURLString("carpet", String(e.target.checked))
                  )
                }
              />
            </label>
          </div>
        </div>
        <div className=" flex-1 ">
          <div className="form-control border-l-2 border-b-2 rounded-lg border-[#D2B48C]">
            <label className="cursor-pointer label">
              <span className="label-text text-black">Vinyl</span>
              <input
                type="checkbox"
                checked={filters.vinyl || false}
                className="checkbox [--chkbg:#D2B48C]"
                onChange={(e) =>
                  router.push(
                    pathName +
                      "?" +
                      createURLString("vinyl", String(e.target.checked))
                  )
                }
              />
            </label>
          </div>
          <div className="form-control border-l-2 border-b-2 rounded-lg border-[#D2B48C]">
            <label className="cursor-pointer label">
              <span className="label-text text-black">Tile</span>
              <input
                type="checkbox"
                checked={filters.tile || false}
                className="checkbox [--chkbg:#D2B48C]"
                onChange={(e) =>
                  router.push(
                    pathName +
                      "?" +
                      createURLString("tile", String(e.target.checked))
                  )
                }
              />
            </label>
          </div>
        </div>
      </div>
    </ul>
  );
}
