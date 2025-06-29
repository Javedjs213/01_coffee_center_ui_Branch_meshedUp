import React from "react";
import cupImage from "../../assets/cup.png";

function CupContainer() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-3/4">
      <div className=" grid grid-cols content-around">
        <div className="text-6xl font-bold ms-24 text-gray-200">
          <h2>Black</h2>
          <h2>Freshner</h2>
        </div>

        <div className="relative p-6 font-sans text-gray-200">
          <div className="bg-gray-700 w-1/2 h-full absolute top-0 z-0 opacity-50 "></div>
          <h3 className="ms-8 text-3xl">Black Lifestyle Lovers,</h3>
          <p className="ms-8 mt-3 text-sm/8">
            This can be seen as a symbol of simplicity, individuality, and a straightforward approach to life. The act of drinking black             coffee, without the addition of milk or sugar, often reflects a preference for a pure, unadulterated experience, both in                 coffee and in life. 
          </p>
        </div>
      </div>



      <div className="flex justify-center h-170 relative">
        <div className="size-48 absolute top-20 left-60 rounded-full border-20 border-amber-500 z-10"></div>
        <img src={cupImage} className="h-19/20 absolute z-20" alt="" />
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
