"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Searchbar = ({ cls, setShow }) => {
  const [input, setInput] = useState("");
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchbar = () => {
    setShow("hidden");
    setDatas([]);
    setInput('');
  };

  const fetchData = async (value) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://theme-store-server.vercel.app/api/v1/themes?searchTerm=${value}`);
      setDatas(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDatas([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleClearInput = () => {
    setInput('');
    setDatas([]);
  };

  return (
    <div className={cls}>
      <div className="">
        <div className="w-full h-20 bg-white fixed top-0 left-0 right-0 z-50 flex justify-center items-center border-b-1">
          <input
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            type="text"
            className="w-1/3 h-full outline-none"
            placeholder="Search by feature, style, or designer"
          />
          {input && (
            <button onClick={handleClearInput} className="mr-4">
              clear
            </button>
          )}
          <button onClick={handleSearchbar}>
            <IoMdClose className="text-2xl hover:text-primaryColor" />
          </button>
        </div>

        <div className="w-full fixed top-20 left-0 right-0 z-50">
          <div className="flex w-1/3 flex-col items-center justify-center border-b-1 border-l-1 border-r-1  bg-white mx-auto">
            {isLoading && <div className="h-32 flex items-center justify-center">Loading...</div>}
            {!isLoading && datas.length > 0 && (
            
              <>
              <div className="pt-4"></div>
                {datas.map((item) => (
                  <Link
                    key={item._id}
                    href={`/themes/${item._id}`}
                    onClick={handleSearchbar}
                    className="font-medium bg-white h-12 flex items-center px-8 hover:bg-slate-200 w-full"
                  >
                    {item.name}
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
