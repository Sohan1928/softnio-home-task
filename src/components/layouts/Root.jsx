import { Outlet } from "react-router-dom";
import Navbar from "../home/navbar/Navbar";
import Footer from "../home/footer/Footer";

const Root = () => {
  return (
    <div className="px-[30px] pt-5 md:pt-[35px] md:px-[300px]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
