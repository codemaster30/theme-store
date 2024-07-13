"use client";
import React, { useState } from "react";

const Page = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
   
  };

  return (
    <div className="max-w-[1800px] mx-auto pt-20 px-2">
      <h3 className="text-2xl font-bold text-center mb-9">My Profile</h3>
      <div className="flex flex-col-reverse lg:flex-row md:flex-row gap-10">
        {/* Profile update section */}
        <div className="w-96 h-64 rounded-lg mt-4 mx-auto border-1 border-primaryColor p-6">
          <h3 className="text-sm font-medium">Name</h3>
          <h3 className="font-semibold mt-2">Md Zobayer Hossen</h3>

          <h3 className="text-sm font-medium mt-6">Email</h3>
          <h3 className="font-semibold mt-2 mb-6">jobayer2003q@gmail.com</h3>

          <hr />

          <button
            onClick={() => setOpenModal(true)}
            className="w-full h-11 bg-primaryColor font-semibold text-white rounded-lg"
          >
            Update Profile
          </button>

          <div
            onClick={() => setOpenModal(false)}
            className={`fixed z-[100] flex items-center justify-center ${
              openModal ? "opacity-1 visible" : "invisible opacity-0"
            } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${
                openModal ? "opacity-1 translate-y-0 duration-300" : "-translate-y-20 opacity-0 duration-150"
              }`}
            >
              <form onSubmit={handleSubmit} className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
                <svg
                  onClick={() => setOpenModal(false)}
                  className="mx-auto mr-0 w-10 cursor-pointer fill-black dark:fill-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g>
                    <path
                      d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                    ></path>
                  </g>
                </svg>
                <h1 className="pb-8 text-4xl backdrop-blur-sm text-white">Update Profile</h1>
                <div className="space-y-5">
                  <label htmlFor="name" className="block text-white">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      defaultValue={"Zobayer"}
                      className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <label htmlFor="email" className="block text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      defaultValue={"jobayer2003q@gmail.com"}
                      className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="relative py-2.5 px-5 rounded-lg mt-6 text-white font-semibold bg-primaryColor drop-shadow-lg hover:bg-gray-300"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full">
          {/* Order item */}
          <div className="max-w-[1200px]">
            {/* Order list */}
            <div className="flex w-full items-center space-x-2 sm:space-x-4 mt-4 border-b-2 pb-4 border-dashed">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw&auto=format&fit=crop&w=675&q=80"
                alt="Replica headphones"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      Replica headphones
                    </h3>
                    <p className="text-lg font-semibold">99.95€</p>
                  </div>

                  {/* Download button */}
                  <div>
                    <button className="download-button transform active:scale-95 bg-primaryColor hover:bg-orange-800 text-white px-6 py-5 rounded-lg font-bold tracking-widest w-full">
                      <div className="flex gap-2 justify-center items-center relative">
                        <div className="svg-container">
                          <svg
                            className="download-icon"
                            width="18"
                            height="22"
                            viewBox="0 0 18 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="download-arrow"
                              d="M13 9L9 13M9 13L5 9M9 13V1"
                              stroke="#F2F2F2"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                              stroke="#F2F2F2"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="download-loader text-white hidden"></div>

                          <svg
                            className="check-svg hidden"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L9.70711 14.7071C9.31658 15.0976 8.68342 15.0976 8.29289 14.7071L4.29289 10.7071C3.90237 10.3166 3.90237 9.68342 4.29289 9.29289C4.68342 8.90237 5.31658 8.90237 5.70711 9.29289L9 12.5858L14.2929 7.29289Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <span className="relative text-lg font-semibold hidden lg:block md:block">
                          Download 
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Order list */}
            <div className="flex w-full items-center space-x-2 sm:space-x-4 mt-4 border-b-2 pb-4 border-dashed">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw&auto=format&fit=crop&w=675&q=80"
                alt="Replica headphones"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      Replica headphones
                    </h3>
                    <p className="text-lg font-semibold">99.95€</p>
                  </div>

                  {/* Download button */}
                  <div>
                    <button className="download-button transform active:scale-95 bg-primaryColor hover:bg-orange-800 text-white px-6 py-5 rounded-lg font-bold tracking-widest w-full">
                      <div className="flex gap-2 justify-center items-center relative">
                        <div className="svg-container">
                          <svg
                            className="download-icon"
                            width="18"
                            height="22"
                            viewBox="0 0 18 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="download-arrow"
                              d="M13 9L9 13M9 13L5 9M9 13V1"
                              stroke="#F2F2F2"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                              stroke="#F2F2F2"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="download-loader text-white hidden"></div>

                          <svg
                            className="check-svg hidden"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L9.70711 14.7071C9.31658 15.0976 8.68342 15.0976 8.29289 14.7071L4.29289 10.7071C3.90237 10.3166 3.90237 9.68342 4.29289 9.29289C4.68342 8.90237 5.31658 8.90237 5.70711 9.29289L9 12.5858L14.2929 7.29289Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <span className="relative text-lg font-semibold hidden lg:block md:block">
                          Download 
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Order list */}
            <div className="flex w-full items-center space-x-2 sm:space-x-4 mt-4 border-b-2 pb-4 border-dashed">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw&auto=format&fit=crop&w=675&q=80"
                alt="Replica headphones"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      Replica headphones
                    </h3>
                    <p className="text-lg font-semibold">99.95€</p>
                  </div>

                  {/* Download button */}
                  <div>
                    <button className="download-button transform active:scale-95 bg-primaryColor hover:bg-orange-800 text-white px-6 py-5 rounded-lg font-bold tracking-widest w-full">
                      <div className="flex gap-2 justify-center items-center relative">
                        <div className="svg-container">
                          <svg
                            className="download-icon"
                            width="18"
                            height="22"
                            viewBox="0 0 18 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="download-arrow"
                              d="M13 9L9 13M9 13L5 9M9 13V1"
                              stroke="#F2F2F2"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                              stroke="#F2F2F2"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="download-loader text-white hidden"></div>

                          <svg
                            className="check-svg hidden"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L9.70711 14.7071C9.31658 15.0976 8.68342 15.0976 8.29289 14.7071L4.29289 10.7071C3.90237 10.3166 3.90237 9.68342 4.29289 9.29289C4.68342 8.90237 5.31658 8.90237 5.70711 9.29289L9 12.5858L14.2929 7.29289Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <span className="relative text-lg font-semibold hidden lg:block md:block">
                          Download 
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more order items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
