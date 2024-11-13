import React from "react";

const TableInput = () => {
  return (
    <div>
      <div className="mt-8">
        <div className="items-center gap-6 md:flex">
          {/* name and email field */}
          <input
            className="w-full px-4 py-4 text-white bg-transparent border border-white"
            type="text"
            name="name"
            id="1"
            placeholder="Your Name*"
          />
          <input
            className="w-full px-4 py-4 mt-4 text-white bg-transparent border border-white md:mt-0"
            type="email"
            name="email"
            id="2"
            placeholder="Your Email"
          />
        </div>
        {/* date and people field */}
        <div className="items-center gap-6 mt-0 md:mt-6 md:flex">
          <input
            className="w-full px-4 py-4 text-white bg-transparent border border-white"
            type="date"
            name="date"
            id="3"
          />
          <input
            className="w-full px-4 py-4 mt-4 text-white bg-transparent border border-white md:mt-0"
            type="text"
            name="people"
            id="4"
            placeholder="Total People"
          />
        </div>
        <textarea
          className="w-full p-4 mt-8 bg-transparent border border-white"
          name="text"
          rows={8}
          placeholder="Message"
          id=""
        ></textarea>
        <button className="px-4 mt-8 md:px-8 py-4 flex md:flex-none mx-auto md:mx-0 md:text-start text-center font-semibold md:text-lg  uppercase bg-[#FEBF00] text-black">
          Book Menu
        </button>
      </div>
    </div>
  );
};

export default TableInput;
