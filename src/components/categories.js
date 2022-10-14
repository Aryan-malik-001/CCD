import React from "react";

function categories() {
  return (
    <div className=" mt-8">
      <div className="text-center text-4xl ">All Categories</div>
      <div className="flex flex-wrap md:flex-row md:items-center justify-center mt-5 gap-3">
        <div className="flex flex-col flex-col items-center">
          <div className="w-32 h-32 rounded border-gray border-2 bg-cover bg-[url('assets/cake1.jpg')]"></div>
          <div className="text-center mt-2 text-xs">Cakes</div>
        </div>
        <div className="flex flex-col  items-center">
          <div className="w-32 h-32 rounded border-gray border-2 bg-cover bg-[url('assets/ice-cream1.jpg')]"></div>
          <div className="text-center mt-2 text-xs">scasc</div>
        </div>
        <div className="flex flex-col  items-center">
          <div className="w-32 h-32 rounded border-gray border-2 bg-cover bg-[url('assets/coffee1.jpg')]"></div>
          <div className="text-center mt-2 text-xs">scasc</div>
        </div>
        <div className="flex flex-col  items-center">
          <div className="w-32 h-32 rounded border-gray border-2 bg-cover bg-[url('assets/ice-cream1.jpg')]"></div>
          <div className="text-center mt-2 text-xs">scasc</div>
        </div>
        <div className="flex flex-col  items-center">
          <div className="w-32 h-32 rounded border-gray border-2 bg-cover bg-[url('assets/cake2.jpg')]"></div>
          <div className="text-center mt-2 text-xs">scasc</div>
        </div>
        <div className="flex flex-col  items-center">
          <div className="w-32 h-32 rounded border-gray border-2 bg-cover bg-[url('assets/cake1.jpg')]"></div>
          <div className="text-center mt-2 text-xs">scasc</div>
        </div>
        <div className="flex flex-col  items-center">
          <div className="w-32 h-32 rounded border-gray border-2 bg-cover bg-[url('assets/coffee1.jpg')]"></div>
          <div className="text-center mt-2 text-xs">scasc</div>
        </div>
      </div>
    </div>
  );
}

export default categories;
