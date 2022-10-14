import React from "react";
import logo from "../assets/logo.svg";
import { UserCircle, ShoppingBag, ChevronDown } from "heroicons-react";
import Dropdown from "./subComponent/dropdown";
function navbar() {
  return (
    <div className="fixed top-2.5 left-2.5 right-2.5 bg-[#C10031] w-auto h-20 rounded-lg flex justify-between items-center">
      <div className=" ml-7">
        <img src={logo} alt="logo" className="w-11 h-16"></img>
      </div>
      <div className="md:flex mr-7 text-white hidden">
        <div className="flex gap-10 pr-10">
          <a href="#0">Order Now</a>
          <a href="#0">Rewards</a>
          <a href="#0">Gifting</a>
          <a href="#0">Our Story</a>
          <a href="#0">All Stores</a>
        </div>
        <div className="flex gap-3">
          <UserCircle />
          <ShoppingBag />
          <ChevronDown />
        </div>
      </div>
      <Dropdown c></Dropdown>
    </div>
  );
}

export default navbar;
