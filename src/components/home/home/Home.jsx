import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import MarketExperience from "../marketExperience/MarketExperience";
import PopularFood from "../popularFood/PopularFood";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Soft Restaurant | Home</title>
      </Helmet>
      <div className="bg-gradient-to-r from-[#BD1F17] via-[#A51D13] to-[#8E1B0F]">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <div className="px-4 pt-6 md:pt-[120px] md:px-[300px]">
        <MarketExperience></MarketExperience>
      </div>
      <div className="pt-6 md:pt-[120px] md:px-[300px] px-4 bg-[#f7f4ec]">
        <PopularFood></PopularFood>
      </div>
    </div>
  );
};

export default Home;
