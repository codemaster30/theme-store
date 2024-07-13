"use client";

import DropdownSelectAccordion from "@/Components/DropdownSelectAccordion/DropdownSelectAccordion";
import SelectDropdownFilter from "@/Components/SelectDropdownFilter/SelectDropdownFilter";
import ThemeCard from "@/Components/ThemeCard/ThemeCard";

import { ImSpinner9 } from "react-icons/im";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Pagination,
  useDisclosure,
} from "@nextui-org/react";
import useFetchQuery from "@/Hooks/shared/useFetch";
import { useState } from "react";

const Themes = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const { data, isLoading } = useFetchQuery("/themes", {
    page: currentPage,
  });
  const cards = data?.data || [];
  console.log(data);
  // console.log("Is Loading: ", isLoading);
  return (
    <div className="mt-24">
      {/* Header Section  */}
      <div className="bg-[#fafafa]">
        <div className="py-8 md:py-12 w-11/12 mx-auto flex items-center justify-between">
          <h1 className="font-semibold text-slate-900 text-2xl md:text-3xl">
            Browse all themes
          </h1>
          <Button
            onPress={onOpen}
            className="h-8 text-sm md:hidden rounded-full text-white bg-slate-900 font-semibold"
          >
            Filter
          </Button>
        </div>
      </div>

      {/* All Themes Main Section */}
      <div className="mt-12 flex gap-5 flex-col md:flex-row items-start w-[95%] md:w-11/12 mx-auto">
        {/* Left part: dropdown-Select-Accordion */}
        <div className="w-full md:w-1/3 lg:w-1/4 bg-[#fafafa] p-3 min-h-28 rounded-md hidden md:block">
          <DropdownSelectAccordion />
        </div>
        {/* Left part: dropdown-Select-Accordion resopnsive modal */}
        <Modal
          className="overflow-y-auto"
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          radius="lg"
          size="full"
          hideCloseButton
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex justify-between gap-1 border-b border-slate-200">
                  <h1 className="font-semibold text-slate-900 text-xl">
                    Filter
                  </h1>
                  <Button
                    className="h-8 text-sm rounded-full text-white bg-slate-900 font-semibold"
                    onPress={onClose}
                  >
                    Done
                  </Button>
                </ModalHeader>
                <ModalBody>
                  <SelectDropdownFilter />
                  <div className="">
                    <DropdownSelectAccordion />
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
        {/* Right Part: All Templates  */}
        <div className="w-full md:w-3/4 p-3">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full">
            <p className="text-slate-400 md:text-sm w-full text-left">
              {currentPage}-{currentPage * data?.meta?.limit} of{" "}
              {data?.meta?.total} themes
            </p>

            {/* Dropdown select */}

            <div className="hidden md:block">
              <SelectDropdownFilter />
            </div>
          </div>
          {/* All Card Section */}
          {isLoading ? (
            <div className=" w-full min-h-96 flex items-center justify-center">
              <span className="text-6xl animate-spin">
                <ImSpinner9 />
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {cards.map((dta) => (
                <ThemeCard dta={dta} key={dta._id} />
              ))}
            </div>
          )}

          <div className="w-full flex items-center justify-center my-14">
            <Pagination
              className="text-white mx-auto"
              loop
              showControls
              total={Math.ceil(data?.meta?.total / data?.meta?.limit)}
              initialPage={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
