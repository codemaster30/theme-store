/* eslint-disable @next/next/no-img-element */
"use client";

import { Link } from "@nextui-org/react";
import React from "react";

const CardSection = () => {
  return (
    <div className="  py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div class="flex items-center gap-12">
            <h2 class="text-3xl font-bold text-gray-800 md:text-7xl ">
              Gall<span className="text-primaryColor">ery</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* <!-- image - start --> */}
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 hover:shadow-[rgb(251,190,155)]">
            <img
              src="https://cdn.shopify.com/s/files/1/0448/0833/9607/files/col-1b.webp?v=1710835132&width=940"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>
          {/* <!-- image - end -->

            <!-- image - start --> */}
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:shadow-[rgb(251,190,155)] md:col-span-2 md:h-80">
            <img
              src="https://cdn.shopify.com/s/files/1/0448/0833/9607/files/col-2a.webp?v=1710835181&width=940"
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>
          {/* <!-- image - end -->
                        {/* <!-- image - start --> */}
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:shadow-[rgb(251,190,155)] md:h-80">
            <img
              src="https://cdn.shopify.com/s/files/1/0448/0833/9607/files/col-1d.webp?v=1710835132&width=940"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>
          {/* <!-- image - end -->
                        {/* <!-- image - start --> */}
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 hover:shadow-[rgb(251,190,155)] shadow-lg md:h-80">
            <img
              src="https://cdn.shopify.com/s/files/1/0448/0833/9607/files/col-3c.webp?v=1710835221&width=940"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>
          {/* <!-- image - end -->
                        {/* <!-- image - start --> */}
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:shadow-[rgb(251,190,155)] md:h-80">
            <img
              src="https://cdn.shopify.com/s/files/1/0448/0833/9607/files/col-2c.webp?v=1710835181&width=940"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>
          {/* <!-- image - end -->


            <!-- image - start --> */}
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:shadow-[rgb(251,190,155)] md:col-span-2 md:h-80">
            <img
              src="https://cdn.shopify.com/s/files/1/0448/0833/9607/files/col-2d.webp?v=1710835181&width=940"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>
          {/* <!-- image - end -->

            <!-- image - start --> */}
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:shadow-[rgb(251,190,155)] md:h-80">
            <img
              src="https://cdn.shopify.com/s/files/1/0448/0833/9607/files/col-1e.webp?v=1710835132&width=940"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>
          {/* <!-- image - end --> */}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
