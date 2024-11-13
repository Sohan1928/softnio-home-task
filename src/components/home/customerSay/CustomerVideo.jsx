import React from "react";
import Videos from "../../../assets/Image/Video.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsQuote } from "react-icons/bs";
import groupImg from "../../../assets/Image/Group.png";

const CustomerVideo = () => {
  return (
    <div>
      <div className="md:flex md:flex-row flex-col items-center mt-12 md:mt-20 md:h-[550px]">
        <div className="order-1 md:order-2 md:h-[450px] w-full md:w-auto mb-0 md:mb-0 md:mr-4">
          <img src={Videos} alt="Video Thumbnail" className="w-full h-full" />
        </div>
        <div className="order-2 md:order-1 bg-[#FEBF00] md:h-[450px] px-4 md:px-14 py-8 w-full md:w-2/5 mt-0 md:mt-0 flex flex-col justify-between">
          <p className="relative text-base md:text-lg">
            You can't go wrong with Chicken Mandi, I had it twice. The chicken
            was cooked perfectly, juicy & soft (usually mandi chicken is a bit
            dry). I would definitely recommend it.
            <span className="absolute -top-1 -left-4">
              <BsQuote></BsQuote>
            </span>
          </p>
          <div className="relative flex items-center justify-between pt-12 md:pt-40">
            <span>
              <h4>Khalid Al Dawsry</h4>
              <p>Jeddah, Saudi</p>
            </span>
            <span>
              <img
                className="rounded-full size-12"
                src="http://res.cloudinary.com/du0uabbwo/image/upload/v1731521826/d8idkbxsjgxmuszyyysg.png"
                alt="Customer Profile"
              />
            </span>
            <span className="absolute -bottom-5 size-6 md:size-12 md:bottom-4 -left-4 md:-left-14">
              <img src={groupImg} alt="" />
            </span>
          </div>
          <div className="w-full mt-2 mb-3 border-t-2 border-gray-400"></div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 mt-8 md:hidden">
        <span className="p-4 rounded-full shadow-lg bg-stone-100">
          <IoIosArrowBack className="size-5"></IoIosArrowBack>
        </span>
        <span className="p-4 rounded-full shadow-lg bg-stone-100">
          <IoIosArrowForward className="size-5 text-[#BD1F17]"></IoIosArrowForward>
        </span>
      </div>
    </div>
  );
};

export default CustomerVideo;
