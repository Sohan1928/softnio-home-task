import React from "react";
import { LiaSquareSolid } from "react-icons/lia";
import TableInput from "./TableInput";

const BookYourTable = () => {
  return (
    <div>
      <div
        className="bg-cover"
        style={{
          backgroundImage:
            "url(http://res.cloudinary.com/du0uabbwo/image/upload/v1731517289/dsqza260axkhwjbdobgu.jpg)",
        }}
      >
        <div className="px-4 py-16 text-left md:w-1/2 md:py-24 md:pl-24">
          <div className="">
            <span className="flex items-center gap-3">
              <LiaSquareSolid className="text-[#BD1F17] size-5"></LiaSquareSolid>
              <h5 className="text-[#BD1F17] text-xl font-bold">Book Now</h5>
            </span>
            <h2 className="text-3xl font-bold uppercase mt-6 md:text-[62px] text-white">
              Book your table
            </h2>
            <p className="mt-5 text-white">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo <br /> molestie vel, ornare non id blandit netus.
            </p>
          </div>
          <TableInput></TableInput>
        </div>
      </div>
    </div>
  );
};

export default BookYourTable;
