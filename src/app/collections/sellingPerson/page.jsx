"use client";
import Header from "@/Components/HeadingComponents/Header";
import ThemeCard from "@/Components/ThemeCard/ThemeCard";
import useFetchQuery from "@/Hooks/shared/useFetch";
import React from "react";
import { ImSpinner9 } from "react-icons/im";

const SellingPerson = () => {
  const { data, isLoading } = useFetchQuery("/themes");
  const cards = data?.data || [];
  // console.log("Is Loading: ", isLoading);
  return (
    <div className="mt-24">
      <Header
        heading={"Selling in person"}
        details={
          "Find themes that make it easy for customers to find your retail locations and give them options to pick up orders during their visit. Features to look for: store locators, in-store pickup availability, events calendar"
        }
      />
      {/* All Card Section */}
      <div className="py-8 md:py-12 w-11/12 mx-auto  items-center justify-between">
        {isLoading ? (
          <div className=" w-full min-h-96 flex items-center justify-center">
            <span className="text-6xl animate-spin">
              <ImSpinner9 />
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cards.map((dta) => (
              <ThemeCard dta={dta} key={dta._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellingPerson;
