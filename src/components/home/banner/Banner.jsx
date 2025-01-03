import bannerImg from "../../../assets/Image/banner img.png";
import starIcon from "../../../assets/Image/star.png";
import offerIcon from "../../../assets/Image/offer.png";

const Banner = () => {
  return (
    <div className="md:relative md:py-[130px] md:px-[300px]">
      <div className="items-center px-4 pt-8 md:p-0 md:flex">
        <div className="md:mt-36 md:max-w-lg">
          <h1 className=" translate-x-0 md:-translate-y-36 md:absolute text-white text-[40px] md:text-[100px] uppercase font-semibold md:font-bold leading-none inline-block md:bg-red-700 md:bg-opacity-60 md:z-10 md:pr-4 md:pt-4 md:pb-4">
            Taste the authentic <br /> Saudi cuisine
          </h1>
          <p className="pt-8 mb-8 text-xl text-white md:pt-24 lg:text-2xl">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <button className="px-4 md:px-8 py-4 flex md:flex-none mx-auto md:mx-0 md:text-start text-center font-semibold md:text-lg  uppercase bg-[#FEBF00] text-black">
            Explore Menu
          </button>
        </div>
        <div className="relative pt-8 md:ml-24 md:w-1/2">
          <img
            className="object-cover w-full h-full shadow-lg "
            src={bannerImg}
            alt="Saudi Cuisine"
          />
          <img
            className="absolute top-4 md:-top-2 -right-2 size-6 md:size-16 md:-right-8"
            src={starIcon}
            alt=""
          />
          <img
            className="absolute bottom-2 md:bottom-0 h-16 md:h-24 right-2 md:-right-12 bg-[#FEBF00] rounded-full p-1 md:p-2"
            src={offerIcon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
