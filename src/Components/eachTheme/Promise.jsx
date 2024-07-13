"use client";

import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaPhotoFilm } from "react-icons/fa6";
import { TbBrandSpeedtest, TbLicense } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
const Promise = () => {
  return (
    <div className="bg-[#faede6] text-black">
      <div className=" w-11/12 md:w-10/12 max-w-[1800px] mx-auto flex flex-col md:flex-row py-10 gap-8">
        <div className=" lg:w-1/2 w-full text-center lg:text-left">
          <h1 className=" md:text-5xl text-2xl font-bold leading-relaxed">
            Build with <span className="text-primaryColor">confidence —</span> <br />
            <span className="text-primaryColor">the Theme</span> Store promise
          </h1>
        </div>

        <div className=" lg:w-1/2 w-full grid lg:grid-cols-2 grid-cols-1 gap-8 ">
          <div>
            <div className=" flex items-center text-primaryColor gap-2">
              <VscWorkspaceTrusted  size={"2rem"} />
              <h1 className=" text-black font-semibold">
                Works with the latest Shopify features
              </h1>
            </div>
            <div className="pl-8 text-[#56524E]">
              <p>
                Themes on the Shopify Theme Store are guaranteed to stay up to
                date and work with Shopify’s ever-growing feature set
              </p>
            </div>
          </div>
          <div>
            <div className=" flex items-center text-primaryColor gap-2">
              <TbBrandSpeedtest size={"2rem"} />
              <h1 className=" text-black font-semibold">Speed-tested and approved</h1>
            </div>
            <div className="pl-8 text-[#56524E]">
              <p>
                Every theme in the Theme Store meets Shopify’s performance
                standards, ensuring a faster shopping experience for your
                buyers.
              </p>
            </div>
          </div>
          <div>
            <div className=" flex items-center text-primaryColor gap-2">
              <AiOutlineFieldTime size={"2rem"} />
              <h1 className=" font-semibold text-black">Unlimited free trial</h1>
            </div>
            <div className="pl-8 text-[#56524E]">
              <p>
                Try the theme for free with your own products, brand colors, and
                customizations. One-time payment of $240 if you publish the
                theme to your store
              </p>
            </div>
          </div>
          <div>
            <div className=" flex items-center text-primaryColor gap-2">
              <FaPhotoFilm size={"2rem"} />
              <h1 className=" font-semibold text-black">Free high-resolution photos</h1>
            </div>
            <div className="pl-8 text-[#56524E]">
              <p>
                Demo stores aren’t included, but you can get free stock photos
                from{" "}
                <a href="" className=" underline text-green-950">
                  Shopify Burst
                </a>
                .
              </p>
            </div>
          </div>
          <div>
            <div className=" flex items-center text-primaryColor gap-2">
              <MdOutlineSystemUpdateAlt size={"2rem"} />
              <h1 className=" font-semibold text-black">Free theme updates</h1>
            </div>
            <div className="pl-8 text-[#56524E]">
              <p>
                Get the latest theme features and fixes from the Theme Store.
                You can redownload your purchase at any time.
              </p>
            </div>
          </div>
          <div>
            <div className=" flex items-center text-primaryColor gap-2">
              <TbLicense size={"2rem"} />
              <h1 className=" font-semibold text-black">
                Non-expiring license for one store
              </h1>
            </div>
            <div className="pl-8 text-[#56524E]">
              <p>
                Your payment entitles you to use the theme on a single store,
                and keep it as long as you like.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promise;
