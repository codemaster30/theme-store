"use clinet";
import Link from "next/link";
import React from "react";
import ThemeCard from "../ThemeCard/ThemeCard";
import useFetchQuery from "@/Hooks/shared/useFetch";

const HomeCardSection = () => {
  const { data, isLoading } = useFetchQuery("/themes");
  const cards = data?.data || [];

  return (
    <div className="my-20">
      <div className="border-y py-20 grid md:grid-cols-2 grid-cols-1 gap-7">
        <h2 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-[#212326]">
          Every theme meets a high standard
        </h2>
        <div className="space-y-5 text-[#78726D]">
          <p className="text-base">
            <span className="font-semibold text-black">
              Packed with built‑in features.
            </span>{" "}
            Offer discounts, recommend products, capture emails, and{" "}
            <Link
              className="underline underline-offset-8 text-black hover:text-blue-400 hover:no-underline"
              href="https://help.shopify.com/manual/online-store/themes"
            >
              do more for your buyers.
            </Link>
          </p>
          <p className="text-base">
            <span className="font-semibold text-black ">
              Optimized for selling online.
            </span>{" "}
            So your store loads fast, is mobile-friendly, and has the{" "}
            <Link
              className="underline underline-offset-8 text-black hover:text-blue-400 hover:no-underline"
              href="https://help.shopify.com/manual/online-store/themes"
            >
              best checkout
            </Link>{" "}
            around.
          </p>
          <p className="text-base">
            <span className="font-semibold text-black">
              Covered by long-term support.
            </span>{" "}
            All themes get{" "}
            <Link
              className="underline underline-offset-8 text-black hover:text-blue-400 hover:no-underline"
              href="https://help.shopify.com/manual/online-store/themes"
            >
              free updates
            </Link>{" "}
            so you always have the latest version available.
          </p>
        </div>
      </div>

      {/* row card 4  */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 mt-20 gap-10">
        {cards.slice(0, 4).map((dta) => (
          <ThemeCard dta={dta} key={dta._id} />
        ))}
      </div>

      {/* row card 3  */}
      <div className="grid md:grid-cols-3 grid-cols-1 mt-20 gap-10">
        {cards.slice(0, 3).map((dta) => (
          <ThemeCard dta={dta} key={dta._id} />
        ))}
      </div>
    </div>
  );
};

export default HomeCardSection;
