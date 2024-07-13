"use client";
import DemoStore from "@/Components/demoStore/DemoStore";
import Banner from "@/Components/eachTheme/Banner";
import CardSection from "@/Components/eachTheme/CardSection";
import Promise from "@/Components/eachTheme/Promise";
import Sandbox from "@/Components/eachTheme/Sandbox";
import Stories from "@/Components/eachTheme/Stories";
import TabSection from "@/Components/eachTheme/TabSection";
import useFetchQuery from "@/Hooks/shared/useFetch";
import { Spinner } from "@nextui-org/react";

import React from "react";

const Page = ({ params }) => {
  const { id } = params;
  console.log(`/themes/${id}`, "id");
  const { data, isLoading } = useFetchQuery(`/themes/${id}`);

  if (data) {
    console.log(data, "data");
  }
  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        {" "}
        <Spinner color="primary" />
      </div>
    );
  }

  return (
    <div className="mt-12">
      <Banner data={data.data}></Banner>
      <DemoStore></DemoStore>
      {/* <WebCard></WebCard> */}
      <TabSection></TabSection>
      <Stories></Stories>
      <Promise></Promise>
      <CardSection></CardSection>
      <Sandbox></Sandbox>
    </div>
  );
};

export default Page;
