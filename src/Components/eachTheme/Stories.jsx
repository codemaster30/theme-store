"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Stories = () => {
  return (
    <div className=" bg-white text-black my-24">
      <div className="w-11/12 md:w-10/12 max-w-[1800px] mx-auto ">
        <h2 className=" text-2xl font-semibold mb-5">Stores using Parallax</h2>
        <div className="flex flex-row  justify-center items-center md:gap-4 gap-8 max-w-full overflow-x-auto overflow-y-hidden min-h-[361px]">
          <div className="min-w-[330px] lg:h-full hover:opacity-80 ">
            <Link href="">
              <img
                src="https://cdn.shopify.com/theme-store/3ycfzowo0kfvodjz8wtngwv3jt6u.jpg"
                className="rounded-xl"
                alt=""
              />
            </Link>
          </div>
          <div className="min-w-[330px] lg:h-full hover:opacity-80 ">
            <Link href="">
              <img
                src="https://cdn.shopify.com/theme-store/oy2m03e24k35azmuo4utszk1d2n3.jpg"
                className="rounded-xl"
                alt=""
              />
            </Link>
          </div>
          <div className="min-w-[330px] lg:h-full hover:opacity-80  ">
            <Link href="">
              <img
                src="https://cdn.shopify.com/theme-store/2bfvwumz3m57cra96f09n82bjsu0.jpg"
                className="rounded-xl"
                alt=""
              />
            </Link>
          </div>
          <div className="min-w-[330px] lg:h-full hover:opacity-80 ">
            <Link href="">
              <img
                src="https://cdn.shopify.com/theme-store/eecz02mwyldtivvbl5hgoh7zz5lk.jpg"
                className="rounded-xl"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
