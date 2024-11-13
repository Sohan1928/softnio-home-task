import React from "react";
import { LiaSquareSolid } from "react-icons/lia";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import CustomerVideo from "./CustomerVideo";
import tomatoImg2 from "../../../assets/Image/tomato2.png";

const CustomerSay = () => {
  return (
    <div className="mt-20 px-4 md:px-[300px] md:mt-[120px]">
      <div className="relative">
        <span className="flex items-center gap-3">
          <LiaSquareSolid className="text-[#BD1F17] size-5"></LiaSquareSolid>
          <h5 className="text-[#BD1F17] text-xl font-bold">
            Crispy, Every Bite Taste
          </h5>
        </span>
        <h2 className="text-3xl font-bold uppercase mt-6 md:text-[62px] text-black leading-snug">
          What Some of my <br /> Customers Say
        </h2>
        <div className="absolute right-0 items-center justify-end hidden gap-8 md:flex top-8 ">
          <span className="p-4 rounded-full shadow-lg bg-stone-100">
            <IoIosArrowBack className="size-8"></IoIosArrowBack>
          </span>
          <span className="p-4 rounded-full shadow-lg bg-stone-100">
            <IoIosArrowForward className="size-8 text-[#BD1F17]"></IoIosArrowForward>
          </span>
        </div>
        <div>
          <img
            className="absolute hidden rotate-90 size-56 -left-[420px] md:inline-block"
            src={tomatoImg2}
            alt=""
          />
        </div>
      </div>
      <CustomerVideo></CustomerVideo>
    </div>
  );
};

export default CustomerSay;
