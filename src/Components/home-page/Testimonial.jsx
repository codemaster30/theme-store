/* eslint-disable jsx-a11y/alt-text */
"use client";
/* eslint-disable @next/next/no-img-element */
import { FaQuoteLeft } from "react-icons/fa";
import "./style/componentStyle.css";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import Link from "next/link";

const Testimonial = () => {
  return (
    <div className="bg-[#fbf2ef]">
      <div className="w-11/12 md:w-10/12 max-w-[1800px] mx-auto px-4 py-10 relative">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          loop={true}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col md:flex-row md:gap-0 gap-20">
              <div className="w-full md:w-8/12 ">
                <FaQuoteLeft className="text-5xl mb-7 mt-20" />
                <h3 className="text-2xl font-semibold">
                  {`  When I launched my company it took me forever to choose a
                  theme and I'm so glad I picked pipeline. It grew as my
                  business grew.`}
                </h3>
                <p className="mt-10 text-xl">— Ouive</p>
              </div>
              <div className="w-full md:w-1/3 lg:ml-36">
                <div
                  className="text-center inline-block w-full rounded-xl h-[562px] bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url('https://cdn.shopify.com/theme-store/q1alwd14rzguxn4ilv2kepclqr5u.jpg')`,
                  }}
                >
                  {/* <img
                    src="https://cdn.shopify.com/theme-store/q1alwd14rzguxn4ilv2kepclqr5u.jpg"
                    className="w-full md:w-[319px] h-auto border border-black rounded-xl"
                    alt="imaggg"
                  /> */}
                </div>
              </div>
            </div>
            <p className="text-xl mt-5 lg:mt-10 text-center">
              {" "}
              <Link
                href={`https://themes.shopify.com/themes/pipeline/styles/clean?locale=en&surface_detail=testimonials&surface_inter_position=4&surface_intra_position=8&surface_type=home`}
                className="underline"
              >
                Pipeline
              </Link>{" "}
              by Groupthought
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row md:gap-0 gap-20">
              <div className="w-full md:w-8/12 ">
                <FaQuoteLeft className="text-5xl mb-7 mt-20" />
                <h3 className="text-2xl font-semibold">
                  So unique and unlike any other theme. Also the support team
                  responds quickly and has helped so much.
                </h3>
                <p className="mt-10 text-xl">— Maison Rue</p>
              </div>
              <div className="w-full md:w-1/3 lg:ml-36 ">
                <div
                  className="text-center inline-block w-full rounded-xl h-[562px] bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url('https://cdn.shopify.com/theme-store/q1alwd14rzguxn4ilv2kepclqr5u.jpg')`,
                  }}
                >
                  {/* <img
                    src="https://cdn.shopify.com/theme-store/41hcduhdnuifpztf7lzafusvauyu.jpg"
                    className="w-full md:w-[319px] max-h-[562px] border border-black rounded-xl"
                    alt="imaggg"
                  /> */}
                </div>
              </div>
            </div>
            <p className="text-xl mt-5 lg:mt-10 text-center">
              {" "}
              <Link
                href={`https://themes.shopify.com/themes/pipeline/styles/clean?locale=en&surface_detail=testimonials&surface_inter_position=4&surface_intra_position=8&surface_type=home`}
                className="underline"
              >
                Pipeline
              </Link>{" "}
              by Groupthought
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col md:flex-row md:gap-0 gap-20">
              <div className="w-full md:w-8/12 ">
                <FaQuoteLeft className="text-5xl mb-7 mt-20" />
                <h3 className="text-2xl font-semibold">
                  The theme is easily customised with clean and stylish sections
                  that work great on both mobile and desktop.
                </h3>
                <p className="mt-10 text-xl">— Illusions Lingerie</p>
              </div>
              <div className="w-full md:w-1/3 lg:ml-36">
                <div
                  className="text-center inline-block w-full rounded-xl h-[562px] bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url('https://cdn.shopify.com/theme-store/41hcduhdnuifpztf7lzafusvauyu.jpg')`,
                  }}
                >
                  {/* <img
                    src="https://cdn.shopify.com/theme-store/wwr5un31vnawnu1ljflz9fo6hcox.jpg"
                    className="w-full md:w-[319px] max-h-[562px] border border-black rounded-xl"
                    alt="imaggg"
                  /> */}
                </div>
              </div>
            </div>
            <p className="text-xl mt-5 lg:mt-10 text-center">
              {" "}
              <Link
                href={`https://themes.shopify.com/themes/pipeline/styles/clean?locale=en&surface_detail=testimonials&surface_inter_position=4&surface_intra_position=8&surface_type=home`}
                className="underline"
              >
                Pipeline
              </Link>{" "}
              by Groupthought
            </p>
          </SwiperSlide>
        </Swiper>
        <button className="arrow-left arrow absolute bottom-10 md:bottom-auto left-[40%] -translate-x-1/2 md:-translate-x-0 md:top-[480px] md:left-40 z-50 cursor-pointer rotate-180 md:rotate-0">
          {" "}
          <LuMoveRight className="text-4xl" />{" "}
        </button>
        <button className="arrow-right arrow absolute bottom-10 md:bottom-auto left-[60%] md:left-auto -translate-x-1/2 md:-translate-x-0  md:top-[480px]  z-50 cursor-pointer  rotate-180 md:rotate-0">
          {" "}
          <LuMoveLeft className="text-4xl" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
