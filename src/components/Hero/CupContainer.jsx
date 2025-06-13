import React from "react";
import cupImage from "../../assets/cup.png";

function CupContainer() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-3/4  pb-10 overflow-hidden">
      <div className=" grid grid-cols content-around">
        <div className="text-7xl/24 my-10 md:my-0 font-extrabold ms-24 text-gray-200">
          <h2>Black</h2>
          <h2>Freshner</h2>
        </div>

        <div className="relative p-6 font-sans text-gray-200">
          <div className="bg-gray-700 w-1/2 h-full absolute top-0 z-0 opacity-50 "></div>
          <h3 className="ms-8 text-3xl">Black Lifestyle Lovers,</h3>
          <p className="ms-8 mt-3 text-sm/8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
            doloribus dolore cum aspernatur iusto quibusdam tempore. Assumenda,
            debitis delenition aspernatur
          </p>
        </div>
      </div>



      <div className="flex justify-center h-170">
        <div className="relative flex justify-center h-full w-[400px]">
          <div className="absolute size-48 top-18 left-60 rounded-full border-20 border-amber-500 z-10"></div>
          <img src={cupImage} className="absolute z-20" alt="" />
        </div>
      </div>



      <div className="hidden xl:flex justify-center items-end mb-22">
        <div className="flex flex-wrap relative p-6 font-sans  text-gray-200 justify-end">
          <div className="bg-gray-700 w-1/2 h-full absolute top-0 z-0 opacity-50"></div>
          <h3 className="ms-8 text-3xl w-full">Black Freshner,</h3>
          <p className="ms-8 mt-3 text-sm/8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
            doloribus dolore cum aspernatur iusto quibusdam tempore. Assumenda,
            debitis delenition aspernatur
          </p>
        </div>
      </div>
    </div>
  );
}

export default CupContainer;
