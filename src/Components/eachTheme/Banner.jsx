"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { MdReadMore } from "react-icons/md";

const Banner = ({ data }) => {
  // const {name,author}=data;
  // console.log(data, "banner data");
  return (
    <div className="bg-black text-white mt-20">
      <div className="  py-16 w-11/12 md:w-10/12 max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-6 ">
        {/* description section */}
        <div className="lg:w-1/3 w-full text-center lg:text-left">
          <h1 className="text-4xl pb-1">
            {data?.name}
            <span className=" text-sm">
              {" "}
              by{" "}
              <a href="/kjfvnke" className="underline">
                {data?.author}
              </a>
            </span>
          </h1>
          <h1 className=" text-[12px]">
            Version ${data?.version} •Jun 11, 2024
          </h1>
          <h1 className=" text-lg font-bold mt-7">${data?.price} USD</h1>
          <p className=" text-lg my-8">{data?.description}</p>
          <p className=" text-sm font-bold mb-2">Includes support for:</p>
          {data?.includeSupport.map((dta, i) => (
            <li key={i} className="px-2 py-1 text-sm font-medium">
              {dta}
            </li>
          ))}

          <div className="my-6">
            <button
              className="relative h-14 w-64 shadow-md hover:shadow-none shadow-primaryColor  origin-top transform rounded-lg border-2
             border-primaryColor/80 text-xl text-primaryColor before:absolute before:top-0 before:block 
             before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute 
             hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-primaryColor/80"
            >
              Buy Now
            </button>
          </div>
          <div className="pt-8 flex gap-4 justify-start items-start hover:translate-x-3 duration-300 flex-col">
            <Link href="#demo">
              {" "}
              <p className="text-lg text-center flex items-center justify-center gap-2 hover:text-primaryColor">
                View Demo Store <MdReadMore size={"2rem"} />
              </p>{" "}
            </Link>
          </div>
        </div>
        {/* image card section */}
        <div className="lg:w-2/3 ">
          <div
            className=" xl:h-[580px] h-[480px] relative overflow-hidden  max-h-full flex flex-col-reverse rounded-xl border-large border-primaryColor border-opacity-70  hover:shadow-primaryColor hover:shadow-lg  bg-cover bg-no-repeat bg-top hover:bg-bottom duration-[4s]"
            style={{
              backgroundImage: `url(${data?.featuredDesktopImage})`,
            }}
          ></div>
          <div
            className="w-1/2 md:w-1/5 left-auto lg:right-20 right-5 -bottom-[400px] lg:bottom-32 absolute xl:h-[500px] lg:h-[300px] h-[300px]  overflow-hidden   max-h-full flex flex-col-reverse rounded-xl border-primaryColor border-opacity-70 border-large hover:shadow-primaryColor hover:shadow-lg  bg-primaryColor bg-cover bg-no-repeat bg-top hover:bg-bottom duration-[2s]"
            style={{
              backgroundImage: `url(${data?.featuredPhoneImage})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
