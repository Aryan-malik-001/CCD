import React, { useState } from "react";
import { ChevronLeft } from "heroicons-react";

function Dropdown() {
  const [click, setClick] = useState(false);

  const dropAction = () => {
    var element = document.getElementsByClassName("dropdownIcon");
    var list = document.getElementsByClassName("nav-list");
    if (click === true) {
      element[0].style.transform = "rotate(0deg)";
      list[0].style.display = "none";
      setClick(false);
    } else {
      element[0].style.transform = "rotate(-90deg)";
      list[0].style.display = "block";
      setClick(true);
    }
  };

  return (
    <div className="md:hidden flex items-center ">
      <ul
        type="none"
        className="nav-list bg-white mt-3 rounded hidden px-6 py-3 relative left-11 gap-5 top-32"
      >
        <li>Order Now</li>
        <li className="pt-3"> Rewards </li>
        <li className="pt-3">Gifting </li>
        <li className="pt-3">Our Story </li>
        <li className="pt-3">All Stores </li>
      </ul>
      <ChevronLeft
        className="dropdownIcon fill-white mr-7 delay-150 ease-in duration-100"
        onClick={dropAction}
      />
    </div>
  );
}

export default Dropdown;
