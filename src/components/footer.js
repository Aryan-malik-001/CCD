import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Froogal from "../assets/froogal.svg";
import logo1 from "../assets/logo1.svg";

function Footer() {
  return (
    <>
      <div className="bg-[#ECF0F4] md:h-auto md:w-full flex mt-24 md:flex-row flex-col justify-around items-start ">
        <div className="py-3 pl-28 md:my-10">
          <img src={logo1} alt="logo" className="w-20 h-30"></img>
        </div>
        <div className="pl-28 md:my-10">
          <ul>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Rewards
            </li>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              All Stores
            </li>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Offers
            </li>
          </ul>
        </div>
        <div className="pl-28 md:my-10">
          <ul>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Terms and Conditions
            </li>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Refund Policy
            </li>
          </ul>
        </div>
        <div className="pl-28 md:my-10">
          <ul>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About Us
            </li>
            <li className="py-3 text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="pl-28 mt-8 md:mx-10 md:my-10">
          <ul>
            <p className="text-gray-800 font-bold text-md pb-6">Follow us On</p>
            <div className="flex gap-8 pb-5">
              <FaFacebook className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
            <img src={Froogal} alt="logo" className="w-32 h-9"></img>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
