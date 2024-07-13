"use client";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import React from "react";

const ThemeCard = ({ dta }) => {
  // console.log(dta);
  // const {
  //   name: themeName = " ",
  //   includeSupport,
  //   price,
  //   featuredPhoneImage,
  //   featuredDesktopImage,
  // } = dta;
  return (
    <div className="rounded-md shadow-md shadow-slate-200 w-full">
      {/* Image */}
      <Link href={`/themes/${dta.id}`}>
        <div
          className="relative h-80 bg-cover bg-top bg-no-repeat w-full rounded-t-md"
          style={{
            backgroundImage: `url(${dta?.featuredDesktopImage})`,
          }}
        >
          <div
            className="h-56 w-36 bg-cover bg-top bg-no-repeat rounded-t-md absolute bottom-0 right-3 border-2 border-slate-900"
            style={{
              backgroundImage: `url(${dta?.featuredPhoneImage})`,
            }}
          ></div>
        </div>
      </Link>

      <div className="p-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold  text-black">{dta?.name}</h1>
          <h1 className="text-xl text-primaryColor  font-semibold">
            ${dta?.price} <span className="text-base">USD</span>
          </h1>
        </div>

        <h1 className="text-base opacity-50  text-black ">{dta?.author}</h1>

        {/*  */}
        <div className="flex flex-wrap gap-2 my-5">
          {dta?.includeSupport.map((dta, i) => (
            <button
              key={i}
              className="px-2 py-1 text-sm bg-slate-100 rounded-md font-medium"
            >
              {dta}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
