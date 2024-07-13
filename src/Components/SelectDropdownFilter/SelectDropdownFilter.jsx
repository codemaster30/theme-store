"use client";

import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

const SelectDropdownFilter = () => {
  const sortby = [
    { label: "Most Relevant" },
    { label: "Most Resent" },
    { label: "Most Relevant" },
    { label: "Most Resent" },
  ];

  const [value, setValue] = React.useState(new Set([]));
  return (
    <Select
      label="Sort"
      variant="bordered"
      placeholder="Most Relevant"
      selectedKeys={value}
      className="w-full md:w-52 mt-6 md:mt-0"
      onSelectionChange={setValue}
      onClose={() => setTouched(true)}
    >
      {sortby.map((animal) => (
        <SelectItem key={animal.key}>{animal.label}</SelectItem>
      ))}
    </Select>
  );
};

export default SelectDropdownFilter;
