"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export default function DropdownSelectAccordion() {
  return (
    <Accordion
      selectionMode="multiple"
      defaultExpandedKeys={["1", "2", "3", "4"]}
    >
      {/* Price */}
      <AccordionItem key="1" aria-label="Price" title="Price">
        <CheckboxGroup>
          {/* defaultValue={["free"]} */}
          <Checkbox value="free">Free</Checkbox>
          <Checkbox value="paid">Paid</Checkbox>
        </CheckboxGroup>
      </AccordionItem>

      <AccordionItem key="2" aria-label="Industry" title="Industry">
        <CheckboxGroup>
          <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
          <Checkbox value="sydney">Sydney</Checkbox>
          <Checkbox value="san-francisco">San Francisco</Checkbox>
          <Checkbox value="tokyo">Tokyo</Checkbox>
        </CheckboxGroup>
      </AccordionItem>

      {/* Catalog size */}
      <AccordionItem key="3" aria-label="Catalog size" title="Catalog size">
        <CheckboxGroup>
          <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
          <Checkbox value="sydney">Sydney</Checkbox>
          <Checkbox value="san-francisco">San Francisco</Checkbox>
          <Checkbox value="london">London</Checkbox>
          <Checkbox value="tokyo">Tokyo</Checkbox>
        </CheckboxGroup>
      </AccordionItem>

      {/* Features */}
      <AccordionItem key="3" aria-label="Features" title="Features">
        <CheckboxGroup>
          <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
          <Checkbox value="sydney">Sydney</Checkbox>
          <Checkbox value="san-francisco">San Francisco</Checkbox>
          <Checkbox value="london">London</Checkbox>
          <Checkbox value="tokyo">Tokyo</Checkbox>
        </CheckboxGroup>
      </AccordionItem>
    </Accordion>
  );
}
