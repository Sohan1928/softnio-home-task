import React from "react";
import icon1 from "../../../assets/Image/Vector.png";

const IconSection = () => {
  return (
    <div>
      <div className="items-center gap-12 space-y-8 md:flex md:gap-24">
        <span className="flex items-center gap-4 pt-8 md:gap-6">
          <img
            className="p-4 rounded-full shadow-lg md:p-6 bg-stone-100"
            src={icon1}
            alt=""
          />
          <span>
            <h2 className="text-lg font-bold uppercase md:text-2xl">
              First Delivery
            </h2>
            <p className="font-medium">Within 30 Minutes</p>
          </span>
        </span>
        <span className="flex items-center gap-4 md:gap-6">
          <img
            className="p-4 rounded-full shadow-lg md:p-6 bg-stone-100"
            src={icon1}
            alt=""
          />
          <span>
            <h2 className="text-lg font-bold uppercase md:text-2xl">
              Absolute Dinning
            </h2>
            <p className="font-medium">Within 30 Minutes</p>
          </span>
        </span>
        <span className="flex items-center gap-4 md:gap-6">
          <img
            className="p-4 rounded-full shadow-lg md:p-6 bg-stone-100"
            src={icon1}
            alt=""
          />
          <span>
            <h2 className="text-lg font-bold uppercase md:text-2xl">
              First Delivery
            </h2>
            <p className="font-medium">Within 30 Minutes</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default IconSection;
