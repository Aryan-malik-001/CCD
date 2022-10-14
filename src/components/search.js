import React from "react";
import { AdjustmentsOutline, Search, ChevronDown } from "heroicons-react";
import Card from "./subComponent/card";
function searchMenu() {
  return (
    <>
      <hr className="border-2 border-[#EBF0F5] mt-5"></hr>
      <div className="flex flex-col-reverse justify-center items-center md:flex-row md:justify-between ">
        <div className="flex gap-1  md:my-0 my-2 items-center md:pl-12 text-sm py- 7">
          <AdjustmentsOutline />
          Show filter
        </div>
        <div className="flex items-center md:my-0 my-2 md:pr-12">
          <div className="flex gap-1 items-center md:pr-7 text-sm ">
            Sort by : Low to high
            <ChevronDown />
          </div>
          <div className="flex items-center text-sm border-2 border-[#DCE1E6] rounded">
            <input
              className="border-none outline-none py-2 pl-2.5"
              type="text"
              placeholder="Search"
            ></input>
            <Search className="mr-1 stroke-1 stroke-[#000000] cursor-pointer " />
          </div>
        </div>
      </div>
      <hr className="border-2 border-[#EBF0F5] mb-5"></hr>
      <div className="pl-12 text-xl pb-5">Combos N Cakes (flat Rs. 50 Off)</div>

      <div className="grid gap-4 md:grid-cols-2 mx-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default searchMenu;
