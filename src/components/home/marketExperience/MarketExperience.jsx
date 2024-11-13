import React, { useState } from "react";
import img from "../../../assets/Image/marketImg.png";
import { FiPhoneCall } from "react-icons/fi";
import IconSection from "./IconSection";
import tomatoImg from "../../../assets/Image/tomato.png";

const MarketExperience = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <section className="relative mb-10 md:mb-24">
      <div className="md:mb-[74px]">
        <div className="md:flex md:gap-10">
          {/* Image Section */}
          <div className="relative flex justify-center md:w-1/2">
            <img src={img} alt="" className="w-[600px]" />
            <div className="absolute flex items-center gap-1 p-2 bg-white md:gap-3 md:p-5 rounded-xl md:rounded-2xl top-2 md:top-8 left-2 md:left-8">
              <div
                className="text-[#FEBF00] radial-progress"
                style={{ "--value": 80 }}
                role="progressbar"
              >
                <span className="text-black md:text-[20px] font-semibold">
                  50%+
                </span>
              </div>
              <h4 className="font-semibold md:text-lg">
                Market <br /> Experiences
              </h4>
            </div>
          </div>

          {/* Content Section */}
          <div className="pt-4 md:pt-0 md:w-1/2">
            <div>
              <div className="flex items-center gap-6">
                {/* About Section */}
                <a
                  onClick={() => setActiveTab("about")}
                  className={`cursor-pointer ${
                    activeTab === "about"
                      ? "bg-[#B52B1D] text-white p-2 md:p-3"
                      : "font-medium"
                  } `}
                >
                  <h3>About</h3>
                </a>
                {/* Experience Section */}
                <a
                  onClick={() => setActiveTab("experience")}
                  className={`cursor-pointer ${
                    activeTab === "experience"
                      ? "bg-[#B52B1D] text-white p-2 md:p-3"
                      : "font-medium"
                  }`}
                >
                  <h3>Experience</h3>
                </a>
                {/* Contact Section */}
                <a
                  onClick={() => setActiveTab("contact")}
                  className={`cursor-pointer ${
                    activeTab === "contact"
                      ? "bg-[#B52B1D] text-white p-2 md:p-3"
                      : "font-medium"
                  } `}
                >
                  <h3>Contact</h3>
                </a>
              </div>

              {/* Content for each Tab */}
              <div className="mt-6">
                {activeTab === "about" && (
                  <div className="pb-6">
                    <h2 className="text-2xl pb-4 md:pb-8 md:text-[52px] uppercase leading-tight md:leading-none font-bold">
                      Exceptional culinary experience and delicious food
                    </h2>
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ornare non sed est cursus. Vel hac convallis ipsum,
                      facilisi odio pellentesque bibendum viverra tempus. Lorem
                      ipsum dolor sit amet consectetur adipiscing elit do
                      eiusmod tempor incididunt ut labore et dolore magna minim
                      veniam nostrud exercitation.
                    </p>

                    <div className="flex items-center gap-2 mt-8 md:gap-10">
                      {/* Button */}
                      <button className="px-4 md:px-8 py-2 md:py-4 font-semibold text-sm md:text-lg uppercase bg-[#FEBF00] text-black flex-shrink-0">
                        About More
                      </button>

                      {/* Phone Section */}
                      <span className="flex items-center gap-2 md:gap-4">
                        <FiPhoneCall className="text-xl md:text-2xl text-[#BD1F17]" />
                        <h5 className="text-sm font-bold md:text-lg">
                          +88 1234 567 890
                        </h5>
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="pb-6">
                    <h2 className="text-2xl pb-4 md:pb-8 md:text-[52px] uppercase leading-tight md:leading-none font-bold">
                      Exceptional culinary experience and delicious food
                    </h2>
                    <p>
                      With over 5 years in the culinary industry, we have
                      proudly served as a cornerstone of fine dining in the
                      community. Our experience spans from crafting exquisite
                      dishes that blend traditional flavors with modern
                      techniques, to creating memorable dining moments for every
                      guest. Join us to experience the artistry of taste and the
                      warmth of our hospitality and our group.
                    </p>
                    <div className="flex items-center gap-2 mt-8 md:gap-10">
                      {/* Button */}
                      <button className="px-4 md:px-8 py-2 md:py-4 font-semibold text-sm md:text-lg uppercase bg-[#FEBF00] text-black flex-shrink-0">
                        About More
                      </button>

                      {/* Phone Section */}
                      <span className="flex items-center gap-2 md:gap-4">
                        <FiPhoneCall className="text-xl md:text-2xl text-[#BD1F17]" />
                        <h5 className="text-sm font-bold md:text-lg">
                          +88 1234 567 890
                        </h5>
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "contact" && (
                  <div>
                    <h2 className="text-2xl pb-4 md:pb-8 md:text-[52px] uppercase leading-tight md:leading-none font-bold">
                      Contact Us
                    </h2>
                    <p className="mt-2">
                      We'd love to hear from you! Whether you’re planning a
                      visit, need to make a reservation, or have questions about
                      our menu, feel free to reach out.
                    </p>

                    <div className="mt-4 space-y-4">
                      {/* Address */}
                      <div>
                        <h3 className="text-xl font-semibold">Our Location:</h3>
                        <p>1234 Culinary Avenue, Foodie Town, FL 56789</p>
                      </div>

                      {/* Email */}
                      <div>
                        <h3 className="text-xl font-semibold">Email:</h3>
                        <p>contact@restaurantname.com</p>
                      </div>

                      {/* Operating Hours */}
                      <div>
                        <h3 className="text-xl font-semibold">
                          Operating Hours:
                        </h3>
                        <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                        <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      {/* Social Media Icons (Example placeholders, add actual icons if needed) */}
                      <div className="flex gap-4 mt-2">
                        <a
                          href="#"
                          className="font-semibold text-blue-600 md:text-xl"
                        >
                          Facebook
                        </a>
                        <a
                          href="#"
                          className="font-semibold text-blue-400 md:text-xl"
                        >
                          Twitter
                        </a>
                        <a
                          href="#"
                          className="font-semibold text-pink-600 md:text-xl"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <IconSection></IconSection>
      </div>
      <div>
        <img
          className="absolute w-44 hidden md:block -right-36 md:w-64 md:-right-[475px] bottom-20"
          src={tomatoImg}
          alt=""
        />
      </div>
    </section>
  );
};

export default MarketExperience;
