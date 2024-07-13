/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use clinet";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import useFetchQuery from "@/Hooks/shared/useFetch";
import useScroll from "@/Hooks/useScroll";
import { PiSpinnerBold } from "react-icons/pi";
import Link from "next/link";

const HeroSection = () => {
  const scroll = useScroll();
  const { data, isLoading } = useFetchQuery("/themes");
  const images = data?.data || [];
  // console.log("Is Loading: ", isLoading);
  // if (isLoading) {
  //   return (
  //     <div className="h-screen w-full justify-center items-center">
  //       <span className="text-7xl animate-spin justify-center items-center">
  //         <PiSpinnerBold />
  //       </span>
  //     </div>
  //   );
  // }
  return (
    <div className="overflow-hidden min-h-screen py-20 pb-64 relative flex flex-col-reverse lg:flex-row items-center justify-center w-11/12 mx-auto lg:w-auto lg:pl-40 gap-32 lg:gap-10 pt-36">
      <div className="w-full lg:w-2/5">
        <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
          Creative multi-purpose{" "}
          <span className="text-primaryColor">Shopify</span> theme
        </h1>
        <p className="text-base lg:text-xl opacity-70 pt-3 pb-8 lg:pb-12">
          <span className="text-primaryColor">#1 Best Selling</span> Shopify
          Theme of all time on Envato. An all-in-one template for your Shopify
          store, allowing you to create various structures and meet specific
          requirements.
        </p>
        <div className="flex items-center gap-8">
          <Link
            href={"/themes"}
            className="relative text-center flex items-center justify-center h-10 lg:h-12 w-52 origin-top transform rounded-lg border-2 border-primaryColor text-base lg:text-xl before:absolute before:bottom-0 before:block before:h-0 before:w-full before:duration-500 hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full bg-primaryColor before:rounded-lg text-white hover:text-primaryColor hover:before:bg-white"
          >
            Buy Theme
          </Link>
          <Link
            href={"/themes"}
            className="relative text-center flex items-center justify-center h-10 lg:h-12 w-52 origin-top transform rounded-lg border-2 border-primaryColor text-base lg:text-xl text-primaryColor before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-primaryColor"
          >
            Explore Theme
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-3/5 pl-24 lg:pl-52 z-10 relative">
        <div className="w-full relative">
          <div className="bg-white border-slate-200 rounded-lg shadow-md shadow-slate-300 lg:p-8 lg:pt-12 border min-h-96 relative">
            <div className="absolute top-5 left-7 flex items-center gap-2">
              <div className="size-3 bg-slate-600 rounded-full"></div>
              <div className="size-3 bg-slate-600 rounded-full"></div>
              <div className="size-3 bg-slate-600 rounded-full"></div>
            </div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper w-full h-96 md:h-[450px] lg:h-[650px] bg-slate-100 bg-opacity-50 rounded-md"
            >
              {images.map((img) => (
                <SwiperSlide
                  key={img._id}
                  className="h-full w-full bg-cover bg-no-repeat bg-top rounded-md"
                  style={{
                    backgroundImage: `url(${img.featuredDesktopImage})`,
                  }}
                >
                  {/* <img
                    className="max-w-full rounded-md"
                    src={img.featuredDesktopImage}
                    alt=""
                  /> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute h-96 lg:h-[600px] w-64 lg:w-80 rounded-3xl border-8 shadow-md shadow-slate-300 border-white -left-20 lg:-left-56 -bottom-16 z-20">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper w-full h-full rounded-2xl bg-slate-100"
            >
              {images.map((img) => (
                <SwiperSlide
                  key={img._id}
                  className="h-full w-full bg-cover bg-no-repeat bg-top rounded-2xl"
                  style={{
                    backgroundImage: `url(${img.featuredPhoneImage})`,
                  }}
                >
                  {/* <img
                      className="max-w-full rounded-md"
                      src={img.featuredPhoneImage}
                      alt=""
                    /> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Circle Text */}
        <div className="absolute top-0 lg:top-5 left-5 z-40 w-20 lg:w-40 h-20 lg:h-40 animate-spin animate-spin-bb">
          <div className="relative w-full h-full">
            <div className="absolute scale-150 inset-0 w-full h-full">
              <svg className="w-full h-full circle-svg" viewBox="0 0 500 500">
                <defs>
                  <path
                    d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                    id="textcircle_top"
                  >
                    <animateTransform
                      attributeName="transform"
                      begin="0s"
                      dur="20s"
                      type="rotate"
                      from="0 250 250"
                      to="360 250 250"
                      repeatCount="indefinite"
                    />
                  </path>
                </defs>
                <text className="circle-text" dy="70" textLength="1220">
                  <textPath xlinkHref="#textcircle_top">
                    View Our Showreels View Our Showreels
                  </textPath>
                </text>
              </svg>
            </div>

            {/* <div className="text-9xl absolute showreels-btn">
              <FaPlay />
            </div> */}
          </div>
        </div>
      </div>

      {/* side image color */}
      <div
        className={`absolute duration-[7s] h-full w-full -z-50 ${
          scroll ? "left-10 top-10" : "left-0 top-0"
        }`}
      >
        <div className="bg-white w-full h-full absolute opacity-95"></div>
        <img
          className="h-full w-full"
          src="https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/dot-background.png"
          alt=""
        />
      </div>
      <img
        className="absolute h-full w-full top-0 left-0 opacity-75 -z-40"
        src="https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-rectangle.png"
        alt=""
      />
      <img
        className={`duration-[7s] absolute h-full -z-30 ${
          scroll
            ? "-left-[750px] -rotate-6 top-10"
            : "-left-[700px] -rotate-12 top-6"
        }`}
        src="https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer-red.png"
        alt=""
      />

      <img
        className="animate-spin animate-spin-bb absolute h-96 overflow-hidden -right-20 rotate-180 duration-1000 bottom-0 lg:-bottom-14 -z-30"
        src="https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-triangle.png"
        alt=""
      />
    </div>
  );
};

export default HeroSection;
