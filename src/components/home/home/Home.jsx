import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";

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
    </div>
  );
};

export default Home;
