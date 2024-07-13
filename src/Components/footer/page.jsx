"use client";
import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" w-full  bg-black pb-10   px-3  lg:px-0 md:px-0">
      <aside className="py-[64px]">
        <h3 className=" text-3xl md:text-[52px] lg:text-[52px]  font-semibold text-white text-center">
          All you need to start{" "}
        </h3>
        <h3 className=" text-3xl md:text-[52px] lg:text-[52px] font-semibold text-white text-center lg:mt-5 md:mt-5">
          your business for free
        </h3>
        <div className=" flex justify-center mt-5">
          <button className="bg-primaryColor px-5 text-white   py-3 rounded-full font-semibold ">
            Start free trial
          </button>
        </div>
      </aside>

      <aside className="w-10/12 mx-auto  flex justify-between border-b-2 border-[#ffffff] pb-6 ">
        {/* Online store */}
        <div className=" hidden lg:block md:block">
          <h4 className="text-white font-semibold mb-3">Online store</h4>
          <h6 className="text-[#b6babf] text-sm mt-2">Sell online</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Features</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Examples</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Website editor</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Online retail</h6>
        </div>

        {/* Domain names */}
        <div className="hidden lg:block md:block ">
          <div className="text-white font-semibold h-6 mb-3"> </div>
          <h6 className="text-[#b6babf] text-sm mt-2">Domain names</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">
            Ecommerce <br />
            website
          </h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Themes</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Shopping cart</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Ecommerce hosting</h6>
        </div>

        {/* Domain names */}
        <div className=" hidden lg:block md:block">
          <div className="text-white font-semibold h-6 mb-3"> </div>
          <h6 className="text-[#b6babf] text-sm mt-2">Mobile commerce</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">
            Ecommerce <br /> software
          </h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Online store builder</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Websites for sale</h6>
        </div>

        {/*Point of sale */}
        <div className="hidden lg:block md:block">
          <h4 className="text-white font-semibold mb-3">Point of sale</h4>

          <h6 className="text-[#b6babf] text-sm mt-2">Point of sale</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Features</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Hardware</h6>
        </div>

        {/* 24/7 Support*/}
        <div className="">
          <h4 className="text-white font-semibold mb-3">24/7 Support</h4>
          <h6 className="text-[#b6babf] text-sm mt-2">
            Shopify Help
            <br /> Center
          </h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Forums</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">API Documentation</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Free tools</h6>
        </div>

        {/*Shopify */}
        <div className="">
          <h4 className="text-white font-semibold mb-3">Shopify</h4>
          <h6 className="text-[#b6babf] text-sm mt-2">Contact</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Partner program</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Affiliate program</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">App developers</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Investors</h6>
          <h6 className="text-[#b6babf] text-sm mt-2">Blog topics</h6>
        </div>
      </aside>

      <aside className="w-10/12 mx-auto mt-4  lg:flex  md:flex justify-between  ">
        <div className="text-[#b6babf]  flex gap-4">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div className=" flex gap-2 text-white items-center mt-4 lg:mt-0 md:mt-0 ">
          <IoEarthOutline />
          <h3>English</h3>
          <IoMdArrowDropdown className="text-XL" />
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
