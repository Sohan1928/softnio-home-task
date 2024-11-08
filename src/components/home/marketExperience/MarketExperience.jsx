import React, { useState } from "react";
import img from "../../../assets/Image/marketImg.png";

const MarketExperience = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <section>
      <div className="mb-[74px]">
        <div className="md:gap-20 md:flex">
          <div className="relative">
            <img src={img} alt="" />
            <div className="absolute flex items-center gap-1 p-2 bg-white md:gap-3 md:p-5 rounded-xl md:rounded-2xl top-2 md:top-8 left-2 md:left-8">
              <div
                className="text-[#FEBF00] radial-progress"
                style={{ "--value": 80 }}
                role="progressbar"
              >
                <span className="text-black md:text-[26px] font-semibold">
                  50%+
                </span>
              </div>
              <h4 className="font-semibold md:text-lg">
                Market <br /> Experiences
              </h4>
            </div>
          </div>
          {/* --------------------------- */}
          <div className="pt-4 md:pt-0">
            <div>
              <div className="flex items-center gap-6">
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
                  <div>
                    <h2 className="text-xl font-bold">About Section</h2>
                    <p>
                      This is the About section. You can add your details here.
                    </p>
                  </div>
                )}

                {activeTab === "experience" && (
                  <div>
                    <h2 className="text-xl font-bold">Experience Section</h2>
                    <p>
                      This is the Experience section. Add your experience
                      details here.
                    </p>
                  </div>
                )}

                {activeTab === "contact" && (
                  <div>
                    <h2 className="text-xl font-bold">Contact Section</h2>
                    <p>
                      This is the Contact section. You can add contact
                      information here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketExperience;
