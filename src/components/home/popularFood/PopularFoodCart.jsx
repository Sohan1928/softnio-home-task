import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import burger from "../../../assets/Image/burger.jpeg";
import frenjFry from "../../../assets/Image/frenj fry.jpeg";
import chickenBall from "../../../assets/Image/chicken ball.jpeg";
import pizza from "../../../assets/Image/pizza.png";

const PopularFoodCart = () => {
  // Slider settings
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjusts for screens smaller than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Adjusts for screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="pb-24 overflow-x-hidden">
      <Slider {...settings}>
        {/* image 1 */}
        <div className="p-4 text-center bg-white h-[360px]">
          <img src={burger} alt="" />
          <div className="w-20 h-1 mx-auto my-3 bg-[#BD1F17]"></div>
          <span>
            <h3 className="py-3 text-2xl font-bold uppercase">
              Vegetables Burger
            </h3>
            <p>Barbecue Italian cuisine burger</p>
          </span>
        </div>
        {/* image 2 */}
        <div className="items-center p-4 text-center bg-white h-[360px]">
          <img
            className="flex items-center mx-auto size-48"
            src={pizza}
            alt=""
          />
          <div className="w-20 h-1 mx-auto my-3 bg-[#BD1F17]"></div>
          <span>
            <h3 className="py-4 text-2xl font-bold uppercase">
              Vegetables Pizza
            </h3>
            <p>Barbecue Italian cuisine pizza</p>
          </span>
        </div>
        {/* image 3 */}
        <div className="p-4 text-center bg-white h-[360px]">
          <img src={frenjFry} alt="" />
          <div className="w-20 h-1 mx-auto my-3 bg-[#BD1F17]"></div>
          <span>
            <h3 className="py-3 text-2xl font-bold uppercase">
              Vegetables French Fry
            </h3>
            <p>Barbecue Italian cuisine frenj fry</p>
          </span>
        </div>
        {/* image 4 */}
        <div className="p-4 text-center bg-white h-[360px]">
          <img src={chickenBall} alt="" />
          <div className="w-20 h-1 mx-auto my-3 bg-[#BD1F17]"></div>
          <span>
            <h3 className="py-3 text-2xl font-bold uppercase">
              Vegetables Chicken ball
            </h3>
            <p>Barbecue Italian cuisine chicken ball</p>
          </span>
        </div>
        {/* image 5 */}
        <div className="p-4 text-center bg-white h-[360px]">
          <img
            className="flex items-center mx-auto size-48"
            src={pizza}
            alt=""
          />
          <div className="w-20 h-1 mx-auto my-3 bg-[#BD1F17]"></div>
          <span>
            <h3 className="py-3 text-2xl font-bold uppercase">
              Vegetables Pizza
            </h3>
            <p>Barbecue Italian cuisine pizza</p>
          </span>
        </div>
        {/* image 6 */}
        <div className="p-4 text-center bg-white h-[360px]">
          <img src={chickenBall} alt="" />
          <div className="w-20 h-1 mx-auto my-3 bg-[#BD1F17]"></div>
          <span>
            <h3 className="py-3 text-2xl font-bold uppercase">
              Vegetables Chicken ball
            </h3>
            <p>Barbecue Italian cuisine chicken ball</p>
          </span>
        </div>
      </Slider>
    </div>
  );
};

export default PopularFoodCart;
