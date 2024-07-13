/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Tabs,
  Tab,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Checkbox,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import { GrDocumentVerified } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaStar } from "react-icons/fa6";

const TabSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [rating, setRating] = useState(0);
  // const [backdrop, setBackdrop] =useState('opaque')
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const result = [data, rating];
    console.log(result);
    // You can handle form submission here
  };
  return (
    <div className="w-11/12 md:w-10/12 max-w-[1800px] mx-auto my-24">
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-primaryColor",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-primaryColor",
          }}
        >
          {/* feature tab section */}
          <Tab
            key="feature"
            title="FEATURES"
            className=" text-primaryColor bg-white border-0"
          >
            <div>
              <div className="relative overflow-x-auto ">
                <table className="w-full text-sm text-left rtl:text-right text-black ">
                  <tbody>
                    <tr className="border-b  ">
                      <th
                        scope="row"
                        className=" py-8 w-[480px] text-lg text-gray-900 whitespace-nowrap font-semibold"
                      >
                        This theme is great for
                      </th>
                      <td className=" py-8 w-64">
                        <span className=" font-bold">Dropshippers</span> <br />
                        Designed specifically for dropshippers
                      </td>
                      <td className=" py-8 w-64">
                        <span className=" font-bold">High-volume stores</span>{" "}
                        <br />
                        Designed for stores that process a large number of
                        transactions in a given period
                      </td>
                      <td className=" py-8 w-64">
                        <span className=" font-bold">Quick setup</span> <br />
                        Theme setup steps are minimal to allow for quick launch
                      </td>
                    </tr>
                    <tr className="border-b  ">
                      <th
                        scope="row"
                        className=" py-8 w-[480px] text-lg text-gray-900 whitespace-nowrap font-semibold"
                      >
                        Cart and checkout
                      </th>
                      <td className=" py-8 w-64">Cart notes</td>
                      <td className=" py-8 w-64">In-store pickups</td>
                      <td className=" py-8 w-64">Quick buy</td>
                      <td className=" py-8 w-64">Sticky cart</td>
                    </tr>
                    <tr className="border-b  ">
                      <th
                        scope="row"
                        className=" py-8 w-[480px] text-lg text-gray-900 whitespace-nowrap font-semibold"
                      >
                        Marketing and conversion
                      </th>
                      <td className=" py-8 w-64">
                        Blogs <br />
                        FAQ page <br />
                        Promo banners <br />
                        Trust badges
                      </td>
                      <td className=" py-8 w-64">
                        Cross-selling <br />
                        Press coverage <br />
                        Quick view
                      </td>
                      <td className=" py-8 w-64">
                        Customizable contact form <br />
                        Product badges
                        <br />
                        Recommended products
                      </td>
                      <td className=" py-8 w-64">
                        EU translations (EN, FR, IT, DE, ES) <br />
                        Product reviews <br />
                        Stock counter
                      </td>
                    </tr>
                    <tr className="border-b  ">
                      <th
                        scope="row"
                        className=" py-8 w-[480px] text-lg text-gray-900 whitespace-nowrap font-semibold"
                      >
                        Merchandising
                      </th>
                      <td className=" py-8 w-64">
                        High-resolution images <br />
                        Image zoom <br />
                        Shipping/delivery information
                      </td>
                      <td className=" py-8 w-64">
                        Image galleries <br />
                        Product options <br />
                        Slideshow
                      </td>
                      <td className=" py-8 w-64">
                        Image hotspot
                        <br />
                        Product tabs
                      </td>
                      <td className=" py-8 w-64">
                        Image rollover <br />
                        Product videos
                      </td>
                    </tr>
                    <tr className="border-b  ">
                      <th
                        scope="row"
                        className=" py-8 w-[480px] text-lg text-gray-900 whitespace-nowrap font-semibold"
                      >
                        Product discovery
                      </th>
                      <td className=" py-8 w-64">
                        Breadcrumbs <br />
                        Recommended products
                      </td>
                      <td className=" py-8 w-64">Collection page navigation</td>
                      <td className=" py-8 w-64">Enhanced search</td>
                      <td className=" py-8 w-64">
                        Product filtering and sorting
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Tab>
          {/* Review section */}
          <Tab key="review" title="REVIEWS">
            <div>
              <div className="flex md:flex-row flex-col ">
                <div className="md:w-2/5">
                  <h2 className=" text-xl md:text-start text-center font-bold mt-7 mb-5">
                    243 reviews
                  </h2>
                  <p className=" text-3xl font-bold mb-7 md:text-start text-center">
                    <span className="text-primaryColor md:text-start text-center ">
                      96%{" "}
                    </span>{" "}
                    positive
                  </p>
                  <div className=" flex items center justify-center md:justify-start">
                    <Button
                      onPress={onOpen}
                      className=" bg-white border text-md font-semibold  hover:bg-primaryColor text-primaryColor rounded-full  hover:text-white border-primaryColor"
                      radius="full"
                    >
                      Write a review
                    </Button>
                  </div>
                  {/* post review card */}
                  <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="top-center"
                    backdrop="blur"
                  >
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1">
                            <h2 className=" text-xl text-center">
                              Give us{" "}
                              <span className=" text-primaryColor">Review</span>{" "}
                            </h2>
                          </ModalHeader>
                          <ModalBody className="">
                            <form
                              className=" mx-auto my-0 p-5 bg-[#f9f9f9] border rounded-lg border-[#ddd] "
                              onSubmit={handleSubmit(onSubmit)}
                            >
                              <label className=" block font-bold mb-4">
                                {" "}
                                Name:
                              </label>
                              <input
                                className=" w-full p-2 mb-3 border rounded-lg border-primaryColor"
                                type="text"
                                {...register("userName", { required: true })}
                                placeholder="Enter your name"
                              />
                              <label className=" block my-4 font-bold ">
                                Rate this website:
                              </label>
                              <div className=" flex justify-center">
                                <Rating
                                  style={{ maxWidth: 180 }}
                                  value={rating}
                                  onChange={setRating}
                                />
                              </div>

                              <label className=" block my-4 font-bold ">
                                Comment:
                              </label>
                              <textarea
                                className=" w-full p-2 mb-3 border rounded-lg border-primaryColor"
                                {...register("comment", { required: true })}
                                placeholder="Enter your comment"
                                rows={4}
                              />

                              {/* <Button
                                color="primary"
                                type="submit"
                                onPress={onClose}
                              >
                                Submit Review
                              </Button> */}
                              <button
                                className="relative h-10 w-36 shadow-md hover:shadow-none shadow-primaryColor  origin-top transform rounded-lg border-2
             border-primaryColor/80 text-md text-primaryColor before:absolute before:top-0 before:block 
             before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute 
             hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-primaryColor/80"
                              >
                                Submit Review
                              </button>
                            </form>
                          </ModalBody>
                          <ModalFooter></ModalFooter>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                </div>
                {/* Costomer review section */}
                <div className="md:w-3/5 flex flex-col">
                  {[1, 2, 3, 4].map((data) => (
                    <div key={1} class=" border-b-1 p-8">
                      <div className=" flex justify-between">
                        <p class="font-bold text-xl uppercase">
                          John Doe{" "}
                          <span className=" text-sm font-medium text-gray-500">
                            {" "}
                            13 Days ago
                          </span>
                        </p>
                        <div class="flex items-center justify-center space-x-2 mt-4">
                          {[1, 2, 3, 4, 5].map((data) => (
                            <div key={1} className=" text-xl text-yellow-500">
                              <FaStar />
                            </div>
                          ))}
                        </div>
                      </div>

                      <p class="text-base mt-5  text-gray-700">
                        This podcast is amazing! The storytelling and production
                        quality are top-notch. I can't wait for the next
                        episode!
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tab>
          {/* Support tab secion */}
          <Tab key="support" title="SUPPORT AND DOCUMENTATION">
            <div className=" flex md:gap-28 flex-col md:flex-row">
              <div>
                <h2 className=" text-base font-bold mb-6">
                  This theme is supported by Electric Maybe
                </h2>
                <div className=" flex gap-2 items-center mb-4">
                  <FaHeadphones size={"1.5rem"} />
                  <a
                    href=" "
                    className=" text-sm underline hover:text-blue-600 hover:no-underline"
                  >
                    Get support
                  </a>
                </div>
                <div className=" mb-10 flex gap-2 items-center">
                  <GrDocumentVerified size={"1.5rem"} />
                  <a
                    href=" "
                    className="text-sm  underline hover:text-blue-600 hover:no-underline"
                  >
                    Read the documentation
                  </a>
                </div>
                <h2 className="mb-6 text-lg">About</h2>
                <div className=" my-2 flex gap-2 items-center">
                  <IoLocationSharp size={"1.5rem"} />
                  <h2>Istambul. TR</h2>
                </div>
                <div className=" flex gap-2 items-center">
                  <GrDocumentVerified size={"1.5rem"} />
                  <h2>abcd@xyz.com</h2>
                </div>
              </div>

              <div>
                <h2 className=" text-xl font-bold mb-6">Release notes</h2>
                <h2>No release notes available for this theme.</h2>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default TabSection;
