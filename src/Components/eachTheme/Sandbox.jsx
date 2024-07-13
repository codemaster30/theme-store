"use client";
/* eslint-disable @next/next/no-img-element */
import { Link } from "@nextui-org/react";
import React from "react";
import ThemeCard from "../ThemeCard/ThemeCard";
import useFetchQuery from "@/Hooks/shared/useFetch";

const Sandbox = () => {
  const { data, isLoading } = useFetchQuery("/themes");
  const cards = data?.data || [];
  return (
    <div className="w-11/12 md:w-10/12 max-w-[1800px] mx-auto my-24">
      <h2 className=" text-2xl font-semibold mb-5">
        More <span className="text-primaryColor">themes</span> by{" "}
        <a
          href=" "
          className=" underline hover:text-primaryColor hover:no-underline"
        >
          {" "}
          Out of the Sandbox
        </a>
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full justify-items-center  gap-4">
        {cards.slice(0, 2).map((dta) => (
          <ThemeCard dta={dta} key={dta._id} />
        ))}
      </div>
    </div>
  );
};

export default Sandbox;
