"use clinet";

import { Button } from "@nextui-org/react";
import React from "react";

const Header = ({ heading, details }) => {
  return (
    <div className="bg-[#fafafa]">
      <div className="py-8 md:py-12 w-11/12 mx-auto  items-center justify-between">
        <h1 className="font-bold text-slate-900 text-3xl ">{heading}</h1>
        <p className="text-[#6b7177] text-2xl ">{details}</p>
      </div>
    </div>
  );
};

export default Header;
