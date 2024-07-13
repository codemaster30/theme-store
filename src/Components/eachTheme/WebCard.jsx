"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import ThemeCard from "../ThemeCard/ThemeCard";
import useFetchQuery from "@/Hooks/shared/useFetch";

const WebCard = () => {
  const { data, isLoading } = useFetchQuery("/themes");
  const cards = data?.data || [];
  return (
    <div className=" bg-white text-black">
      <div className="md:max-w-7xl mx-auto grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 w-full justify-items-center  gap-4">
        {cards.slice(0, 4).map((dta) => (
          <ThemeCard dta={dta} key={dta._id} />
        ))}
      </div>
    </div>
  );
};

export default WebCard;
