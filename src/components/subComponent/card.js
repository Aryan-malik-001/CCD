import React from "react";
import Coffee from "../../assets/coffee.jpg";
function Card() {
  return (
    <div className="flex w-fit flex-col md:flex-row items-center md:items-start rounded-lg bg-[#F4F6F9] overflow-clip ">
      <img
        src={Coffee}
        alt="product"
        className="w-40 h-40 object-cover p-2.5"
      ></img>
      <div className="flex flex-col justify-between overflow-auto">
        <div className="text-xl pt-3 text-clip md:text-left text-center">
          Dutch Truffle Cake
        </div>
        <div className="text-xs pt-3 text-clip md:text-left text-center">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
        </div>
        <hr></hr>
        <div className="flex flex-col md:flex-row justify-between items-center md:pr-7 md:pb-3">
          <div className="flex items-end md:mt-0 mt-3 gap-1">
            <div className="text-2xl ">₹456</div>
            <div className="line-through text-sm font-thin">₹529</div>
          </div>
          <div>
            <button className="w-full bg-black text-white md:my-0 my-2 rounded h-10 px-16">
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
