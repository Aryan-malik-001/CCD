import React from "react";
import Coffee from "../assets/coffee.jpg";
import logo from "../assets/logo1.svg";
import { Bookmark, ChevronDown, Star, Clock, XCircle } from "heroicons-react";

function banner1() {
  return (
    <div className="mt-28 mx-5 bg-[#EDF4F7] md:flex-row flex-col w-auto h-auto rounded-lg flex justify-between overflow-clip ">
      <div className="flex md:flex-row flex-col items-center justify-start">
        <img
          src={logo}
          alt="logo"
          className="w-14 md:block hidden mt-9 ml-7 h-20"
        ></img>
        <div className="pt-8 pl-5 font-['Poppins'] overflow-clip">
          <div className="flex items-center text-5xl font-semibold ">
            Cafe Coffee Day
            <div className="mr:w-9 h-9 w-16 bg-white rounded-full flex items-center justify-center mr-4 md:mr-0 md:ml-5 ">
              <Bookmark className="w-4 h-6 stroke-2 stroke-gray-500 fill-white" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-7 md:mt-0 justify-start gap-5">
            <p className=" py-1.5 bg-[#DFE4EB] px-5 md:mr-0 mr-3 rounded">
              #coffee
            </p>
            <p className=" py-1.5 bg-[#DFE4EB] px-5 md:mr-0 mr-3  rounded">
              #hotChocolate
            </p>
          </div>
          <div className="flex flex-col md:flex-row mt-9 gap:3 md:gap-16">
            <div>
              <p className="text-[#788494]  text-sm">LOCATION</p>
              <p className="text-xl flex">
                Banjara Hills road no 11{" "}
                <ChevronDown className="md:ml-2 w-12 md-w-12" />
              </p>
            </div>
            <div className="md:mt-0 mt-3">
              <p className="text-[#788494] text-sm">OPTION</p>
              <p className="text-xl flex">
                Delivery <ChevronDown className=" w-12 md-w-12 md:ml-2" />
              </p>
            </div>
          </div>
          <div className="h-auto flex md:flex-row flex-col md:mr-0 mr-3 md:justify-around md:items-center bg-white my-5 rounded border-[#D8E4EA] p-3">
            <div className="md:border-r-2 md:border-[#D8E4EA]  md:pr-8">
              <p className="text-[#788494] text-sm">RATING</p>
              <p className="text-lg text-[#C10031] flex">
                <Star className="mr-1 stroke-2 stroke-[#C10031] fill-white " />
                4.5 Rating
              </p>
            </div>
            <div className="md:border-r-2 md:border-[#D8E4EA] pr-8">
              <p className="text-[#788494] text-sm mt-3 md:mt-0">
                TIME TO DELIVER
              </p>
              <p className="text-lg  text-[#C10031]  flex">
                <Clock className="mr-1 stroke-2 stroke-[#C10031] fill-white " />
                Delivery
              </p>
            </div>
            <div>
              <p className="text-[#788494] text-sm mt-3 md:mt-0">REWARDS</p>
              <p className="text-lg text-[#C10031] flex">
                <XCircle className="mr-1 stroke-2 stroke-[#C10031] fill-white " />
                Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={Coffee} alt="coffe" className="h-80 md:block hidden "></img>
    </div>
  );
}

export default banner1;
