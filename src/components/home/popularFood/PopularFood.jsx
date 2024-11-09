import React from "react";
import { LiaSquareSolid } from "react-icons/lia";
import tomatoImg from "../../../assets/Image/tomato.png";
import PopularFoodCart from "./PopularFoodCart";

const PopularFood = () => {
  return (
    <div className="relative">
      <div className="">
        <span className="flex items-center gap-3">
          <LiaSquareSolid className="text-[#BD1F17] size-5"></LiaSquareSolid>
          <h5 className="text-[#BD1F17] text-xl font-bold">
            Crispy, Every Bites Taste
          </h5>
        </span>
        <h2 className="text-3xl font-bold uppercase text-[#181818] mt-6 md:text-[62px]">
          POPULAR FOOD ITEMS
        </h2>
      </div>
      <div className="mt-16">
        <PopularFoodCart></PopularFoodCart>
      </div>
      <div>
        <img
          className="absolute top-36 md:top-20 hidden md:block -left-36 md:-left-[470px] -rotate-90 w-44 md:w-64"
          src={tomatoImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default PopularFood;
<h2>this is popular food section</h2>;
